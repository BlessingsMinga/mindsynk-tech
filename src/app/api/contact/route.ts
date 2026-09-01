import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const MAX_REQUEST_BYTES = 4_096
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX_REQUESTS = 5
const CONTACT_WEBHOOK_TIMEOUT_MS = 5_000

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().toLowerCase().email().max(254),
  message: z.string().trim().min(10).max(1000),
}).strict()

const requestCounts = new Map<string, { count: number; resetAt: number }>()

function getClientId(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
}

function isRateLimited(clientId: string) {
  const now = Date.now()
  const record = requestCounts.get(clientId)

  if (!record || record.resetAt <= now) {
    requestCounts.set(clientId, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  record.count += 1
  return record.count > RATE_LIMIT_MAX_REQUESTS
}

async function deliverContactSubmission(submission: z.infer<typeof contactSchema>) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL
  if (!webhookUrl) return false

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...submission, receivedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(CONTACT_WEBHOOK_TIMEOUT_MS),
  })

  return response.ok
}

export async function POST(request: NextRequest) {
  try {
    const contentLength = Number(request.headers.get("content-length") ?? 0)
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { success: false, error: "Request body is too large." },
        { status: 413 }
      )
    }

    if (isRateLimited(getClientId(request))) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again in a minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      )
    }

    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", issues: parsed.error.issues },
        { status: 400 }
      )
    }

    const delivered = await deliverContactSubmission(parsed.data)
    if (!delivered) {
      return NextResponse.json(
        { success: false, error: "Contact delivery is temporarily unavailable." },
        { status: 503 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Message received. We'll reply within one business day.",
    })
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "Request body must be valid JSON." },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}

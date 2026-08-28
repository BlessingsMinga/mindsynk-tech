import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", issues: parsed.error.issues },
        { status: 400 }
      )
    }

    // Placeholder: in production, persist to DB, send email, or push to a queue.
    // For now, we log to confirm receipt.
    console.log("[contact] New enquiry:", parsed.data)

    return NextResponse.json({
      success: true,
      message: "Message received. We'll reply within one business day.",
    })
  } catch {
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    )
  }
}

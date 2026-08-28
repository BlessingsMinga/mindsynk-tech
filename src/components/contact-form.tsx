"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(80, "Name is too long (max 80 characters)."),
  email: z
    .string()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Please tell us a bit more (at least 10 characters).")
    .max(1000, "Message is too long (max 1000 characters)."),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const { toast } = useToast()
  const [submitted, setSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error("Request failed")
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll reply within one business day.",
      })
      setSubmitted(true)
      reset()
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@mindsynk.tech.",
      })
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-border/60 bg-secondary/30 p-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">Message received</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Thank you for contacting MindSynk Technologies. We'll get back to you shortly.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setSubmitted(false)}
          className="mt-2"
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">
          Full name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          placeholder="Jane Doe"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          Email address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="jane@company.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          How can we help? <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, or challenge…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <Send className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

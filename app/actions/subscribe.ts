"use server"

import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"
import { resend, FROM_EMAIL, welcomeEmailHtml } from "@/lib/email"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const name = String(formData.get("name") ?? "").trim()
  const interest = String(formData.get("interest") ?? "").trim()

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    const inserted = await db
      .insert(subscribers)
      .values({
        email,
        name: name || null,
        interest: interest || null,
      })
      .onConflictDoNothing({ target: subscribers.email })
      .returning({ id: subscribers.id })

    // inserted is empty when the email already existed (onConflictDoNothing
    // skipped the row) — don't re-send the welcome email to existing subscribers.
    const isNewSubscriber = inserted.length > 0

    if (isNewSubscriber) {
      const { error: emailError } = await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        subject: "You're on the list — RMVentureX",
        html: welcomeEmailHtml(name),
      })

      // Don't fail the whole signup if the email send fails — the
      // subscriber is already saved. Just log it so it shows up in
      // Vercel's function logs for debugging.
      if (emailError) {
        console.log("[v0] resend send error:", emailError)
      }
    }

    return {
      status: "success",
      message: "You're on the list. Watch your inbox for the next research note.",
    }
  } catch (error) {
    console.log("[v0] subscribe error:", error)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}

"use server"

import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const name = String(formData.get("name") ?? "").trim()
  const interest = String(formData.get("interest") ?? "").trim()
  const consent = formData.get("consent") === "on"

  if (!consent) {
    return { status: "error", message: "Please agree to receive research emails before subscribing." }
  }

  if (!EMAIL_RE.test(email) || email.length > 254 || name.length > 120) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  try {
    await db
      .insert(subscribers)
      .values({
        email,
        name: name || null,
        interest: interest || null,
      })
      .onConflictDoNothing({ target: subscribers.email })

    return {
      status: "success",
      message: "You're on the list. Watch your inbox for the next research note.",
    }
  } catch (error) {
    console.error("Subscription database request failed", error)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}

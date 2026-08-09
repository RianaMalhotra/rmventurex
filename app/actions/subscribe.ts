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

  if (!EMAIL_RE.test(email)) {
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
    console.log("[v0] subscribe error:", error)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}

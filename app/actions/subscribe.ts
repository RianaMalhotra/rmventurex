"use server"

import { db } from "@/lib/db"
import { subscribers } from "@/lib/db/schema"
import { sendSignupNotification } from "@/lib/email"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_PLANS = ["standard", "pro", "premium"] as const

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const name = String(formData.get("name") ?? "").trim()
  const interest = String(formData.get("interest") ?? "").trim()
  const planRaw = String(formData.get("plan") ?? "standard").trim().toLowerCase()
  const plan = (VALID_PLANS as readonly string[]).includes(planRaw) ? planRaw : "standard"

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
        plan,
      })
      .onConflictDoUpdate({
        target: subscribers.email,
        set: { name: name || null, interest: interest || null, plan },
      })

    // Best-effort: notify the desk inbox. Never blocks the signup.
    await sendSignupNotification({ email, name: name || null, interest: interest || null, plan })

    const planLabel = plan === "standard" ? "the free Standard plan" : `the ${plan.charAt(0).toUpperCase() + plan.slice(1)} plan`
    const paid = plan !== "standard"

    return {
      status: "success",
      message: paid
        ? `You're on the list for ${planLabel}. We'll email you to set up billing and access.`
        : `You're on the list for ${planLabel}. Watch your inbox for the next research note.`,
    }
  } catch (error) {
    console.log("[v0] subscribe error:", error)
    return { status: "error", message: "Something went wrong. Please try again." }
  }
}

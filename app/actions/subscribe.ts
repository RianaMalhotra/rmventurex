"use server"

export type SubscribeState = {
  status: "idle" | "success" | "error"
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const INTERESTS = ["India Equities", "US Equities", "The Corridor Thesis", "Everything"]
const PLANS = ["Research - $99", "Desk+ - $199", "IntelFox Global - $299"]

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const interest = String(formData.get("interest") ?? "").trim()
  const plan = String(formData.get("plan") ?? "").trim()
  const consent = formData.get("consent") === "on"
  if (!consent) return { status: "error", message: "Please consent to receive subscription communications." }
  if (!name || name.length > 120 || !EMAIL_RE.test(email) || email.length > 254 || !INTERESTS.includes(interest) || !PLANS.includes(plan)) {
    return { status: "error", message: "Please complete all fields with valid information." }
  }
  const endpoint = process.env.GOOGLE_SHEETS_WEB_APP_URL
  const secret = process.env.GOOGLE_SHEETS_SUBMISSION_SECRET
  if (!endpoint || !secret || !/^https:\/\/script\.google\.com\/macros\/s\//.test(endpoint)) {
    return { status: "error", message: "Subscriptions are being configured. Please try again later." }
  }
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ name, email, interest, plan, consent: "Yes", token: secret }),
      redirect: "follow",
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    })
    const result: unknown = await response.json()
    if (!response.ok || typeof result !== "object" || result === null || !("ok" in result) || result.ok !== true) {
      throw new Error("Google Sheets endpoint rejected the submission")
    }
    return { status: "success", message: "Thank you! Your request has been received. Our team will reach out regarding payment and subscription options." }
  } catch (error) {
    console.error("Google Sheets subscription failed", error)
    return { status: "error", message: "We couldn't save your request. Please try again shortly." }
  }
}

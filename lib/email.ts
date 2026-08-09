import { Resend } from "resend"

// Signups are emailed here in addition to being stored in the database.
export const NOTIFY_TO = "rahul.malhotra@rmventurex.com"

// Resend requires a verified domain to send from your own address. Until
// rmventurex.com is verified in Resend, the safe default sender below still
// delivers to the Resend account owner's email. Set RESEND_FROM once the
// domain is verified (e.g. "RMVentureX <signups@rmventurex.com>").
const FROM = process.env.RESEND_FROM || "RMVentureX Signups <onboarding@resend.dev>"

type SignupPayload = {
  email: string
  name: string | null
  interest: string | null
  plan: string
}

export async function sendSignupNotification(payload: SignupPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // Email is best-effort; the signup is already saved to the database.
    console.log("[v0] RESEND_API_KEY not set — skipping signup email notification")
    return
  }

  const resend = new Resend(apiKey)
  const { email, name, interest, plan } = payload

  const rows: [string, string][] = [
    ["Plan", plan],
    ["Email", email],
    ["Name", name || "—"],
    ["Interested in", interest || "—"],
    ["Received", new Date().toUTCString()],
  ]

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#12161f;max-width:520px">
      <h2 style="font-family:Georgia,serif;margin:0 0 4px">New RMVentureX signup</h2>
      <p style="color:#5b6472;margin:0 0 16px">A new subscriber just joined the list.</p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                <td style="padding:8px 12px;border:1px solid #e6e8ec;background:#f6f7f9;font-weight:600;width:140px">${k}</td>
                <td style="padding:8px 12px;border:1px solid #e6e8ec">${v}</td>
              </tr>`,
          )
          .join("")}
      </table>
    </div>`

  try {
    await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject: `New ${plan} signup — ${email}`,
      html,
    })
  } catch (error) {
    // Never let an email failure break the signup flow.
    console.log("[v0] signup email failed:", error)
  }
}

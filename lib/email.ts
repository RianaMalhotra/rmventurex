import { Resend } from "resend"

// Reads RESEND_API_KEY from env — set this in your Vercel project's
// Environment Variables (Project Settings > Environment Variables).
export const resend = new Resend(process.env.RESEND_API_KEY)

// Must be an address on a domain you've verified in Resend
// (Resend dashboard > Domains). Falls back to Resend's shared
// onboarding domain for local testing, which only delivers to
// your own Resend account email.
export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "RMVentureX <onboarding@resend.dev>"

export function welcomeEmailHtml(name?: string | null) {
  const greeting = name ? `Hi ${name},` : "Hi,"
  return `
    <div style="font-family: Georgia, serif; max-width: 480px; margin: 0 auto; color: #12161f;">
      <p style="font-size: 13px; letter-spacing: 0.08em; text-transform: uppercase; color: #74695a;">RMVentureX</p>
      <h1 style="font-size: 22px; margin: 12px 0;">${greeting}</h1>
      <p style="font-size: 15px; line-height: 1.6;">
        You're on the list. You'll get deep-dives, sector themes, and contrarian calls
        straight to this inbox as soon as they publish — no spam, no filler.
      </p>
      <p style="font-size: 15px; line-height: 1.6;">
        In the meantime, you can browse recent notes on the site.
      </p>
      <p style="font-size: 13px; color: #74695a; margin-top: 32px;">
        You're receiving this because you subscribed at rmventurex.vercel.app.
        This is not investment advice.
      </p>
    </div>
  `
}

export type PlanId = "standard" | "pro" | "premium"

export type Plan = {
  id: PlanId
  name: string
  price: string
  cadence: string
  tagline: string
  featured?: boolean
  cta: string
  features: string[]
}

export const plans: Plan[] = [
  {
    id: "standard",
    name: "Standard",
    price: "Free",
    cadence: "",
    tagline: "For readers who want the published research, delivered.",
    cta: "Start free",
    features: [
      "Email alerts the moment a new note publishes",
      "Full access to research published on the website",
      "Monthly India–Canada corridor digest",
      "Ratings and coverage summaries",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$59",
    cadence: "/month",
    tagline: "For active investors who want the models and the personalisation.",
    featured: true,
    cta: "Go Pro",
    features: [
      "Everything in Standard",
      "Full deep-dive PDFs, models, and data appendices",
      "A personalised watchlist tracked by the desk",
      "Priority delivery — notes before the public web release",
      "Quarterly live analyst Q&A",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$159",
    cadence: "/month",
    tagline: "For serious allocators who want a direct line to the desk.",
    cta: "Go Premium",
    features: [
      "Everything in Pro",
      "1:1 analyst calls on your positions",
      "Bespoke company and sector research requests",
      "Real-time contrarian and event-driven alerts",
      "Direct line to the analyst for follow-ups",
    ],
  },
]

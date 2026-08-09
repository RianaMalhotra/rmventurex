import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    name: "Free",
    price: "$0",
    cadence: "forever",
    description: "Sample the desk before you commit. Good for readers who want the corridor thesis in their inbox.",
    features: ["Monthly sector-theme note", "The Corridor thesis roundup", "Public sample deep-dives"],
    cta: "Join free",
    featured: false,
  },
  {
    name: "Research",
    price: "$59",
    cadence: "/month",
    description: "The full desk, delivered as it publishes. Built for investors who size positions off primary research.",
    features: [
      "Every deep-dive, theme, and contrarian call",
      "Full rating history and conviction changes",
      "Priority email delivery",
      "Archive access to past notes",
    ],
    cta: "Subscribe to Research",
    featured: true,
  },
  {
    name: "Desk+",
    price: "$159",
    cadence: "/month",
    description: "For funds and family offices who want direct access alongside the research.",
    features: [
      "Everything in Research",
      "Quarterly 30-minute call with the desk",
      "Early access, 24 hours before publish",
      "Direct email line for follow-ups",
    ],
    cta: "Talk to us",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden />
            Pricing
          </div>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Research priced for people who act on it.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            No tiered paywalls on individual notes. Pick a plan, get everything that comes with it.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col gap-6 rounded-sm border p-7 ${
                tier.featured ? "border-accent bg-card ring-1 ring-accent" : "border-border bg-card"
              }`}
            >
              <div>
                {tier.featured && (
                  <span className="mb-3 inline-block rounded-sm bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="font-serif text-xl font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-semibold text-foreground">{tier.price}</span>
                  <span className="text-sm text-muted-foreground">{tier.cadence}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="flex flex-1 flex-col gap-2.5">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" strokeWidth={1.8} />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={tier.featured ? "default" : "outline"}
                className="rounded-sm"
                nativeButton={false}
                render={<Link href="#subscribe" />}
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Prices in USD, billed monthly. Cancel anytime. Nothing here constitutes investment advice.
        </p>
      </div>
    </section>
  )
}

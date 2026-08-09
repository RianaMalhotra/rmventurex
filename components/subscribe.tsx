"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"
import { Button } from "@/components/ui/button"

const initialState: SubscribeState = { status: "idle", message: "" }

const interests = ["India equities", "US equities", "The Corridor thesis", "Everything"]

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" size="lg" disabled={pending} className="rounded-sm">
      {pending ? "Adding you…" : "Subscribe"}
    </Button>
  )
}

export function Subscribe() {
  const [state, formAction] = useActionState(subscribe, initialState)

  return (
    <section id="subscribe" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60">
              <span className="h-px w-8 bg-accent" aria-hidden />
              Join the List
            </div>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              Get the next note before the market catches up.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-primary-foreground/70">
              Deep-dives, sector themes, and contrarian calls — delivered straight to your inbox. No spam, no filler.
              Unsubscribe anytime.
            </p>
          </div>

          <div className="rounded-sm bg-card p-6 text-card-foreground md:p-8">
            {state.status === "success" ? (
              <div className="flex flex-col items-start gap-3 py-4">
                <CheckCircle2 className="size-8 text-[var(--color-gain)]" strokeWidth={1.6} />
                <p className="font-serif text-xl font-semibold text-foreground">{"You're on the list."}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Investor"
                    className="h-11 rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@fund.com"
                    className="h-11 rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">
                    Most interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue={interests[3]}
                    className="h-11 rounded-sm border border-input bg-background px-3 text-sm text-foreground outline-none ring-ring/40 transition focus:ring-2"
                  >
                    {interests.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                {state.status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="size-4" />
                    {state.message}
                  </p>
                )}

                <SubmitButton />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  By subscribing you agree to receive research communications from VentureX. This is not investment
                  advice.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

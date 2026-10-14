"use client"

import { useActionState } from "react"
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"

const initialState: SubscribeState = { status: "idle", message: "" }
const inputClass = "mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25"

export function Subscribe() {
  const [state, formAction, pending] = useActionState(subscribe, initialState)
  return (
    <section id="subscribe" className="mx-auto max-w-6xl px-5 py-20">
      <div className="overflow-hidden rounded-xl border border-border bg-card px-6 py-12 shadow-xl shadow-black/10 md:px-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">RMVentureX Subscriptions</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Subscribe to RMVentureX</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">Choose your research interests and subscription plan. Someone from RMVentureX will contact you separately regarding payment and subscription options.</p>
        </div>
        {state.status === "success" ? (
          <div role="status" className="mx-auto mt-10 flex max-w-xl items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 p-5 text-foreground">
            <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-accent" />
            <div><p className="font-semibold">Request received</p><p className="mt-1 text-sm text-muted-foreground">{state.message}</p></div>
          </div>
        ) : (
          <form action={formAction} className="mx-auto mt-10 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">Name <span className="text-accent">*</span>
                <input name="name" type="text" autoComplete="name" required maxLength={120} placeholder="Your name" className={inputClass} />
              </label>
              <label className="block text-sm font-medium text-foreground">Email <span className="text-accent">*</span>
                <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className={inputClass} />
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">Most Interested In <span className="text-accent">*</span>
              <select name="interest" required defaultValue="" className={inputClass}>
                <option value="" disabled>Select your research interests</option>
                <option value="India Equities">India Equities</option>
                <option value="US Equities">US Equities</option>
                <option value="The Corridor Thesis">The Corridor Thesis</option>
                <option value="Everything">Everything</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-foreground">Subscription <span className="text-accent">*</span>
              <select name="plan" required defaultValue="" className={inputClass}>
                <option value="" disabled>Choose a subscription plan</option>
                <option value="Research - $99">Research - $99</option>
                <option value="Desk+ - $199">Desk+ - $199</option>
                <option value="IntelFox Global - $299">IntelFox Global - $299</option>
              </select>
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[#d8b76a]" />
              <span>I agree to be contacted by RMVentureX about my subscription request and to receive related research communications.</span>
            </label>
            {state.status === "error" && <p role="alert" className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{state.message}</p>}
            <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-sm transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70">
              {pending ? <><LoaderCircle className="size-4 animate-spin" /> Submitting…</> : <>Request subscription <ArrowRight className="size-4" /></>}
            </button>
            <p className="text-center text-xs leading-relaxed text-muted-foreground">No payment is collected on this website. This is a subscription inquiry, not investment advice.</p>
          </form>
        )}
      </div>
    </section>
  )
}

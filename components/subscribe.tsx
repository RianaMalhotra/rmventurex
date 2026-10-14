"use client"

import { useActionState } from "react"
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react"
import { subscribe, type SubscribeState } from "@/app/actions/subscribe"

const initialState: SubscribeState = { status: "idle", message: "" }

export function Subscribe() {
  const [state, formAction, pending] = useActionState(subscribe, initialState)

  return (
    <section id="subscribe" className="mx-auto max-w-6xl px-5 py-20">
      <div className="overflow-hidden rounded-xl border border-border bg-card px-6 py-12 shadow-xl shadow-black/10 md:px-14 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">RMVentureX Research Briefing</span>
          <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Stay ahead of the market.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Join our research mailing list for market perspectives, new research announcements, and updates from the desk.
          </p>
        </div>
        {state.status === "success" ? (
          <div role="status" className="mx-auto mt-10 flex max-w-xl items-start gap-3 rounded-lg border border-accent/40 bg-accent/10 p-5 text-foreground">
            <CheckCircle2 className="mt-0.5 size-6 shrink-0 text-accent" />
            <div><p className="font-semibold">Subscription received</p><p className="mt-1 text-sm text-muted-foreground">{state.message}</p></div>
          </div>
        ) : (
          <form action={formAction} className="mx-auto mt-10 max-w-2xl space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium text-foreground">
                Name <span className="font-normal text-muted-foreground">(optional)</span>
                <input name="name" type="text" autoComplete="name" maxLength={120} placeholder="Your name" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25" />
              </label>
              <label className="block text-sm font-medium text-foreground">
                Email address <span className="text-accent">*</span>
                <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@company.com" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25" />
              </label>
            </div>
            <label className="block text-sm font-medium text-foreground">
              Research interests <span className="font-normal text-muted-foreground">(optional)</span>
              <select name="interest" defaultValue="" className="mt-2 w-full rounded-md border border-border bg-background px-4 py-3 text-base text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25">
                <option value="">All research updates</option>
                <option value="Indian equities">Indian equities</option>
                <option value="US equities">US equities</option>
                <option value="India–Canada corridor">India–Canada investment corridor</option>
                <option value="Sector themes">Sector themes</option>
              </select>
            </label>
            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
              <input name="consent" type="checkbox" required className="mt-1 size-4 shrink-0 accent-[#d8b76a]" />
              <span>I agree to receive research emails from RMVentureX. I understand I can request to unsubscribe at any time.</span>
            </label>
            {state.status === "error" && <p role="alert" className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{state.message}</p>}
            <button type="submit" disabled={pending} className="flex w-full items-center justify-center gap-2 rounded-md bg-accent px-8 py-3.5 font-semibold text-accent-foreground shadow-sm transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70">
              {pending ? <><LoaderCircle className="size-4 animate-spin" /> Subscribing…</> : <>Subscribe to research <ArrowRight className="size-4" /></>}
            </button>
            <p className="text-center text-xs leading-relaxed text-muted-foreground">Research communications only. No investment advice. No payment required for mailing-list signup.</p>
          </form>
        )}
      </div>
    </section>
  )
}

import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, LockKeyhole, ChartNoAxesCombined } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { researchNotes, type ResearchKind } from "@/lib/research-data"

const kindStyles: Record<ResearchKind, string> = {
  "Deep-Dive": "bg-primary text-primary-foreground",
  "Sector Theme": "bg-secondary text-secondary-foreground",
  "Contrarian Call": "bg-accent text-accent-foreground",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export function generateStaticParams() {
  return researchNotes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = researchNotes.find((n) => n.slug === slug)
  if (!note) return {}
  return {
    title: `${note.title} — RMVentureX`,
    description: note.excerpt,
  }
}

export default async function ResearchNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = researchNotes.find((n) => n.slug === slug)

  if (!note) {
    notFound()
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16">
          <Link
            href="/#research"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to research
          </Link>

          <div className="mt-8 flex items-center justify-between gap-3">
            <span
              className={`inline-flex items-center rounded-sm px-2 py-1 text-[11px] font-medium uppercase tracking-wide ${kindStyles[note.kind]}`}
            >
              {note.kind}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {note.market} · {note.ticker}
            </span>
          </div>

          <h1 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            {note.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{note.rating}</span>
            <span>{note.company}</span>
            <span>{formatDate(note.date)}</span>
            <span>{note.readMins} min read</span>
          </div>

          <div className="mt-9 space-y-5 text-base leading-8 text-foreground/85 sm:text-lg">
            <p className="text-pretty">{note.excerpt}</p>
            <p className="text-pretty">
              This research preview introduces the central investment question and the factors our desk
              considers before taking a position. We examine the business fundamentals, the market
              assumptions behind the current valuation, and the developments that could change the thesis.
            </p>
          </div>

          <div className="mt-10 border-y border-border py-7">
            <div className="flex items-center gap-3 text-accent">
              <ChartNoAxesCombined className="size-5" aria-hidden="true" />
              <h2 className="font-serif text-xl font-semibold text-foreground">Inside the full research note</h2>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-md border border-border bg-secondary/30 px-4 py-3">Investment thesis &amp; key drivers</div>
              <div className="rounded-md border border-border bg-secondary/30 px-4 py-3">Valuation framework &amp; scenarios</div>
              <div className="rounded-md border border-border bg-secondary/30 px-4 py-3">Risks &amp; counterarguments</div>
              <div className="rounded-md border border-border bg-secondary/30 px-4 py-3">Catalysts &amp; monitoring points</div>
            </div>
          </div>

          <div className="relative mt-9 overflow-hidden rounded-xl border border-border bg-card">
            <div aria-hidden="true" className="pointer-events-none select-none px-7 pb-24 pt-7 blur-[5px] sm:px-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground">Thesis &amp; valuation framework</h2>
              <p className="mt-5 leading-8 text-muted-foreground">
                A disciplined valuation begins by separating durable operating performance from
                temporary market expectations. The complete note evaluates multiple scenarios,
                identifies the assumptions with the greatest impact, and considers what evidence
                would strengthen or weaken the investment case.
              </p>
              <p className="mt-4 leading-8 text-muted-foreground">
                Our risk review weighs business execution, industry structure, capital allocation,
                and macroeconomic sensitivity against the potential catalysts ahead.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-b from-background/5 via-background/70 to-background px-5 pb-8 pt-24 text-center sm:pb-10">
              <div className="flex size-12 items-center justify-center rounded-full border border-accent/50 bg-background text-accent shadow-lg">
                <LockKeyhole className="size-5" aria-hidden="true" />
              </div>
              <h2 className="mt-4 font-serif text-2xl font-semibold text-foreground">Continue with RMVentureX</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Unlock the complete research note, including detailed analysis, valuation scenarios, and risk assessment.
              </p>
              <Link
                href="/#pricing"
                className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#f3d28d]/60 bg-gradient-to-r from-[#d5a64e] via-[#f1cd82] to-[#c9983d] px-7 py-3 text-sm font-semibold text-[#071427] shadow-[0_4px_18px_rgba(218,169,77,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(218,169,77,0.4)]"
              >
                See Plans <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

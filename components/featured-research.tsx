import Link from "next/link"
import { ArrowUpRight, BookOpen, Clock3, FileText, LockKeyhole } from "lucide-react"
import { researchNotes, type ResearchKind } from "@/lib/research-data"

const kindStyles: Record<ResearchKind, string> = {
  "Deep-Dive": "border-[#e9bf70]/45 bg-[#e9bf70]/10 text-[#f1cd82]",
  "Sector Theme": "border-[#80b9ed]/40 bg-[#80b9ed]/10 text-[#a7d1fa]",
  "Contrarian Call": "border-[#e5a88b]/40 bg-[#e5a88b]/10 text-[#f2bfa5]",
}

const sectorBySlug: Record<string, string> = {
  "shopify-take-rate-ceiling": "Commerce & Fintech",
  "jio-arpu-inflection-retail-listing": "Telecom & Retail",
  "trimming-into-consensus-melt-up": "Semiconductors & AI",
  "india-credit-cycle-private-banks-nbfc": "Banking & Credit",
  "brookfield-carried-interest-flywheel": "Asset Management",
  "corridor-thesis-pension-capital-india-growth": "Cross-border Capital",
}

const initialsBySlug: Record<string, string> = {
  "shopify-take-rate-ceiling": "S",
  "jio-arpu-inflection-retail-listing": "R",
  "trimming-into-consensus-melt-up": "N",
  "india-credit-cycle-private-banks-nbfc": "IN",
  "brookfield-carried-interest-flywheel": "B",
  "corridor-thesis-pension-capital-india-growth": "IC",
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })
}

export function FeaturedResearch() {
  return (
    <section id="research" className="border-b border-[#d5a64e]/20 bg-[#061427]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-[#e9bf70]">
              <span className="h-px w-8 bg-[#d5a64e]" aria-hidden="true" />
              Research previews
            </div>
            <h2 className="mt-5 font-serif text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Inside the research desk
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#b9c8db]">
              Explore the investment questions, thesis summaries, and risk perspectives behind our research format.
            </p>
          </div>
          <Link href="/#pricing" className="inline-flex items-center gap-2 rounded-full border border-[#d5a64e]/60 px-5 py-2.5 text-sm font-semibold text-[#f1cd82] transition-colors hover:bg-[#d5a64e]/10">
            Explore subscriptions <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-5 rounded-md border border-[#d5a64e]/20 bg-[#10233b]/50 px-4 py-3 text-xs leading-relaxed text-[#aabbd0]">
          Illustrative research previews. The examples below demonstrate the report experience and should not be interpreted as verified current ratings or live investment recommendations.
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchNotes.map((note) => (
            <Link key={note.slug} href={`/research/${note.slug}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#d5a64e]/25 bg-[#0b2037] shadow-[0_10px_30px_rgba(0,0,0,.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#f1cd82]/70 hover:shadow-[0_16px_42px_rgba(213,166,78,.12)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1cd82]">
              <div className="relative overflow-hidden border-b border-[#d5a64e]/20 bg-[radial-gradient(ellipse_at_85%_5%,rgba(213,166,78,.18),transparent_65%),linear-gradient(125deg,#132d49,#07192d)] px-6 pb-5 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <span className="flex size-12 items-center justify-center rounded-xl border border-[#d5a64e]/50 bg-[#071427] font-serif text-xl font-bold text-[#f1cd82] shadow-[0_0_16px_rgba(213,166,78,.14)]" aria-label={`${note.company} identifier`}>
                    {initialsBySlug[note.slug] ?? note.company.slice(0, 2).toUpperCase()}
                  </span>
                  <span className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${kindStyles[note.kind]}`}>
                    {note.kind}
                  </span>
                </div>
                <div className="mt-5 flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">{note.company}</p>
                    <p className="mt-1 text-xs text-[#a8bdd5]">{sectorBySlug[note.slug] ?? "Equity Research"}</p>
                  </div>
                  <span className="shrink-0 rounded border border-white/15 bg-white/5 px-2 py-1 font-mono text-[11px] text-[#e6c888]">{note.market}{note.ticker !== "—" ? `:${note.ticker}` : ""}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#a8bdd5]">
                  <span className="inline-flex items-center gap-1"><FileText className="size-3" aria-hidden="true" /> {formatDate(note.date)}</span>
                  <span className="inline-flex items-center gap-1"><Clock3 className="size-3" aria-hidden="true" /> {note.readMins} min</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#f1cd82]">{note.title}</h3>
                <div className="mt-5 border-l-2 border-[#d5a64e] pl-3">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[.18em] text-[#f1cd82]">Thesis preview</p>
                  <p className="text-sm leading-relaxed text-[#bdcad9]">{note.excerpt}</p>
                </div>
                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#f1cd82]"><BookOpen className="size-4" aria-hidden="true" /> Preview report</span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#9cacc2]"><LockKeyhole className="size-3" aria-hidden="true" /> Full analysis</span>
                    <ArrowUpRight className="size-4 text-[#f1cd82] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

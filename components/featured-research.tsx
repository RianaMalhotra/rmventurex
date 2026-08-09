import { ArrowUpRight } from "lucide-react"
import { researchNotes, type ResearchKind } from "@/lib/research-data"

const kindStyles: Record<ResearchKind, string> = {
  "Deep-Dive": "bg-primary text-primary-foreground",
  "Sector Theme": "bg-secondary text-secondary-foreground",
  "Contrarian Call": "bg-accent text-accent-foreground",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export function FeaturedResearch() {
  return (
    <section id="research" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" aria-hidden />
              Selected Notes
            </div>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              From the desk
            </h2>
          </div>
          <p className="text-sm text-muted-foreground">A sample of recent published research.</p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {researchNotes.map((note) => (
            <article
              key={note.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`inline-flex items-center rounded-sm px-2 py-1 text-[11px] font-medium uppercase tracking-wide ${kindStyles[note.kind]}`}
                >
                  {note.kind}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {note.market} · {note.ticker}
                </span>
              </div>

              <h3 className="mt-5 text-balance font-serif text-lg font-semibold leading-snug text-foreground">
                {note.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{note.excerpt}</p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-foreground">{note.rating}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {formatDate(note.date)} · {note.readMins} min read
                  </span>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

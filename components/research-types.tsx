import { FileSearch, LayoutGrid, TrendingDown } from "lucide-react"

const types = [
  {
    icon: FileSearch,
    label: "Company Deep-Dives",
    body: "Line-by-line teardowns of the businesses we cover — unit economics, capital allocation, and the two or three variables that actually move the stock.",
  },
  {
    icon: LayoutGrid,
    label: "Sector Themes",
    body: "Cross-sectional work that ranks names within a theme, so you know not just what is cheap, but what is cheap for the right reason.",
  },
  {
    icon: TrendingDown,
    label: "Contrarian Calls",
    body: "Where our read of the fundamentals diverges from consensus — including the uncomfortable calls to trim, avoid, or wait.",
  },
]

export function ResearchTypes() {
  return (
    <section id="approach" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Three formats. One standard of rigor.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every note starts from primary data and ends with a position you can size. No maybe-both-ways hedging.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {types.map((t) => (
            <div key={t.label} className="flex flex-col gap-4 bg-card p-7">
              <t.icon className="size-6 text-accent" strokeWidth={1.6} />
              <h3 className="font-serif text-xl font-semibold text-foreground">{t.label}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

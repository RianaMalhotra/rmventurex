import Image from "next/image"

const points = [
  "Canadian pension and institutional capital is one of the largest patient allocators into Indian growth assets.",
  "Cross-listed and dual-exposure names sit at the seam of two markets that rarely trade on the same clock.",
  "We map the flow — and the listed proxies positioned to receive the next tranche of it.",
]

export function Corridor() {
  return (
    <section id="corridor" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl items-stretch gap-0 md:grid-cols-2">
        <div className="grid min-h-[440px] grid-rows-2 overflow-hidden border-b border-border md:min-h-[600px] md:border-b-0 md:border-r">
          <div className="relative overflow-hidden">
            <Image
              src="/images/nyc-skyline.svg"
              alt="Illustration of the New York City skyline with Manhattan skyscrapers"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
              loading="lazy"
            />
            <span className="absolute bottom-3 left-4 rounded bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">New York</span>
          </div>
          <div className="relative overflow-hidden border-t border-accent/40">
            <Image
              src="/images/toronto-skyline.png"
              alt="Toronto skyline at dusk with the CN Tower"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[center_62%]"
              loading="lazy"
            />
            <span className="absolute bottom-3 left-4 rounded bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">Toronto</span>
          </div>
        </div>

        <div className="px-5 py-16 md:px-12">
          <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-accent" aria-hidden />
            The Thematic Focus
          </div>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            The India–Canada investment corridor
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            It is the through-line of our coverage: capital moving between two markets, and the companies that stand to
            gain from it. Most desks cover one side. We sit in the middle.
          </p>

          <ul className="mt-8 flex flex-col gap-5">
            {points.map((p, i) => (
              <li key={i} className="flex gap-4">
                <span className="mt-1 font-serif text-sm font-semibold text-accent tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed text-foreground">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

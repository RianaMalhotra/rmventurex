export function About() {
  return (
    <section id="about" className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-8 bg-accent" aria-hidden />
              About the Desk
            </div>
            <h2 className="mt-5 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Built on the buy-side and the sell-side.
            </h2>
          </div>

          <div className="space-y-5 text-pretty leading-relaxed text-muted-foreground">
            <p>
              RMVentureX is an independent equity research desk. Independent means our analysis answers to the reader, not
              to a banking pipeline, a distribution quota, or an issuer relationship.
            </p>
            <p>
              The desk is built on 25+ years across institutional capital markets — the kind of experience that teaches
              you the difference between a story stock and a business, and why the two so often trade as if they were the
              same thing.
            </p>
            <p>
              We publish for investors who want to understand a position before they take it: the thesis, the risks, the
              rating, and the reason we could be wrong. Everything is sourced, dated, and stands on its own.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

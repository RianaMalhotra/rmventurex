import { BarChart3, UsersRound, FileText } from "lucide-react"

const pillars = [
  {
    icon: BarChart3,
    label: "AI-powered intelligence",
    copy: "RMVentureX pairs AI-driven research with old-fashioned independence. Our models continuously scan filings, price action, and macro data across Indian and US markets to surface signals faster than manual coverage ever could. And because we answer only to the reader — not a banking pipeline, a distribution quota, or an issuer relationship — every signal gets stress-tested by our analysts before it reaches you.",
  },
  {
    icon: UsersRound,
    label: "Institutional experience",
    copy: "The desk is built on 25+ years across institutional capital markets — the kind of experience that teaches you the difference between a story stock and a business, and why the two so often trade as if they were the same thing.",
  },
  {
    icon: FileText,
    label: "Research with conviction",
    copy: "We publish for investors who want to understand a position before they take it: the thesis, the risks, the rating, and the reason we could be wrong. Everything is sourced, dated, and stands on its own.",
  },
]

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden border-b border-border bg-[#071424]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_65%,rgba(195,145,66,0.14),transparent_42%),radial-gradient(ellipse_at_85%_10%,rgba(48,87,141,0.16),transparent_50%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(135deg,transparent_47%,#d6b06a_50%,transparent_53%)] [background-size:20px_20px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:py-28">
        <div className="relative flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-foreground/80">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              About the Desk
            </div>
            <h2 className="mt-7 max-w-xl text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl xl:text-6xl">
              Built on the <span className="text-accent">buy-side</span> and the <span className="text-accent">sell-side.</span>
            </h2>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] leading-6 text-foreground/75 sm:text-sm">
              Institutional discipline. Independent thinking.
            </p>
          </div>
          <div className="relative mt-14 hidden min-h-52 overflow-hidden rounded-sm border border-accent/20 bg-gradient-to-br from-[#172e46] via-[#0a1c30] to-[#08101e] shadow-[0_20px_70px_rgba(0,0,0,0.22)] lg:block">
            <div aria-hidden="true" className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-accent/20 shadow-[0_0_0_28px_rgba(212,168,92,0.035),0_0_0_65px_rgba(212,168,92,0.025),0_0_0_110px_rgba(212,168,92,0.015)]" />
            <div className="relative flex h-full flex-col justify-end p-8">
              <div className="mb-5 h-px w-12 bg-accent" />
              <p className="font-serif text-3xl text-foreground">25+ years</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground/75">Institutional capital markets experience informing every research note.</p>
            </div>
          </div>
        </div>
        <div className="divide-y divide-white/15 border-y border-white/15">
          {pillars.map(({ icon: Icon, label, copy }) => (
            <article key={label} className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-9">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/40 bg-accent/[0.07] text-accent shadow-[0_0_28px_rgba(214,173,96,0.08)] transition-colors duration-300 group-hover:bg-accent/15">
                <Icon aria-hidden="true" className="h-6 w-6" strokeWidth={1.65} />
              </div>
              <div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground sm:text-2xl">{label}</h3>
                <p className="text-base leading-8 text-foreground/80 sm:text-[17px]">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

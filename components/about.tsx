import Image from "next/image"
import { BarChart3, UsersRound, FileText } from "lucide-react"

const details = [
  {
    icon: BarChart3,
    copy: "RMVentureX pairs AI-driven research with old-fashioned independence. Our models continuously scan filings, price action, and macro data across Indian and US markets to surface signals faster than manual coverage ever could. And because we answer only to the reader — not a banking pipeline, a distribution quota, or an issuer relationship — every signal gets stress-tested by our analysts before it reaches you.",
  },
  {
    icon: UsersRound,
    copy: "The desk is built on 25+ years across institutional capital markets — the kind of experience that teaches you the difference between a story stock and a business, and why the two so often trade as if they were the same thing.",
  },
  {
    icon: FileText,
    copy: "We publish for investors who want to understand a position before they take it: the thesis, the risks, the rating, and the reason we could be wrong. Everything is sourced, dated, and stands on its own.",
  },
]

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden border-b border-border bg-[#041426]">
      <div className="grid min-h-[710px] lg:grid-cols-[49%_51%]">
        <div className="relative isolate flex min-h-[570px] flex-col overflow-hidden bg-[#071526] lg:min-h-[710px]">
          <Image
            src="/images/about-desk-background.png"
            alt="Financial research desk with capital markets books, investment reports, a pen, and an illuminated globe"
            fill
            priority={false}
            sizes="(min-width: 1024px) 49vw, 100vw"
            className="absolute inset-0 -z-20 object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#041426]/90 via-[#041426]/55 to-[#041426]/10" />
          <div className="relative z-10 px-6 pt-16 sm:px-12 lg:pl-[max(3rem,calc((100vw-1440px)/2))] lg:pt-20">
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground/90 sm:text-sm">
              <span className="h-px w-12 bg-accent" aria-hidden="true" />
              About the Desk
            </div>
            <h2 className="mt-7 max-w-[690px] text-balance font-serif text-[clamp(2.5rem,4vw,4.2rem)] font-semibold leading-[1.12] tracking-tight text-foreground">
              Built on the <span className="text-accent">buy-side</span> and the <span className="text-accent">sell-side.</span>
            </h2>
            <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] leading-6 text-foreground/90 sm:text-sm">
              Institutional discipline. Independent thinking.
            </p>
          </div>

        </div>

        <div className="relative isolate flex flex-col justify-center overflow-hidden bg-[#041426] px-6 py-14 sm:px-12 lg:py-20 lg:pl-12 lg:pr-[max(3rem,calc((100vw-1440px)/2))]">
          <div className="relative z-10 divide-y divide-white/20">
            {details.map(({ icon: Icon, copy }, index) => (
              <div key={index} className="grid grid-cols-[56px_1fr] gap-5 py-7 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-7 lg:py-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/70 bg-[#0c1e30]/90 text-accent shadow-[0_0_0_3px_rgba(218,172,92,0.08)] sm:h-16 sm:w-16">
                  <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.7} />
                </div>
                <p className="text-[15px] leading-[1.85] text-foreground/90 sm:text-[17px]">{copy}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

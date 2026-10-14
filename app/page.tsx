import { ScrollReveal } from "@/components/scroll-reveal"
import { SiteHeader } from "@/components/site-header"
import { TickerStrip } from "@/components/ticker-strip"
import { Hero } from "@/components/hero"
import { ResearchTypes } from "@/components/research-types"
import { FeaturedResearch } from "@/components/featured-research"
import { Corridor } from "@/components/corridor"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { Subscribe } from "@/components/subscribe"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <TickerStrip />
      <main>
        <section aria-label="RMVentureX promotional banner" className="banner-entrance px-4 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <img
              src="/images/rmventurex-banner.png"
              alt="RMVentureX AI-powered investment intelligence and research promotional banner"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
        </section>
        <Hero />
        <ScrollReveal>
          <ResearchTypes />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedResearch />
        </ScrollReveal>
        <ScrollReveal>
          <Corridor />
        </ScrollReveal>
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>
        <ScrollReveal>
          <Subscribe />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  )
}

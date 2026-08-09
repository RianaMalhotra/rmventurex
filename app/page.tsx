import { SiteHeader } from "@/components/site-header"
import { TickerStrip } from "@/components/ticker-strip"
import { Hero } from "@/components/hero"
import { ResearchTypes } from "@/components/research-types"
import { FeaturedResearch } from "@/components/featured-research"
import { Corridor } from "@/components/corridor"
import { About } from "@/components/about"
import { Subscribe } from "@/components/subscribe"
import { SiteFooter } from "@/components/site-footer"
import { Pricing } from "@/components/pricing"

export default function Page() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <TickerStrip />
      <main>
        <Hero />
        <ResearchTypes />
        <FeaturedResearch />
        <Corridor />
        <About />
        <Pricing />
        <Subscribe />
      </main>
      <SiteFooter />
    </div>
  )
}

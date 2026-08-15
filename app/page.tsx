import { SiteHeader } from "@/components/site-header"
import { TickerStrip } from "@/components/ticker-strip"
import { Hero } from "@/components/hero"
import { ResearchTypes } from "@/components/research-types"
import { FeaturedResearch } from "@/components/featured-research"
import { Corridor } from "@/components/corridor"
import { About } from "@/components/about"
import { Pricing } from "@/components/pricing"
import { Subscribe } from "@/components/subscribe"
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { SiteFooter } from "@/components/site-footer"

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
        <AnnouncementBanner />
      </main>
      <SiteFooter />
    </div>
  )
}

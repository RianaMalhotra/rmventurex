import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-accent" aria-hidden />
           AI POWERED INVESTMENT INTELLIGENCE & RESEARCH
        </div>

        <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Research you can act on. Not another headline.
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          RMVentureX pairs institutional research discipline with AI-powered analysis. 
          Our models continuously scan filings, price action, and macro data across Indian and US markets to surface signals human analysts would take days to find.
          then our team stress-tests every call before it reaches you. The result is research that moves at the speed of AI, with the judgment of 25+ years in capital markets behind it.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" className="rounded-sm" nativeButton={false} render={<Link href="#subscribe" />}>
            Get the research
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-sm bg-transparent"
            nativeButton={false}
            render={<Link href="#research" />}
          >
            Read a sample note
          </Button>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Coverage</dt>
            <dd className="mt-1.5 font-serif text-2xl font-semibold text-foreground">India + US</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Thematic focus</dt>
            <dd className="mt-1.5 font-serif text-2xl font-semibold text-foreground">The Corridor</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Experience</dt>
            <dd className="mt-1.5 font-serif text-2xl font-semibold text-foreground">25+ yrs</dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">Stance</dt>
            <dd className="mt-1.5 font-serif text-2xl font-semibold text-foreground">Contrarian</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}

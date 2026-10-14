"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const rotatingPhrases = [
  "AI-powered insights.",
  "Independent thinking.",
  "Conviction-led research.",
  "Signals beyond the noise.",
]

function TypedInsight() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = rotatingPhrases[phraseIndex]
    const finishedTyping = characterCount === phrase.length
    const finishedDeleting = characterCount === 0 && deleting
    const delay = finishedTyping && !deleting ? 1800 : finishedDeleting ? 250 : deleting ? 38 : 75

    const timer = window.setTimeout(() => {
      if (finishedTyping && !deleting) {
        setDeleting(true)
      } else if (finishedDeleting) {
        setDeleting(false)
        setPhraseIndex((index) => (index + 1) % rotatingPhrases.length)
      } else {
        setCharacterCount((count) => count + (deleting ? -1 : 1))
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [phraseIndex, characterCount, deleting])

  return (
    <div className="mt-6 flex min-h-8 items-center gap-2 text-sm font-medium tracking-wide text-accent sm:text-base" aria-label="AI-powered insights. Independent thinking. Conviction-led research. Signals beyond the noise.">
      <span aria-hidden="true" className="uppercase tracking-[0.12em] text-muted-foreground">Built for</span>
      <span aria-hidden="true" className="inline-flex items-center">
        {rotatingPhrases[phraseIndex].slice(0, characterCount)}
        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent" />
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="hero-entrance mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" aria-hidden />
           AI POWERED INVESTMENT INTELLIGENCE & RESEARCH
        </div>

        <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Research you can act on. Not another headline.
        </h1>

        <p className="mt-7 max-w-3xl text-pretty text-lg leading-[1.85] text-muted-foreground">
          RMVentureX pairs institutional research discipline with AI-powered analysis. 
          Our models continuously scan filings, price action, and macro data across Indian and US markets to surface signals human analysts would take days to find.
          Our team stress-tests every call before it reaches you. The result is research that moves at the speed of AI, with the judgment of 25+ years in capital markets behind it.
        </p>

        <TypedInsight />

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" className="rounded-md" nativeButton={false} render={<Link href="#subscribe" />}>
            Get the research
            <ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-md bg-transparent"
            nativeButton={false}
            render={<Link href="#research" />}
          >
            Read a sample note
          </Button>
        </div>

        <div className="relative mt-14 h-44 overflow-hidden rounded-lg border border-border sm:h-56 md:h-72">
          <Image
            src="/images/nyc-skyline.png"
            alt="New York City skyline representing US equity market coverage"
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/15" aria-hidden />
        </div>

        <dl className="mt-10 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
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

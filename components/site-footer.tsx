import Link from "next/link"
import { Mail, Phone, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

          {/* Brand / Description */}
          <div className="max-w-md">
            <div className="flex items-center">
              <span className="font-serif text-lg font-semibold tracking-tight">
                <span className="text-accent">RM</span>
                <span className="text-primary">Venture</span>
                <span className="text-accent">X</span>
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent equity research covering Indian and US-listed
              companies, with a thematic focus on the India–Canada investment
              corridor.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-3 gap-8">

            {/* Research */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Research
              </span>

              <Link
                href="/#research"
                className="text-sm text-foreground hover:text-accent"
              >
                Selected Notes
              </Link>

              <Link
                href="/#approach"
                className="text-sm text-foreground hover:text-accent"
              >
                Our Approach
              </Link>

              <Link
                href="/#corridor"
                className="text-sm text-foreground hover:text-accent"
              >
                The Corridor
              </Link>
            </div>

            {/* Desk */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Desk
              </span>

              <Link
                href="/#about"
                className="text-sm text-foreground hover:text-accent"
              >
                About
              </Link>

              <Link
                href="/#subscribe"
                className="text-sm text-foreground hover:text-accent"
              >
                Subscribe
              </Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Contact
              </span>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a href="mailto:intelfox@rmventurex.com" aria-label="Email RMVentureX" title="Email" className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <Mail className="size-5" aria-hidden="true" />
                </a>
                <a href="tel:+16473542369" aria-label="Call RMVentureX at +1 (647) 354-2369" title="Call" className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <Phone className="size-5" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/in/rahulmalhotrabgold/" target="_blank" rel="noopener noreferrer" aria-label="RMVentureX LinkedIn" title="LinkedIn" className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <Linkedin className="size-5" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/@RMVentureX" target="_blank" rel="noopener noreferrer" aria-label="RMVentureX YouTube" title="YouTube" className="inline-flex size-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <Youtube className="size-5" aria-hidden="true" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Copyright / Disclaimer */}
        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} RMVentureX Research. For informational
            purposes only. Nothing on this site constitutes investment advice,
            an offer, or a solicitation to buy or sell any security. Company
            names, tickers, ratings, and figures shown are illustrative
            samples. Past performance is not indicative of future results.
          </p>
        </div>

      </div>
    </footer>
  )
}

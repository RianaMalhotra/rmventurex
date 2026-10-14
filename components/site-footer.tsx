import Link from "next/link"

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

          {/* Brand / Description */}
          <div className="max-w-md">
            <div className="flex items-center">
              <span className="inline-flex items-center rounded-md border border-[#d8b76a]/70 bg-[#071a31] px-3 py-1.5 font-serif text-lg font-semibold tracking-tight shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_0_14px_rgba(216,183,106,0.16)] transition-all duration-300 hover:border-[#f1cd82] hover:shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_0_20px_rgba(216,183,106,0.28)]">
                <span className="text-[#f1cd82]">RM</span>
                <span className="text-[#75b9ff]">Venture</span>
                <span className="text-[#f1cd82]">X</span>
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
              <a href="mailto:intelfox@rmventurex.com" className="text-sm text-foreground hover:text-accent">
                Email
              </a>
              <a href="tel:+16473542369" className="text-sm text-foreground hover:text-accent">
                Call: +1 (647) 354-2369
              </a>
              <a href="https://www.linkedin.com/in/rahulmalhotrabgold/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent">
                LinkedIn
              </a>
              <a href="https://www.youtube.com/@RMVentureX" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-accent">
                YouTube
              </a>
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

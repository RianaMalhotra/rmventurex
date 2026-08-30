import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background">
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
                href="#research"
                className="text-sm text-foreground hover:text-accent"
              >
                Selected Notes
              </Link>

              <Link
                href="#approach"
                className="text-sm text-foreground hover:text-accent"
              >
                Our Approach
              </Link>

              <Link
                href="#corridor"
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
                href="#about"
                className="text-sm text-foreground hover:text-accent"
              >
                About
              </Link>

              <Link
                href="#subscribe"
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

              {/* Email */}
              <a
                href="mailto:intelfox@rmventurex.com"
                className="text-sm text-foreground hover:text-accent"
              >
                Email
              </a>

              {/* Phone */}
              <a
                href="tel:+16473542369"
                className="text-sm text-foreground hover:text-accent"
              >
                Call: +1 (647) 354-2369
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rahulmalhotrabgold/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent"
              >
                LinkedIn
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RMVentureX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-accent"
              >
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

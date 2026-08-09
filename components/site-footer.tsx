import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 items-center justify-center rounded-sm bg-primary px-1.5 text-[13px] font-bold tracking-tight text-primary-foreground">
                RM
              </span>
              <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
                RMVenture<span className="text-accent">X</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Independent equity research covering Indian and US-listed companies, with a thematic focus on the
              India–Canada investment corridor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Research</span>
              <Link href="#research" className="text-sm text-foreground hover:text-accent">
                Selected Notes
              </Link>
              <Link href="#approach" className="text-sm text-foreground hover:text-accent">
                Our Approach
              </Link>
              <Link href="#corridor" className="text-sm text-foreground hover:text-accent">
                The Corridor
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Desk</span>
              <Link href="#about" className="text-sm text-foreground hover:text-accent">
                About
              </Link>
              <Link href="#pricing" className="text-sm text-foreground hover:text-accent">
                Pricing
              </Link>
              <Link href="#subscribe" className="text-sm text-foreground hover:text-accent">
                Subscribe
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Contact</span>
              <a href="mailto:rahul.malhotra@rmventurex.com" className="text-sm text-foreground hover:text-accent">
                rahul.malhotra@rmventurex.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-xs leading-relaxed text-muted-foreground">
            © {new Date().getFullYear()} RMVentureX Research. For informational purposes only. Nothing on this site
            constitutes investment advice, an offer, or a solicitation to buy or sell any security. Company names,
            tickers, ratings, and figures shown are illustrative samples. Past performance is not indicative of future
            results.
          </p>
        </div>
      </div>
    </footer>
  )
}

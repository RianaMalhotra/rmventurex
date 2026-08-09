import Link from "next/link"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Research", href: "#research" },
  { label: "The Corridor", href: "#corridor" },
  { label: "Approach", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center gap-2.5">
         <span className="flex h-7 items-center justify-center rounded-sm bg-primary px-1.5 text-[13px] font-bold text-primary-foreground">
            RM
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Venture<span className="text-accent">X</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" className="rounded-sm" nativeButton={false} render={<Link href="#subscribe" />}>
          Subscribe
        </Button>
      </div>
    </header>
  )
}

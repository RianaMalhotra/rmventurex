import Link from "next/link"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Research", href: "#research" },
  { label: "The Corridor", href: "#corridor" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center">
          <span className="font-serif text-lg font-semibold tracking-tight">
            <span className="text-accent">RM</span>
            <span className="text-primary">Venture</span>
            <span className="text-accent">X</span>
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
        <Button
          size="sm"
          className="rounded-sm"
          nativeButton={false}
          render={
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXQs1DzQvsKH8ZgfrjF1V5zSYOXRT7ChQ3SHQDniczGJddcA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
        >
          Subscribe
        </Button>
      </div>
    </header>
  )
}

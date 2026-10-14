import Link from "next/link"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Approach", href: "#approach" },
  { label: "Research", href: "#research" },
  { label: "The Corridor", href: "#corridor" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
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
          className="group rounded-md border border-[#f3d28d]/60 bg-gradient-to-r from-[#d5a64e] via-[#f1cd82] to-[#c9983d] px-5 font-semibold text-[#071427] shadow-[0_3px_16px_rgba(218,169,77,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-[#f1cd82] hover:via-[#ffe4a4] hover:to-[#e2b35c] hover:shadow-[0_6px_24px_rgba(218,169,77,0.45)] focus-visible:ring-2 focus-visible:ring-[#f1cd82] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071427]"
          nativeButton={false}
          render={<Link href="/#subscribe" />}
        >
          Subscribe <span aria-hidden="true" className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Button>
      </div>
    </header>
  )
}

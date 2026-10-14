import Link from "next/link"
import { Button } from "@/components/ui/button"

const nav = [
  { label: "Approach", href: "/#approach" },
  { label: "Research", href: "/#research" },
  { label: "The Corridor", href: "/#corridor" },
  { label: "About", href: "/#about" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Contact", href: "/#contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="group flex items-center">
          <span className="inline-flex items-center rounded-md border border-[#d8b76a]/70 bg-[#071a31] px-3 py-1.5 font-serif text-lg font-semibold tracking-tight shadow-[0_0_0_1px_rgba(59,130,246,0.18),0_0_14px_rgba(216,183,106,0.16)] transition-all duration-300 hover:border-[#f1cd82] hover:shadow-[0_0_0_1px_rgba(96,165,250,0.35),0_0_20px_rgba(216,183,106,0.28)]">
                <span className="text-[#f1cd82]">RM</span>
                <span className="text-[#75b9ff]">Venture</span>
                <span className="text-[#f1cd82]">X</span>
              </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-[#f1cd82] focus-visible:text-[#f1cd82]"
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
          Subscribe
        </Button>
      </div>
    </header>
  )
}

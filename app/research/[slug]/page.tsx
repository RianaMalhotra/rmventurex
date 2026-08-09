import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { researchNotes, type ResearchKind } from "@/lib/research-data"

const kindStyles: Record<ResearchKind, string> = {
  "Deep-Dive": "bg-primary text-primary-foreground",
  "Sector Theme": "bg-secondary text-secondary-foreground",
  "Contrarian Call": "bg-accent text-accent-foreground",
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
}

export function generateStaticParams() {
  return researchNotes.map((note) => ({ slug: note.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = researchNotes.find((n) => n.slug === slug)
  if (!note) return {}
  return {
    title: `${note.title} — RMVentureX`,
    description: note.excerpt,
  }
}

export default async function ResearchNotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const note = researchNotes.find((n) => n.slug === slug)

  if (!note) {
    notFound()
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16">
          <Link
            href="/#research"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to research
          </Link>

          <div className="mt-8 flex items-center justify-between gap-3">
            <span
              className={`inline-flex items-center rounded-sm px-2 py-1 text-[11px] font-medium uppercase tracking-wide ${kindStyles[note.kind]}`}
            >
              {note.kind}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {note.market} · {note.ticker}
            </span>
          </div>

          <h1 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
            {note.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-border pb-6 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{note.rating}</span>
            <span>{note.company}</span>
            <span>{formatDate(note.date)}</span>
            <span>{note.readMins} min read</span>
          </div>

          <p className="mt-8 text-pretty text-lg leading-relaxed text-foreground">{note.excerpt}</p>

          <div className="mt-10 rounded-sm border border-dashed border-border bg-secondary/40 p-6 text-sm leading-relaxed text-muted-foreground">
            The full note — including the model, comparables, and risk section — is available to Research and
            Desk+ subscribers.{" "}
            <Link href="/#pricing" className="font-medium text-foreground underline underline-offset-2">
              See plans
            </Link>
            .
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

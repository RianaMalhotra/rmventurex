import { ArrowUpRight, Clock3, Newspaper } from "lucide-react"

type Story = { title: string; url: string; published: Date; source: string }
const feeds = [
  { label: "US Markets", url: "https://news.google.com/rss/search?q=US%20stocks%20market%20earnings%20when%3A3d&hl=en-US&gl=US&ceid=US:en" },
  { label: "India Markets", url: "https://news.google.com/rss/search?q=India%20Nifty%20Sensex%20stocks%20when%3A3d&hl=en-IN&gl=IN&ceid=IN:en" },
]

function decodeEntities(s: string) {
  return s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
}
function xmlValue(xml: string, tag: string) {
  const match = xml.match(new RegExp("<" + tag + "(?:\\s[^>]*)?>([\\s\\S]*?)<\\/" + tag + ">", "i"))
  return match ? decodeEntities(match[1].replace(/^<!\[CDATA\[|\]\]>$/g, "").trim()) : ""
}
async function loadFeed(url: string): Promise<Story[]> {
  try {
    const response = await fetch(url, { next: { revalidate: 3600 }, signal: AbortSignal.timeout(7000) })
    if (!response.ok) return []
    const xml = await response.text()
    return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 12).flatMap((m) => {
      const item = m[1]
      const title = xmlValue(item, "title")
      const link = xmlValue(item, "link")
      const date = new Date(xmlValue(item, "pubDate"))
      const source = xmlValue(item, "source") || "Google News"
      if (!title || !link.startsWith("https://") || Number.isNaN(date.getTime())) return []
      if (date.getTime() > Date.now() + 3600000 || date.getTime() < Date.now() - 7 * 86400000) return []
      return [{ title, url: link, published: date, source }]
    })
  } catch {
    return []
  }
}
export async function LatestMarketTrends() {
  const results = await Promise.all(feeds.map((f) => loadFeed(f.url)))
  const groups = feeds.map((feed, i) => ({ ...feed, stories: results[i].slice(0, 4) }))
  const hasStories = groups.some((g) => g.stories.length)
  return (
    <section aria-labelledby="market-trends-title" className="border-b border-[#d5a64e]/20 bg-[#081a2e] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[.2em] text-[#f1cd82]"><Newspaper className="size-4" /> Market watch</div>
        <h2 id="market-trends-title" className="mt-3 font-serif text-3xl font-semibold text-white">Latest market trends</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#b7c7da]">Recent third-party market headlines, refreshed approximately hourly when sources are available. These are news links, not RMVentureX analyst reports or recommendations.</p>
        {hasStories ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {groups.map((group) => (
              <div key={group.label} className="rounded-xl border border-[#d5a64e]/30 bg-[#0c233c] p-5 sm:p-6">
                <h3 className="mb-4 font-serif text-xl font-semibold text-[#f1cd82]">{group.label}</h3>
                {group.stories.length ? <div className="divide-y divide-white/10">{group.stories.map((story) => (
                  <a key={story.url} href={story.url} target="_blank" rel="noopener noreferrer" className="group block py-4 first:pt-0 last:pb-0">
                    <span className="flex items-start justify-between gap-3 text-sm font-medium leading-relaxed text-white group-hover:text-[#f1cd82]">{story.title}<ArrowUpRight className="mt-1 size-4 shrink-0 text-[#d5a64e]" /></span>
                    <span className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#9eb3ca]"><Clock3 className="size-3" />{story.published.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/Toronto", timeZoneName: "short" })} · {story.source}</span>
                  </a>
                ))}</div> : <p className="text-sm text-[#b7c7da]">Recent headlines temporarily unavailable.</p>}
              </div>
            ))}
          </div>
        ) : <p className="mt-8 rounded-lg border border-[#d5a64e]/30 p-5 text-sm text-[#b7c7da]">Live headlines are temporarily unavailable. The research previews below remain accessible.</p>}
        <p className="mt-4 text-xs text-[#9eb3ca]">Publication timestamps are shown in Toronto time. News availability and freshness depend on the external provider.</p>
      </div>
    </section>
  )
}

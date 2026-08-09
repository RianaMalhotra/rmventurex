export type ResearchKind = "Deep-Dive" | "Sector Theme" | "Contrarian Call"

export type ResearchNote = {
  ticker: string
  market: "NSE" | "BSE" | "NYSE" | "NASDAQ" | "TSX"
  company: string
  kind: ResearchKind
  title: string
  excerpt: string
  date: string
  readMins: number
  rating: "Accumulate" | "Reduce" | "Under Review" | "Conviction Buy"
}

export const researchNotes: ResearchNote[] = [
  {
    ticker: "SHOP",
    market: "TSX",
    company: "Shopify Inc.",
    kind: "Deep-Dive",
    title: "Shopify's take-rate ceiling is higher than the Street models",
    excerpt:
      "Payments attach and merchant solutions are re-rating the unit economics. We walk the GMV-to-revenue bridge and argue consensus is under-modelling 2027 gross profit by ~14%.",
    date: "2026-07-28",
    readMins: 18,
    rating: "Conviction Buy",
  },
  {
    ticker: "RELIANCE",
    market: "NSE",
    company: "Reliance Industries",
    kind: "Deep-Dive",
    title: "Jio's ARPU inflection and the retail listing overhang",
    excerpt:
      "A sum-of-the-parts that treats the O2C cash engine, Jio's tariff cycle, and the retail IPO optionality as three separately clocked assets — not one conglomerate discount.",
    date: "2026-07-14",
    readMins: 22,
    rating: "Accumulate",
  },
  {
    ticker: "NVDA",
    market: "NASDAQ",
    company: "NVIDIA Corp.",
    kind: "Contrarian Call",
    title: "Why we're trimming into the consensus melt-up",
    excerpt:
      "Not a short — a discipline note. Hyperscaler capex is pulling forward demand faster than the installed base can depreciate. We map the air-pocket quarter the sell-side won't underwrite.",
    date: "2026-06-30",
    readMins: 15,
    rating: "Reduce",
  },
  {
    ticker: "—",
    market: "NSE",
    company: "India Financials",
    kind: "Sector Theme",
    title: "India's credit cycle: the private banks vs. the NBFC squeeze",
    excerpt:
      "Deposit competition is quietly repricing the sector. We rank eleven names on the only two variables that matter into FY27 — funding cost and unsecured mix.",
    date: "2026-06-18",
    readMins: 20,
    rating: "Under Review",
  },
  {
    ticker: "BN",
    market: "TSX",
    company: "Brookfield Corp.",
    kind: "Deep-Dive",
    title: "The plumbing behind Brookfield's carried-interest flywheel",
    excerpt:
      "Fee-related earnings are the durable asset; carry is the call option. We separate the two and stress-test the distribution against a higher-for-longer rate path.",
    date: "2026-05-29",
    readMins: 19,
    rating: "Accumulate",
  },
  {
    ticker: "—",
    market: "TSX",
    company: "India–Canada Corridor",
    kind: "Sector Theme",
    title: "The corridor thesis: pension capital meets Indian growth",
    excerpt:
      "Canadian pension funds have quietly become India's largest patient-capital allocators. We trace where the next tranche flows — and the listed proxies positioned to receive it.",
    date: "2026-05-12",
    readMins: 24,
    rating: "Conviction Buy",
  },
]

export const coverageStats = [
  { value: "25+", label: "Years in institutional capital markets" },
  { value: "3", label: "Exchanges under active coverage" },
  { value: "40+", label: "Names in the research universe" },
  { value: "2", label: "Notes published every month" },
]

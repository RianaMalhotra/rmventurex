"use client"

import { useEffect, useRef, useState } from "react"

const markets = {
  US: [
    { s: "FOREXCOM:SPXUSD", d: "S&P 500" },
    { s: "FOREXCOM:NSXUSD", d: "Nasdaq 100" },
    { s: "FOREXCOM:DJI", d: "Dow Jones" },
    { s: "NASDAQ:NVDA", d: "NVIDIA" },
    { s: "NASDAQ:MSFT", d: "Microsoft" },
  ],
  India: [
    { s: "NSE:NIFTY", d: "NIFTY 50" },
    { s: "BSE:SENSEX", d: "SENSEX" },
    { s: "NSE:RELIANCE", d: "Reliance" },
    { s: "NSE:HDFCBANK", d: "HDFC Bank" },
    { s: "NSE:INFY", d: "Infosys" },
  ],
}

export function MarketPulse() {
  const [market, setMarket] = useState<"US" | "India">("US")
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = widgetRef.current
    if (!target) return
    target.replaceChildren()
    const host = document.createElement("div")
    host.className = "tradingview-widget-container"
    host.style.width = "100%"
    host.style.height = "100%"
    const widget = document.createElement("div")
    widget.className = "tradingview-widget-container__widget"
    widget.style.height = "calc(100% - 26px)"
    widget.style.width = "100%"
    host.appendChild(widget)
    const credit = document.createElement("div")
    credit.className = "tradingview-widget-copyright"
    const link = document.createElement("a")
    link.href = "https://www.tradingview.com/"
    link.target = "_blank"
    link.rel = "noopener noreferrer"
    link.textContent = "Market data by TradingView"
    link.style.color = "#f1cd82"
    credit.appendChild(link)
    host.appendChild(credit)
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
    script.async = true
    script.textContent = JSON.stringify({
      colorTheme: "dark",
      dateRange: "1D",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: true,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      width: "100%",
      height: "100%",
      plotLineColorGrowing: "rgba(80, 176, 138, 1)",
      plotLineColorFalling: "rgba(226, 94, 94, 1)",
      gridLineColor: "rgba(216, 183, 106, 0.10)",
      scaleFontColor: "rgba(196, 207, 224, 0.8)",
      belowLineFillColorGrowing: "rgba(80, 176, 138, 0.10)",
      belowLineFillColorFalling: "rgba(226, 94, 94, 0.10)",
      tabs: [{ title: market === "US" ? "US Markets" : "Indian Markets", symbols: markets[market], originalTitle: market }],
    })
    host.appendChild(script)
    target.appendChild(host)
    return () => { target.replaceChildren() }
  }, [market])

  return (
    <section id="market-pulse" className="border-b border-[#d5a64e]/20 bg-[#06172b] px-5 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.22em] text-[#e4bd75]">Market intelligence</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">Market <span className="text-[#f1cd82]">Pulse</span></h2>
            <p className="mt-2 max-w-xl text-sm text-[#c3cede]">Explore market snapshots and interactive charts across the US and India.</p>
          </div>
          <div className="flex rounded-full border border-[#d5a64e]/50 bg-[#0b203b] p-1" aria-label="Select market">
            {(["US", "India"] as const).map((option) => (
              <button key={option} type="button" aria-pressed={market === option} onClick={() => setMarket(option)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${market === option ? "bg-[#e5bb6c] text-[#071427]" : "text-[#d8e2ef] hover:text-[#f1cd82]"}`}>
                {option === "US" ? "US Markets" : "India"}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 overflow-hidden rounded-xl border border-[#d5a64e]/60 bg-[#091d34] p-3 shadow-[0_0_26px_rgba(213,166,78,.15)] sm:p-5">
          <div ref={widgetRef} className="h-[440px] w-full sm:h-[500px]" aria-label={`${market} market overview with charts`}>
            <p className="p-6 text-sm text-[#d4deeb]">Loading market data…</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-[#9fadc1]">Data supplied by TradingView and may be delayed or unavailable. Market information is not investment advice.</p>
      </div>
    </section>
  )
}

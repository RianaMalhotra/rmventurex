const tickers = [
  { sym: "RELIANCE", chg: "+1.24%", up: true },
  { sym: "SHOP", chg: "+2.08%", up: true },
  { sym: "NVDA", chg: "-0.91%", up: false },
  { sym: "HDFCBANK", chg: "+0.42%", up: true },
  { sym: "BN", chg: "+0.77%", up: true },
  { sym: "INFY", chg: "-0.35%", up: false },
  { sym: "TCS", chg: "+0.61%", up: true },
  { sym: "MSFT", chg: "+0.18%", up: true },
  { sym: "CNQ", chg: "-1.12%", up: false },
  { sym: "TATAMOTORS", chg: "+3.04%", up: true },
]

export function TickerStrip() {
  const row = [...tickers, ...tickers]
  return (
    <div className="overflow-hidden border-y border-border bg-primary text-primary-foreground">
      <div className="flex w-max animate-[ticker_38s_linear_infinite] items-center">
        {row.map((t, i) => (
          <div key={i} className="flex items-center gap-2 whitespace-nowrap px-5 py-2.5 text-xs">
            <span className="font-medium tracking-wide">{t.sym}</span>
            <span className={t.up ? "text-[var(--color-gain)]" : "text-[var(--color-loss)]"}>{t.chg}</span>
            <span className="text-primary-foreground/25" aria-hidden>
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

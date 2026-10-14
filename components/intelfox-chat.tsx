"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Send, X } from "lucide-react"

type Reply = { text: string; href?: string; label?: string }
type Message = { role: "visitor" | "fox"; text: string; href?: string; label?: string }

const suggestions = ["What is RMVentureX?", "Why should I subscribe?", "What is included?", "How much does it cost?", "Explore research", "Contact the desk"]

const faq: { terms: string[]; text: string; href: string; label: string }[] = [
  { terms: ["what is rmventurex", "what does rmventurex", "tell me about rmventurex", "what is this website", "what is this company", "who are you"],
    text: "RMVentureX is an independent AI-powered investment intelligence and equity research desk covering Indian and US-listed companies. It combines AI-assisted analysis with experienced human judgment, including research into the India–Canada investment corridor.",
    href: "/#about", label: "Learn about RMVentureX" },
  { terms: ["why should i subscribe", "why subscribe", "why would i subscribe", "why choose", "worth subscribing", "benefits of subscribing", "why should i join"],
    text: "Subscribe if you want in-depth company research rather than just headlines. Depending on the plan, you get investment theses, sector themes, contrarian views, rating and conviction updates, archives, and possibly direct access to the desk. Research informs decisions but cannot guarantee returns.",
    href: "/#pricing", label: "Compare subscription benefits" },
  { terms: ["what is included", "what's included", "what do i get", "subscription benefits", "plan benefits", "what does subscription include", "what does the plan include"],
    text: "Research includes deep-dives, themes, contrarian calls, rating history, priority emails, and archives. Desk+ adds a quarterly call, early access, and direct email follow-ups. IntelFox Global adds customized AI-powered intelligence, global coverage, and risk analysis.",
    href: "/#pricing", label: "Compare plans" },
  { terms: ["how much", "price", "pricing", "cost", "monthly fee", "plans available"],
    text: "The listed plans are Research ($199/month), Desk+ ($399/month), and IntelFox Global ($999/month). Prices are in USD and billed quarterly. Check the pricing section for full details.",
    href: "/#pricing", label: "View pricing" },
  { terms: ["research", "reports", "notes", "stocks", "equities", "markets", "companies"],
    text: "RMVentureX publishes research on Indian and US equities, company deep-dives, sector themes, and contrarian ideas, emphasizing the thesis, evidence, and risks.",
    href: "/#research", label: "Explore research" },
  { terms: ["india", "canada", "corridor", "cross-border"],
    text: "The India–Canada corridor is a research theme focused on cross-border businesses, capital flows, and investment opportunities connected to both markets.",
    href: "/#corridor", label: "Explore the corridor" },
  { terms: ["approach", "method", "how it works", "process", "use ai", "ai-powered"],
    text: "RMVentureX uses AI-assisted tools to review filings, market data, and macroeconomic information. Analysts then review and stress-test signals with independent judgment.",
    href: "/#approach", label: "Our approach" },
  { terms: ["subscribe", "sign up", "join", "register", "request access"],
    text: "To get started, review the plans and submit the subscription inquiry form with your preferred plan and research interests.",
    href: "/#subscribe", label: "Go to subscription form" },
  { terms: ["contact", "email", "phone", "call", "linkedin", "youtube"],
    text: "Reach RMVentureX at intelfox@rmventurex.com or +1 (647) 354-2369. The footer also links to LinkedIn and YouTube.",
    href: "/#contact", label: "Contact the desk" },
  { terms: ["about", "team", "founder", "experience"],
    text: "The RMVentureX desk draws on over 25 years of institutional capital markets experience and combines independent research with AI-assisted analysis.",
    href: "/#about", label: "About the desk" },
]

function getReply(question: string): Reply {
  const q = question.toLowerCase().trim().replace(/[?!.,]/g, "")
  if (/^(hi|hey|hello|good morning|good evening)$/.test(q)) {
    return { text: "Hi! 🦊 I'm IntelFox. Ask me what RMVentureX does, why you might subscribe, what each plan includes, or how to explore the site." }
  }
  const match = faq.find((item) => item.terms.some((term) => q.includes(term)))
  return match
    ? { text: match.text, href: match.href, label: match.label }
    : { text: "I can answer questions about RMVentureX, subscriptions, research, pricing, and the India–Canada corridor. Try one of the suggested questions!", href: "/#about", label: "Learn about RMVentureX" }
}

export function IntelFoxChat() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    { role: "fox", text: "Hi! 🦊 I'm IntelFox, your RMVentureX guide. What would you like to explore?" },
  ])

  function ask(question: string) {
    const trimmed = question.trim()
    if (!trimmed) return
    const reply = getReply(trimmed)
    setMessages((current) => [...current, { role: "visitor", text: trimmed }, { role: "fox", ...reply }])
    setInput("")
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    ask(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {open && (
        <section aria-label="IntelFox website assistant" className="flex h-[min(520px,75dvh)] w-[min(360px,calc(100vw-40px))] flex-col overflow-hidden rounded-2xl border border-[#d5a64e]/70 bg-[#071427] text-white shadow-[0_12px_48px_rgba(0,0,0,.55),0_0_24px_rgba(213,166,78,.18)]">
          <div className="flex items-center gap-3 border-b border-[#d5a64e]/30 bg-[#0b203b] px-4 py-3">
            <span aria-hidden="true" className="flex size-11 items-center justify-center rounded-full border border-[#f1cd82]/60 bg-[#142b48] text-2xl">🦊</span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-[#f1cd82]">IntelFox</p>
              <p className="text-xs text-[#b9c9df]">RMVentureX website guide</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close IntelFox chat" className="rounded-lg p-2 text-[#c9d7e8] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#f1cd82]"><X size={19} /></button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4" role="log" aria-live="polite" aria-relevant="additions">
            {messages.map((message, index) => (
              <div key={index} className={message.role === "visitor" ? "ml-8" : "mr-6"}>
                <div className={message.role === "visitor" ? "rounded-2xl rounded-br-sm bg-[#234b77] px-3 py-2 text-sm" : "rounded-2xl rounded-bl-sm border border-[#d5a64e]/20 bg-[#102641] px-3 py-2 text-sm leading-relaxed"}>
                  {message.text}
                  {message.href && (
                    <Link href={message.href} onClick={() => setOpen(false)} className="mt-2 flex items-center gap-1 font-semibold text-[#f1cd82] underline-offset-4 hover:underline">
                      {message.label} <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((item) => (
                  <button key={item} type="button" onClick={() => ask(item)} className="rounded-full border border-[#d5a64e]/50 px-3 py-1.5 text-xs text-[#f1cd82] transition-colors hover:bg-[#d5a64e]/15">{item}</button>
                ))}
              </div>
            )}
          </div>
          <form onSubmit={submit} className="flex items-center gap-2 border-t border-[#d5a64e]/30 bg-[#0b203b] p-3">
            <input aria-label="Ask IntelFox" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Where can I find...?" maxLength={300} className="min-w-0 flex-1 rounded-xl border border-[#d5a64e]/30 bg-[#071427] px-3 py-2.5 text-sm text-white outline-none placeholder:text-[#91a2b8] focus:border-[#f1cd82]" />
            <button type="submit" disabled={!input.trim()} aria-label="Send message" className="flex size-10 items-center justify-center rounded-xl bg-[#e7bb67] text-[#071427] hover:bg-[#ffe0a1] disabled:opacity-40"><Send size={17} /></button>
          </form>
          <p className="pb-2 text-center text-[10px] text-[#9aabc0]">Website navigation assistant · Not investment advice</p>
        </section>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close IntelFox" : "Chat with IntelFox"} aria-expanded={open} className="group flex items-center gap-2 rounded-full border-2 border-[#f1cd82] bg-[#0b203b] px-4 py-3 text-[#f1cd82] shadow-[0_0_22px_rgba(241,205,130,.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(241,205,130,.55)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f1cd82]">
        <span className="text-2xl" aria-hidden="true">🦊</span>
        <span className="text-sm font-semibold">Ask IntelFox</span>
        {open ? <X size={17} /> : <MessageCircle size={17} />}
      </button>
    </div>
  )
}

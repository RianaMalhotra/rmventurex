"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Send, X } from "lucide-react"

type Reply = { text: string; href?: string; label?: string }
type Message = { role: "visitor" | "fox"; text: string; href?: string; label?: string }

const suggestions = ["Explore research", "See pricing", "India–Canada corridor", "Contact the desk"]
const destinations = [
  { words: ["price", "pricing", "plan", "cost", "membership", "subscription"], text: "You can compare all RMVentureX research plans in the Pricing section.", href: "/#pricing", label: "See pricing" },
  { words: ["subscribe", "sign up", "join", "register", "request access"], text: "Ready to join? The subscription inquiry form is right here.", href: "/#subscribe", label: "Go to subscription form" },
  { words: ["research", "report", "notes", "stock", "equities", "market", "investment"], text: "Explore selected equity research notes and the desk's coverage.", href: "/#research", label: "Explore research" },
  { words: ["corridor", "india", "canada", "cross-border"], text: "Discover the India–Canada investment corridor thesis.", href: "/#corridor", label: "Explore the corridor" },
  { words: ["approach", "method", "how it works", "process", "strategy"], text: "Learn how RMVentureX approaches independent investment research.", href: "/#approach", label: "Our approach" },
  { words: ["about", "team", "founder", "who are you", "company"], text: "Meet the research desk and learn more about RMVentureX.", href: "/#about", label: "About RMVentureX" },
  { words: ["contact", "email", "phone", "call", "linkedin", "youtube", "reach"], text: "You can reach the desk through the contact links in the footer.", href: "/#contact", label: "Contact the desk" },
]

function getReply(question: string): Reply {
  const q = question.toLowerCase().trim()
  if (/^(hi|hey|hello|good morning|good evening)[!. ]*$/.test(q)) {
    return { text: "Hey! 🦊 I'm IntelFox, your RMVentureX website guide. Ask me where to find research, plans, or contact details." }
  }
  const match = destinations.find((item) => item.words.some((word) => q.includes(word)))
  return match
    ? { text: match.text, href: match.href, label: match.label }
    : { text: "I can help you navigate RMVentureX. Try asking about research, pricing, the India–Canada corridor, our approach, or contact details.", href: "/#research", label: "Browse research" }
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

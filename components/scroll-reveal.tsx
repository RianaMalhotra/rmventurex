"use client"
import { useEffect, useRef, useState, type ReactNode } from "react"
export function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(entry.target) }
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" })
    if (node.getBoundingClientRect().top >= window.innerHeight) {
      setVisible(false)
      observer.observe(node)
    }
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className="reveal-section" data-visible={visible}>{children}</div>
}

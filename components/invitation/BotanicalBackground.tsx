"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export interface ScrollPlantProps {
  src: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
}

export function ScrollPlant({ src, className = "", style, width = 260, height = 240 }: ScrollPlantProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.05, rootMargin: "0px 0px -60px 0px" }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        ...style,
        width,
        height,
        position: "absolute",
        transition: "opacity 1s ease, transform 1s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(50px) scale(0.92)",
        willChange: "transform, opacity",
      }}
      aria-hidden="true"
    >
      <Image src={src} alt="" fill className="object-contain" sizes={`${width}px`} />
    </div>
  )
}

/* Fixed white background only */
export default function BotanicalBackground() {
  return (
    <div className="fixed inset-0 bg-[#fafafa] pointer-events-none z-0" aria-hidden="true" />
  )
}

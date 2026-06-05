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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  // Ajustar tamaño para móvil (65% del tamaño original)
  const mobileWidth = isMobile ? width * 0.65 : width
  const mobileHeight = isMobile ? height * 0.65 : height

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={{
        ...style,
        width: mobileWidth,
        height: mobileHeight,
        position: "absolute",
        transition: "opacity 1s ease, transform 1s ease",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px) scale(1)" : "translateY(50px) scale(0.92)",
        willChange: "transform, opacity",
        zIndex: 1, // Asegurar que las plantas estén detrás del contenido
      }}
      aria-hidden="true"
    >
      <Image src={src} alt="" fill className="object-contain" sizes={`${mobileWidth}px`} />
    </div>
  )
}

/* Fixed white background only */
export default function BotanicalBackground() {
  return (
    <div className="fixed inset-0 bg-[#fafafa] pointer-events-none z-0" aria-hidden="true" />
  )
}

"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export interface ScrollPlantProps {
  src: string
  className?: string
  style?: React.CSSProperties
  width?: number
  height?: number
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export function ScrollPlant({ 
  src, 
  className = "", 
  style, 
  width = 260, 
  height = 240,
  position = 'top-left'
}: ScrollPlantProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [dimensions, setDimensions] = useState({ width, height })
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0, right: 'auto', bottom: 'auto' })

  useEffect(() => {
    const calculateDimensions = () => {
      const screenWidth = window.innerWidth
      let newWidth = width
      let newHeight = height
      let newCoordinates = { top: 0, left: 0, right: 'auto', bottom: 'auto' }

      if (screenWidth < 640) {
        // Móvil pequeño (< 640px)
        newWidth = width * 0.5
        newHeight = height * 0.5
        
        // Coordenadas adaptadas para móvil
        if (position === 'top-left' || position === 'bottom-left') {
          newCoordinates = { top: 30, left: -25, right: 'auto', bottom: 'auto' }
        } else if (position === 'top-right' || position === 'bottom-right') {
          newCoordinates = { top: 30, left: 'auto', right: -25, bottom: 'auto' }
        }
      } else if (screenWidth < 768) {
        // Tablet pequeño (640px - 768px)
        newWidth = width * 0.65
        newHeight = height * 0.65
        
        if (position === 'top-left' || position === 'bottom-left') {
          newCoordinates = { top: 50, left: -35, right: 'auto', bottom: 'auto' }
        } else if (position === 'top-right' || position === 'bottom-right') {
          newCoordinates = { top: 50, left: 'auto', right: -35, bottom: 'auto' }
        }
      } else if (screenWidth < 1024) {
        // Tablet (768px - 1024px)
        newWidth = width * 0.8
        newHeight = height * 0.8
        
        if (position === 'top-left' || position === 'bottom-left') {
          newCoordinates = { top: 80, left: -40, right: 'auto', bottom: 'auto' }
        } else if (position === 'top-right' || position === 'bottom-right') {
          newCoordinates = { top: 80, left: 'auto', right: -40, bottom: 'auto' }
        }
      } else {
        // Desktop (>= 1024px)
        newWidth = width
        newHeight = height
        
        if (position === 'top-left' || position === 'bottom-left') {
          newCoordinates = { top: 100, left: -50, right: 'auto', bottom: 'auto' }
        } else if (position === 'top-right' || position === 'bottom-right') {
          newCoordinates = { top: 100, left: 'auto', right: -50, bottom: 'auto' }
        }
      }

      setDimensions({ width: newWidth, height: newHeight })
      setCoordinates(newCoordinates as any)
    }

    calculateDimensions()
    window.addEventListener('resize', calculateDimensions)
    
    return () => window.removeEventListener('resize', calculateDimensions)
  }, [width, height, position])

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

  // Combinar estilos personalizados con los calculados
  const finalStyle = {
    ...style,
    ...coordinates,
    width: dimensions.width,
    height: dimensions.height,
    position: "absolute" as const,
    transition: "opacity 1s ease, transform 1s ease",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px) scale(1)" : "translateY(50px) scale(0.92)",
    willChange: "transform, opacity",
    zIndex: 1,
  }

  return (
    <div
      ref={ref}
      className={`pointer-events-none select-none ${className}`}
      style={finalStyle}
      aria-hidden="true"
    >
      <Image src={src} alt="" fill className="object-contain" sizes={`${dimensions.width}px`} />
    </div>
  )
}

/* Fixed white background only */
export default function BotanicalBackground() {
  return (
    <div className="fixed inset-0 bg-[#fafafa] pointer-events-none z-0" aria-hidden="true" />
  )
}

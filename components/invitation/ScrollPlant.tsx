"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ScrollPlantProps {
  src: string
  alt?: string
  width: number
  height: number
  className?: string
  initialTransform?: string
  /** Delay in ms before the animation triggers */
  delay?: number
}

export default function ScrollPlant({
  src,
  alt = "",
  width,
  height,
  className = "",
  initialTransform = "translateY(60px)",
  delay = 0,
}: ScrollPlantProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`plant-scroll ${visible ? "visible-plant" : "hidden-plant"} ${className}`}
      style={{
        transform: visible ? "none" : initialTransform,
      }}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-contain"
        sizes={`${width}px`}
      />
    </div>
  )
}

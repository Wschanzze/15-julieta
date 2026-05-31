"use client"

import { useEffect, useState } from "react"
import ButterflyDivider from "./ButterflyDivider"

const EVENT_DATE = new Date("2025-07-17T21:00:00-03:00")

interface TimeLeft {
  dias: number
  hs: number
  min: number
  seg: number
}

function getTimeLeft(): TimeLeft {
  const now = new Date()
  const diff = EVENT_DATE.getTime() - now.getTime()

  if (diff <= 0) {
    return { dias: 0, hs: 0, min: 0, seg: 0 }
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seg = Math.floor((diff % (1000 * 60)) / 1000)

  return { dias, hs, min, seg }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft.dias, label: "días" },
    { value: timeLeft.hs, label: "hs" },
    { value: timeLeft.min, label: "min" },
    { value: timeLeft.seg, label: "seg" },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Subtle dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e0e0e88] via-transparent to-[#0e0e0e88] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="text-lg sm:text-xl tracking-[0.25em] text-muted-foreground mb-10 uppercase font-light">
          Falta
        </p>

        {/* Countdown display */}
        <div className="flex items-start gap-4 sm:gap-8">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-start gap-4 sm:gap-8">
              <div className="flex flex-col items-center min-w-[3rem]">
                <span className="countdown-number font-light">
                  {mounted ? String(unit.value).padStart(2, "0") : "--"}
                </span>
                <span className="countdown-label mt-1">{unit.label}</span>
              </div>
              {i < units.length - 1 && (
                <span className="countdown-divider font-light select-none mt-1">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Pulsing heart */}
        <div className="mt-10">
          <span className="heart-pulse text-2xl select-none" aria-hidden="true">
            ♥
          </span>
        </div>
      </div>

      {/* Bottom butterfly divider */}
      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

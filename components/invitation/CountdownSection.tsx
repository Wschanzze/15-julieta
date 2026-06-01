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
  if (diff <= 0) return { dias: 0, hs: 0, min: 0, seg: 0 }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hs:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seg:  Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft.dias, label: "días" },
    { value: timeLeft.hs,   label: "hs"   },
    { value: timeLeft.min,  label: "min"  },
    { value: timeLeft.seg,  label: "seg"  },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden section-tinted">
      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="label-text text-base mb-10">Falta</p>

        <div className="flex items-start gap-4 sm:gap-8">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-start gap-4 sm:gap-8">
              <div className="flex flex-col items-center min-w-[3rem]">
                <span className="countdown-number">
                  {mounted ? String(unit.value).padStart(2, "0") : "--"}
                </span>
                <span className="countdown-label">{unit.label}</span>
              </div>
              {i < units.length - 1 && (
                <span className="countdown-divider select-none mt-1">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <span className="heart-pulse text-2xl select-none" aria-hidden="true">♥</span>
        </div>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

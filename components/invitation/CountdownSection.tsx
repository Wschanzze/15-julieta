"use client"

import { useEffect, useState } from "react"
import ButterflyDivider from "./ButterflyDivider"

// 17 de julio de 2025 a las 21:00 hs Argentina (GMT-3)
// Se usa la cadena ISO con offset explícito para que funcione en cualquier TZ del servidor/cliente
const EVENT_DATE = new Date("2025-07-17T21:00:00.000-03:00")

interface TimeLeft {
  dias: number
  hs: number
  min: number
  seg: number
  done: boolean
}

function getTimeLeft(): TimeLeft {
  const diff = EVENT_DATE.getTime() - Date.now()
  if (diff <= 0) return { dias: 0, hs: 0, min: 0, seg: 0, done: true }
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hs:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seg:  Math.floor((diff % (1000 * 60)) / 1000),
    done: false,
  }
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  // Inicializar en el cliente para evitar hydration mismatch
  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const interval = setInterval(() => {
      const next = getTimeLeft()
      setTimeLeft(next)
      if (next.done) clearInterval(interval)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft?.dias ?? 0, label: "días" },
    { value: timeLeft?.hs   ?? 0, label: "hs"   },
    { value: timeLeft?.min  ?? 0, label: "min"  },
    { value: timeLeft?.seg  ?? 0, label: "seg"  },
  ]

  return (
    <section className="relative py-20 px-6 overflow-hidden section-tinted">
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* Mientras carga el cliente o evento finalizado */}
        {!timeLeft ? (
          /* SSR placeholder: misma estructura para evitar layout shift */
          <div className="flex items-start gap-4 sm:gap-8 opacity-0 pointer-events-none" aria-hidden="true">
            {["--", "--", "--", "--"].map((_, i) => (
              <div key={i} className="flex items-start gap-4 sm:gap-8">
                <div className="flex flex-col items-center min-w-[3rem]">
                  <span className="countdown-number">--</span>
                  <span className="countdown-label">---</span>
                </div>
              </div>
            ))}
          </div>
        ) : timeLeft.done ? (
          /* Mensaje de finalización */
          <div className="flex flex-col items-center gap-6 py-4">
            <span className="heart-pulse text-3xl select-none" aria-hidden="true">♥</span>
            <p
              className="text-center leading-snug"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                color: "#2d5a2d",
                maxWidth: "28rem",
              }}
            >
              ¡Llegó el gran día!<br />
              <span style={{ color: "#b8962e" }}>Te esperamos para celebrar juntos.</span>
            </p>
          </div>
        ) : (
          /* Contador en tiempo real */
          <>
            <p className="label-text text-base mb-10">Falta</p>

            <div className="flex items-start gap-3 sm:gap-8 flex-wrap justify-center">
              {units.map((unit, i) => (
                <div key={unit.label} className="flex items-start gap-3 sm:gap-8">
                  <div className="flex flex-col items-center min-w-[3.5rem] sm:min-w-[4.5rem]">
                    <span className="countdown-number">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                    <span className="countdown-label">{unit.label}</span>
                  </div>
                  {i < units.length - 1 && (
                    <span className="countdown-divider select-none mt-1" aria-hidden="true">|</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="heart-pulse text-2xl select-none" aria-hidden="true">♥</span>
            </div>
          </>
        )}
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

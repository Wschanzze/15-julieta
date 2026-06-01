"use client"

import { useEffect, useState } from "react"
import ButterflyDivider from "./ButterflyDivider"

// 17 de julio de 2026 a las 21:00 hs Argentina (UTC-3)
const EVENT_TIMESTAMP = new Date("2026-07-17T21:00:00.000-03:00").getTime()

function calcTimeLeft() {
  const diff = EVENT_TIMESTAMP - Date.now()
  if (diff <= 0) return null
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hs:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    min:  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seg:  Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function CountdownSection() {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof calcTimeLeft>>(null)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calcTimeLeft())

    const id = setInterval(() => {
      const t = calcTimeLeft()
      setTimeLeft(t)
      if (!t) clearInterval(id)
    }, 1000)

    return () => clearInterval(id)
  }, [])

  const units = [
    { value: timeLeft?.dias ?? 0, label: "Días" },
    { value: timeLeft?.hs   ?? 0, label: "Horas" },
    { value: timeLeft?.min  ?? 0, label: "Min"   },
    { value: timeLeft?.seg  ?? 0, label: "Seg"   },
  ]

  return (
    <section className="relative py-12 px-6 text-center overflow-hidden">

      {/* Section heading */}
      <p
        style={{
          fontFamily: "var(--font-lato), 'Lato', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#b8962e",
          marginBottom: "2.5rem",
        }}
      >
        Faltan
      </p>

      {/* Counter */}
      {!mounted ? (
        /* SSR skeleton — invisible, prevents layout shift */
        <div className="flex justify-center gap-4 sm:gap-10 opacity-0" aria-hidden="true">
          {["--", "--", "--", "--"].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <span style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", fontWeight: 700, color: "#2d5a2d", lineHeight: 1 }}>--</span>
              <span style={{ fontSize: "0.65rem", letterSpacing: "0.18em", color: "#b8962e", marginTop: "0.4rem" }}>---</span>
            </div>
          ))}
        </div>
      ) : !timeLeft ? (
        /* Event has passed */
        <div style={{ maxWidth: "30rem", margin: "0 auto", padding: "2rem 0" }}>
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
              color: "#2d5a2d",
              lineHeight: 1.5,
            }}
          >
            ¡Llegó el gran día!{" "}
            <span style={{ color: "#b8962e" }}>Te esperamos para celebrar juntos.</span>
          </p>
        </div>
      ) : (
        /* Live countdown */
        <div className="flex justify-center items-start gap-2 sm:gap-8 flex-wrap">
          {units.map((unit, i) => (
            <div key={unit.label} className="flex items-start gap-2 sm:gap-8">

              <div className="flex flex-col items-center min-w-[3rem] sm:min-w-[5rem]">
                {/* Number */}
                <span
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "clamp(3.2rem, 11vw, 6.5rem)",
                    fontWeight: 800,
                    color: "#2d5a2d",
                    lineHeight: 0.9,
                    display: "block",
                    letterSpacing: "-0.04em",
                    textShadow: "0 2px 4px rgba(45, 90, 45, 0.08), 0 0 20px rgba(184, 150, 46, 0.1)",
                  }}
                >
                  {String(unit.value).padStart(2, "0")}
                </span>
                {/* Label */}
                <span
                  style={{
                    fontFamily: "var(--font-lato), 'Lato', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#b8962e",
                    marginTop: "0.5rem",
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Divider dot between units */}
              {i < units.length - 1 && (
                <span
                  aria-hidden="true"
                  style={{
                    color: "#b8962e",
                    fontSize: "clamp(2rem, 6vw, 3.5rem)",
                    lineHeight: 1,
                    marginTop: "0.15em",
                    opacity: 0.6,
                    userSelect: "none",
                  }}
                >
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Para el gran día */}
      <h2
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontStyle: "italic",
          fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
          fontWeight: 400,
          color: "#2d5a2d",
          marginTop: "2.5rem",
          marginBottom: "0",
          lineHeight: 1.2,
        }}
      >
        para el gran día
      </h2>

      {/* Decorative line + heart */}
      <div className="flex flex-col items-center gap-3 mt-10">
        <div style={{ width: "3rem", height: "1px", background: "linear-gradient(90deg, transparent, #b8962e, transparent)" }} />
        <span
          aria-hidden="true"
          style={{
            fontSize: "1rem",
            color: "#b8962e",
            opacity: 0.7,
            animation: "pulse 1.6s ease-in-out infinite",
          }}
        >
          ♥
        </span>
      </div>

      <div className="mt-10">
        <ButterflyDivider />
      </div>
    </section>
  )
}

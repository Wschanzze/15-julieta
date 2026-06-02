"use client"

import { useState } from "react"
import ButterflyDivider from "./ButterflyDivider"

// Iconos SVG para cada item
const IconAttitude = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <circle cx="9" cy="9" r="1" fill="#b8962e" />
    <circle cx="15" cy="9" r="1" fill="#b8962e" />
  </svg>
)

const IconDance = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <circle cx="12" cy="12" r="3" />
    <path d="M7 9l-3-3" />
    <path d="M20 20l3 3" />
    <path d="M17 9l3-3" />
    <path d="M7 15l-3 3" />
  </svg>
)

const IconFun = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M11 15H7a4 4 0 0 0-4 4v2h4a4 4 0 0 0 4-4v-2z" />
    <path d="M13 15h4a4 4 0 0 1 4 4v2h-4a4 4 0 0 1-4-4v-2z" />
    <circle cx="9" cy="10" r="1" fill="#b8962e" />
    <circle cx="15" cy="10" r="1" fill="#b8962e" />
    <path d="M12 3v2" />
  </svg>
)

const IconMemories = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

const IconLove = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
)

// Items a recordar traer
const CHECKLIST_ITEMS = [
  {
    icon: <IconAttitude />,
    title: "Actitud Positiva",
    description: "¡La mejor energía para comenzar!",
    emoji: "✨"
  },
  {
    icon: <IconDance />,
    title: "Ganas de Bailar",
    description: "La pista nos espera",
    emoji: "💃"
  },
  {
    icon: <IconFun />,
    title: "Espíritu de Diversión",
    description: "A disfrutar como nunca",
    emoji: "🎉"
  },
  {
    icon: <IconMemories />,
    title: "Tu Cámara",
    description: "Para capturar los mejores momentos",
    emoji: "📸"
  },
  {
    icon: <IconLove />,
    title: "Mucho Amor",
    description: "Lo más importante de la noche",
    emoji: "❤️"
  },
]

export default function GiftsSection() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(CHECKLIST_ITEMS.length).fill(false))

  const toggleCheck = (index: number) => {
    const newChecked = [...checkedItems]
    newChecked[index] = !newChecked[index]
    setCheckedItems(newChecked)
  }

  return (
    <>
      <section className="relative py-14 px-4 sm:px-6 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Recuerda Traer
          </h2>
          <div className="gold-line my-4" />
          <p className="body-text text-base sm:text-lg italic mb-8 sm:mb-10 text-[#4a7a4a] px-2">
            Lo esencial para que esta noche sea inolvidable...
          </p>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-6xl mx-auto px-2">
            {CHECKLIST_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => toggleCheck(idx)}
                className="group relative flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{
                  background: checkedItems[idx]
                    ? "linear-gradient(135deg, rgba(45, 90, 45, 0.15), rgba(184, 150, 46, 0.1))"
                    : "#fffefb",
                  border: checkedItems[idx]
                    ? "2px solid #2d5a2d"
                    : "1.5px solid rgba(184, 150, 46, 0.3)",
                  boxShadow: checkedItems[idx]
                    ? "0 8px 24px rgba(45, 90, 45, 0.15), 0 0 0 1px rgba(184,150,46,0.3)"
                    : "0 2px 12px rgba(45, 90, 45, 0.06)",
                }}
                onMouseEnter={(e) => {
                  if (!checkedItems[idx]) {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-4px)"
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px rgba(184, 150, 46, 0.2)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (!checkedItems[idx]) {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)"
                    ;(e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 12px rgba(45, 90, 45, 0.06)"
                  }
                }}
              >
                {/* Checkbox indicator */}
                <div
                  className="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    border: checkedItems[idx]
                      ? "2px solid #2d5a2d"
                      : "2px solid #b8962e",
                    background: checkedItems[idx]
                      ? "#2d5a2d"
                      : "transparent",
                  }}
                >
                  {checkedItems[idx] && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>

                {/* Icon */}
                <div
                  className="mb-3 transition-transform duration-300"
                  style={{
                    transform: checkedItems[idx] ? "scale(1.1)" : "scale(1)",
                    opacity: checkedItems[idx] ? 0.7 : 1,
                  }}
                >
                  {item.icon}
                </div>

                {/* Emoji accent */}
                <span
                  className="text-2xl sm:text-3xl mb-2 transition-transform duration-300 inline-block"
                  style={{
                    transform: checkedItems[idx] ? "rotate(360deg) scale(1.2)" : "rotate(0deg) scale(1)",
                    animation: !checkedItems[idx] ? "floating 3s ease-in-out infinite" : "none",
                  }}
                >
                  {item.emoji}
                </span>

                {/* Title */}
                <h3
                  className="font-bold text-sm sm:text-base transition-all duration-300"
                  style={{
                    color: checkedItems[idx] ? "#2d5a2d" : "#2d5a2d",
                    textDecoration: checkedItems[idx] ? "line-through" : "none",
                    opacity: checkedItems[idx] ? 0.7 : 1,
                  }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-sm mt-1 transition-all duration-300"
                  style={{
                    color: "#4a7a4a",
                    opacity: checkedItems[idx] ? 0.6 : 0.8,
                  }}
                >
                  {item.description}
                </p>

                {/* Glow effect on check */}
                {checkedItems[idx] && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 20px rgba(45, 90, 45, 0.2)",
                      animation: "pulse 2s ease-in-out infinite",
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Counter */}
          <div className="mt-10 sm:mt-12 flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <span
              className="text-base sm:text-lg font-semibold"
              style={{ color: "#2d5a2d" }}
            >
              Preparado:
            </span>
            <span
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#b8962e" }}
            >
              {checkedItems.filter(Boolean).length}/{CHECKLIST_ITEMS.length}
            </span>
          </div>

          {/* Mini aclaración */}
          <p
            className="text-xs sm:text-sm mb-8 sm:mb-12 px-4"
            style={{
              color: "#4a7a4a",
              fontStyle: "italic",
              opacity: 0.8,
            }}
          >
            ✓ Marca todas las casillas para confirmar tu asistencia
          </p>

          {/* Divisor interno */}
          <div className="w-full my-10 sm:my-12 border-t border-[rgba(184,150,46,0.2)]" />

          {/* Confirmation Section - Inline */}
          <div className="flex flex-col items-center text-center">
            <h3 className="heading-display mb-4" style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)" }}>
              Confirmación de asistencia
            </h3>

            <div className="gold-line my-4" />

            <p className="body-text italic mb-8" style={{ fontSize: "1.1rem", color: "#4a7a4a" }}>
              Es importante que confirmes tu asistencia
            </p>

            <a
              href="https://wa.me/5492494275937?text=Hola!+Confirmo+mi+asistencia+a+los+XV+de+Julieta+%F0%9F%8E%89+He+preparado+todos+los+ítems+de+la+checklist."
              onClick={(e) => {
                const allChecked = checkedItems.every(item => item)
                if (!allChecked) {
                  e.preventDefault()
                }
              }}
              target={checkedItems.every(item => item) ? "_blank" : undefined}
              rel={checkedItems.every(item => item) ? "noopener noreferrer" : undefined}
              className="btn-gold"
              style={{
                fontSize: "1rem",
                padding: "0.75rem 3rem",
                pointerEvents: checkedItems.every(item => item) ? "auto" : "none",
                opacity: checkedItems.every(item => item) ? 1 : 0.5,
                cursor: checkedItems.every(item => item) ? "pointer" : "not-allowed",
              }}
              title={checkedItems.every(item => item) ? "" : "Debes marcar todas las casillas para confirmar"}
            >
              Confirmar asistencia
            </a>

            {/* Helper message when not all items are checked */}
            {!checkedItems.every(item => item) && (
              <p
                className="text-xs sm:text-sm mt-4"
                style={{
                  color: "#b8962e",
                  fontStyle: "italic",
                }}
              >
                👆 Completa la checklist arriba para activar el botón
              </p>
            )}

            {/* Success message when all items are checked */}
            {checkedItems.every(item => item) && (
              <p
                className="text-xs sm:text-sm mt-4"
                style={{
                  color: "#2d5a2d",
                  fontStyle: "italic",
                  fontWeight: 600,
                }}
              >
                ✓ ¡Estás listo para la fiesta! Confirma tu asistencia
              </p>
            )}
          </div>
        </div>

        <div className="mt-12 sm:mt-14">
          <ButterflyDivider />
        </div>
      </section>
    </>
  )
}

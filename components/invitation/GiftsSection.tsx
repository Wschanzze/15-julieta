"use client"

import { useState } from "react"
import ButterflyDivider from "./ButterflyDivider"

// SVG del cofre con billetes
const TreasureChestIcon = () => (
  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {/* Billetes volando */}
    <rect x="14" y="2" width="4" height="2.5" rx="0.3" fill="#b8962e" opacity="0.6" transform="rotate(15 16 3)" />
    <rect x="10" y="1" width="3.5" height="2" rx="0.3" fill="#b8962e" opacity="0.5" transform="rotate(-20 11.5 2)" />
    <rect x="18" y="3.5" width="3" height="2" rx="0.3" fill="#b8962e" opacity="0.4" transform="rotate(25 19.5 4.5)" />
    
    {/* Cofre */}
    <rect x="4" y="11" width="16" height="9" rx="1" stroke="#2d5a2d" strokeWidth="1.5" fill="none" />
    <path d="M4 15 h16" stroke="#2d5a2d" strokeWidth="1.5" />
    <rect x="11" y="13" width="2" height="3" rx="0.5" fill="#b8962e" />
    <path d="M4 11 L4 8 C4 7 5 6 6 6 L18 6 C19 6 20 7 20 8 L20 11" stroke="#2d5a2d" strokeWidth="1.5" fill="none" />
  </svg>
)

// SVG de Mercado Pago (simplificado)
const MercadoPagoIcon = () => (
  <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Mercado Pago">
    {/* Fondo redondeado */}
    <rect x="10" y="10" width="180" height="40" rx="8" fill="#009EE3" />
    
    {/* Icono de apretón de manos simplificado */}
    <ellipse cx="40" cy="30" rx="12" ry="10" fill="#fff" />
    <path d="M35 30 Q40 25 45 30" stroke="#009EE3" strokeWidth="2" fill="none" />
    
    {/* Texto "mercado pago" */}
    <text x="60" y="28" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#003D7A">mercado</text>
    <text x="60" y="42" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#00A0E3">pago</text>
  </svg>
)

export default function GiftsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-14 px-6 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
            Regalos
          </h2>
          <div className="gold-line my-4" />
          <p className="body-text text-lg italic mb-8 text-[#4a7a4a]">
            Si deseás regalarme algo más que tu hermosa presencia...
          </p>

          <div className="mb-8">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 12 20 22 4 22 4 12" />
              <rect x="2" y="7" width="20" height="5" />
              <line x1="12" y1="22" x2="12" y2="7" />
              <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
              <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
            </svg>
          </div>

          <button 
            onClick={() => setIsModalOpen(true)}
            className="btn-gold px-12 py-4 text-lg"
          >
            Ver más
          </button>
        </div>

        <div className="mt-10">
          <ButterflyDivider />
        </div>
      </section>

      {/* Modal de Regalos */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[400] flex items-center justify-center p-4"
          style={{ 
            background: "rgba(45, 90, 45, 0.75)",
            backdropFilter: "blur(8px)"
          }}
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Información de regalos"
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
            style={{
              background: "#fffefb",
              borderRadius: "1.5rem",
              border: "2px solid rgba(184, 150, 46, 0.3)",
              boxShadow: "0 20px 60px rgba(45, 90, 45, 0.3), 0 0 0 1px rgba(184,150,46,0.2)",
              padding: "2rem 1.5rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-[#2d5a2d] text-2xl rounded-full w-10 h-10 flex items-center justify-center transition-all hover:bg-[#2d5a2d] hover:text-white"
              style={{ border: "1.5px solid rgba(184, 150, 46, 0.4)" }}
              aria-label="Cerrar"
            >
              &times;
            </button>

            {/* Icono del cofre */}
            <div className="flex justify-center mb-6">
              <TreasureChestIcon />
            </div>

            {/* Texto principal */}
            <p 
              className="text-center mb-6 sm:mb-8 leading-relaxed px-2"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "clamp(0.95rem, 3vw, 1.1rem)",
                color: "#2d5a2d",
                fontWeight: 500
              }}
            >
              En el salón habrá un cofre para que dejes tu sobre.
            </p>

            {/* Divisor dorado */}
            <div 
              className="mx-auto mb-6 sm:mb-8"
              style={{
                width: "80px",
                height: "1.5px",
                background: "linear-gradient(to right, transparent, #b8962e, transparent)"
              }}
            />

            {/* Logo Mercado Pago */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <div className="scale-75 sm:scale-100">
                <MercadoPagoIcon />
              </div>
            </div>

            {/* Información de transferencia */}
            <div 
              className="text-center mb-6 sm:mb-8 px-2"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                color: "#4a7a4a",
                lineHeight: "1.8"
              }}
            >
              <p className="mb-3 sm:mb-4" style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)", fontWeight: 500 }}>
                Si preferís podés transferir a la siguiente cuenta:
              </p>
              
              <div style={{ fontSize: "clamp(0.85rem, 2.5vw, 0.95rem)" }}>
                <p className="break-words"><strong style={{ color: "#2d5a2d" }}>Titular:</strong> Juan de la Palotes</p>
                <p className="break-words"><strong style={{ color: "#2d5a2d" }}>Alias:</strong> transferime.a.esa.cuenta</p>
                <p className="break-words">
                  <strong style={{ color: "#2d5a2d" }}>CBU:</strong>{" "}
                  <span style={{ color: "#009EE3", fontWeight: 600 }}>03030456</span>
                </p>
              </div>
            </div>

            {/* Info icon */}
            <div className="flex justify-center mb-5 sm:mb-6">
              <div 
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center"
                style={{
                  border: "2px solid #b8962e",
                  color: "#b8962e",
                  fontSize: "1.1rem",
                  fontWeight: 700
                }}
              >
                i
              </div>
            </div>

            {/* Botón Volver */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-8 sm:px-10 py-2.5 sm:py-3 rounded-lg transition-all"
                style={{
                  background: "#2d5a2d",
                  color: "#fff",
                  fontFamily: "var(--font-lato), 'Lato', sans-serif",
                  fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                  fontWeight: 600,
                  border: "none",
                  boxShadow: "0 4px 12px rgba(45, 90, 45, 0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#4a7a4a"
                  ;(e.target as HTMLButtonElement).style.transform = "translateY(-2px)"
                  ;(e.target as HTMLButtonElement).style.boxShadow = "0 6px 16px rgba(45, 90, 45, 0.4)"
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.background = "#2d5a2d"
                  ;(e.target as HTMLButtonElement).style.transform = "translateY(0)"
                  ;(e.target as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(45, 90, 45, 0.3)"
                }}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

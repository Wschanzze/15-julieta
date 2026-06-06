"use client"

import { useState } from "react"

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "Confirmar asistencia", href: "#confirmacion" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Julieta", href: "#julieta" },
  ]

  return (
    <nav className="top-nav" aria-label="Navegación de la invitación">
      <div className="flex-1">
        <p className="heading-serif" style={{ fontSize: "0.95rem", color: "#2d5a2d", letterSpacing: "0.1em" }}>
          Julieta
        </p>
        <p className="label-text" style={{ fontSize: "0.65rem", opacity: 0.7 }}>
          Mis XV años
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            className="body-text transition-colors hover:text-[#b8962e]"
            style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", color: "#2d5a2d" }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex items-center justify-center focus:outline-none z-50 md:hidden cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Menú de navegación"
      >
        <div className="relative w-6 h-6 flex flex-col items-center justify-center">
          <span
            className={`absolute w-6 h-[2px] bg-[#2d5a2d] rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-[#2d5a2d] rounded-full transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-[#2d5a2d] rounded-full transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </div>
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 top-full border-b border-[#b8962e]/20 shadow-lg md:hidden transition-all duration-300 ease-in-out flex flex-col py-4 px-6 gap-2 ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
        }`}
        style={{ background: "rgba(255, 254, 251, 0.96)", backdropFilter: "blur(12px)" }}
      >
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="body-text py-2.5 transition-colors hover:text-[#b8962e]"
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
              color: "#2d5a2d",
              borderBottom: idx === menuItems.length - 1 ? "none" : "1px solid rgba(184, 150, 46, 0.15)"
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

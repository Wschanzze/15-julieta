"use client"

import ButterflyDivider from "./ButterflyDivider"

// Inline SVG icons — refined, thin-stroke, elegant
const IconMusic = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
)

const IconDress = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2C10.5 2 9 3 8 4L4 8l4 2-4 10h16L16 10l4-2-4-4c-1-1-2.5-2-4-2z" />
  </svg>
)

const IconNote = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
)

// Subtle botanical leaf SVG used as card accent
const LeafAccent = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 80 80"
    className={`w-16 h-16 opacity-[0.12] ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 70 C10 70 15 30 50 10 C50 10 55 45 20 65 C30 50 45 38 55 15"
      stroke="#2d5a2d"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />
    <ellipse cx="42" cy="24" rx="10" ry="6" fill="#2d5a2d" transform="rotate(-35 42 24)" />
    <ellipse cx="32" cy="38" rx="10" ry="6" fill="#2d5a2d" transform="rotate(-25 32 38)" />
    <ellipse cx="22" cy="52" rx="9" ry="5" fill="#2d5a2d" transform="rotate(-20 22 52)" />
  </svg>
)

const FIESTA_CARDS = [
  {
    tag: "Playlist",
    title: "Música",
    icon: <IconMusic />,
    desc: "¿Cuál es la canción que no debe faltar en la playlist de la fiesta?",
    btnLabel: "Sugerir canción",
    btnHref: "https://wa.me/5492494275937?text=Quiero+sugerir+una+canci%C3%B3n+para+la+playlist+de+los+XV+de+Julieta+%F0%9F%8E%B5",
    leafCorner: "top-0 right-0",
    leafRotate: "rotate-90",
  },
  {
    tag: "Vestimenta",
    title: "Dress Code",
    icon: <IconDress />,
    desc: "Una orientación para tu vestuario en esta noche especial.",
    btnLabel: "Ver más",
    btnHref: "#",
    leafCorner: "bottom-0 left-0",
    leafRotate: "rotate-[270deg]",
  },
  {
    tag: "Información",
    title: "Tips y Notas",
    icon: <IconNote />,
    desc: "Información adicional y detalles importantes para tener en cuenta.",
    btnLabel: "+ Info",
    btnHref: "#",
    leafCorner: "top-0 right-0",
    leafRotate: "rotate-45",
  },
]

export default function FiestaSection() {
  return (
    <section id="fiesta" className="relative py-16 px-6 overflow-visible">
      {/* Top divider */}
      <div className="mb-4">
        <ButterflyDivider />
      </div>

      {/* Section header */}
      <div className="text-center mb-12 mt-8">
        <p
          className="label-text mb-5"
          style={{ letterSpacing: "0.3em", fontSize: "0.75rem" }}
        >
          LA VELADA
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 7vw, 4.5rem)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#2d5a2d",
            lineHeight: 1.1,
          }}
        >
          Fiesta
        </h2>

        <div className="gold-line my-6" />

        <p
          className="body-text italic max-w-md mx-auto"
          style={{ fontSize: "1.05rem", color: "#4a7a4a" }}
        >
          Hagamos juntos una fiesta épica.{" "}
          <br className="hidden sm:block" />
          Aquí algunos detalles a tener en cuenta.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {FIESTA_CARDS.map((card) => (
          <div
            key={card.title}
            className="relative flex flex-col items-center text-center overflow-hidden"
            style={{
              background: "#fffefb",
              border: "1px solid rgba(184, 150, 46, 0.45)",
              borderRadius: "1.5rem",
              padding: "3rem 2rem 2.5rem",
              boxShadow: "0 2px 40px rgba(45, 90, 45, 0.06), 0 0 0 1px rgba(184,150,46,0.08)",
              transition: "transform 0.4s ease, box-shadow 0.4s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 12px 48px rgba(45, 90, 45, 0.12), 0 0 0 1.5px rgba(184,150,46,0.35)"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"
              ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                "0 2px 40px rgba(45, 90, 45, 0.06), 0 0 0 1px rgba(184,150,46,0.08)"
            }}
          >
            {/* Botanical leaf watermark in corner */}
            <div className={`absolute ${card.leafCorner} pointer-events-none`}>
              <LeafAccent className={card.leafRotate} />
            </div>

            {/* Thin gold top line accent */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2"
              style={{
                width: "60px",
                height: "2px",
                background: "linear-gradient(to right, transparent, #b8962e, transparent)",
                borderRadius: "1px",
              }}
              aria-hidden="true"
            />

            {/* Tag */}
            <p
              className="label-text mb-5"
              style={{ fontSize: "0.68rem", letterSpacing: "0.25em", color: "#b8962e" }}
            >
              {card.tag}
            </p>

            {/* Icon */}
            <div
              className="flex items-center justify-center mb-5"
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                border: "1px solid rgba(184, 150, 46, 0.3)",
                background: "rgba(184, 150, 46, 0.05)",
              }}
            >
              {card.icon}
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 1.9rem)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#2d5a2d",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              {card.title}
            </h3>

            {/* Micro gold line */}
            <div
              style={{
                width: "36px",
                height: "1px",
                background: "rgba(184, 150, 46, 0.5)",
                margin: "0 auto 1.25rem",
              }}
              aria-hidden="true"
            />

            {/* Description */}
            <p
              className="flex-1 leading-relaxed"
              style={{
                fontFamily: "var(--font-lato), 'Lato', sans-serif",
                fontSize: "0.93rem",
                fontWeight: 400,
                color: "#4a7a4a",
                marginBottom: "2rem",
              }}
            >
              {card.desc}
            </p>

            {/* Button */}
            <a
              href={card.btnHref}
              target={card.btnHref.startsWith("http") ? "_blank" : undefined}
              rel={card.btnHref.startsWith("http") ? "noopener noreferrer" : undefined}
              className="fiesta-btn"
            >
              {card.btnLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

import ButterflyDivider from "./ButterflyDivider"

export default function PartyDetailsSection() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Juan+B.+Justo+488+Salón+Aoma"

  return (
    <section className="relative py-24 px-6 overflow-hidden section-tinted">
      <div className="relative z-10 flex justify-center">
        <div className="info-card w-full max-w-sm p-10 flex flex-col items-center text-center gap-8">

          {/* Icon */}
          <div style={{ color: "#b8962e" }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5.8 11.3 2 22l10.7-3.79" />
              <path d="M4 3h.01" /><path d="M22 8h.01" /><path d="M15 2h.01" /><path d="M22 20h.01" />
              <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
              <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17" />
              <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7" />
              <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2z" />
            </svg>
          </div>

          <h2 className="heading-display" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)" }}>
            Fiesta
          </h2>

          {/* Day */}
          <div className="w-full flex flex-col items-center gap-3 border-b border-[#b8962e33] pb-7">
            <p className="label-text">Día</p>
            <p className="body-text font-bold" style={{ fontSize: "1.1rem" }}>
              Jueves <span className="text-[#b8962e]">17</span> de Julio &mdash; 21hs
            </p>

          </div>

          {/* Venue */}
          <div className="w-full flex flex-col items-center gap-3 border-b border-[#b8962e33] pb-7">
            <p className="label-text">Lugar</p>
            <p className="body-text font-bold" style={{ fontSize: "1.1rem" }}>Salón Aoma</p>
            <a
              href="https://wa.me/5492494275937?text=Hola!+Confirmo+mi+asistencia+a+los+XV+de+Julieta+%F0%9F%8E%89"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2"
            >
              Confirmar asistencia
            </a>
          </div>

          {/* Address */}
          <div className="w-full flex flex-col items-center gap-3">
            <p className="label-text">Dirección</p>
            <p className="body-text font-bold" style={{ fontSize: "1.1rem" }}>Juan B. Justo 488</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-2"
            >
              ¿Cómo llegar?
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

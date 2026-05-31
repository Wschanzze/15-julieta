import ButterflyDivider from "./ButterflyDivider"

export default function PartyDetailsSection() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Salon+de+Fiestas+Buenos+Aires"

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a55] to-transparent pointer-events-none" />

      <div className="relative z-10 flex justify-center">
        <div className="info-card w-full max-w-sm p-8 flex flex-col items-center text-center gap-8">
          {/* Party icon */}
          <div className="text-[#c9a84c] opacity-80">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl font-light tracking-wide text-foreground">
            Fiesta
          </h2>

          {/* Day */}
          <div className="w-full flex flex-col items-center gap-3 border-b border-[#c9a84c22] pb-6">
            <h6 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Día</h6>
            <p className="text-base font-light text-foreground/90">
              Jueves <strong className="font-semibold">17</strong> de Julio &mdash; 21hs
            </p>
            <a
              href={`https://calendar.google.com/calendar/r/eventedit?text=XV+de+Julieta&dates=20250717T210000/20250718T030000&details=Fiesta+de+XV+de+Julieta&ctz=America/Argentina/Buenos_Aires`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-1"
            >
              Agendar
            </a>
          </div>

          {/* Venue */}
          <div className="w-full flex flex-col items-center gap-3 border-b border-[#c9a84c22] pb-6">
            <h6 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Lugar</h6>
            <p className="text-base font-light text-foreground/90">Salon de fiestas</p>
            <button className="btn-gold mt-1">
              Confirmar asistencia
            </button>
          </div>

          {/* Address */}
          <div className="w-full flex flex-col items-center gap-3">
            <h6 className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Dirección</h6>
            <p className="text-base font-light text-foreground/90">Buenos Aires, Argentina</p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-1"
              style={{ color: "#c9a84c" }}
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

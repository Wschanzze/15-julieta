import ButterflyDivider from "./ButterflyDivider"

// This will be customized per guest - placeholder for now
const GUESTS = ["Nombre Invitado 1", "Nombre Invitado 2"]
const TOTAL_PASES = 2

export default function GuestSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        {/* Pases badge */}
        <div className="w-14 h-14 rounded-full border border-[#c9a84c44] flex items-center justify-center mb-4">
          <span className="text-xl font-light text-foreground/80">{TOTAL_PASES}</span>
        </div>

        <h2 className="text-xl tracking-[0.35em] font-light text-foreground/90 mb-8 uppercase">
          Invitados
        </h2>

        {/* Guest list */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {GUESTS.map((guest) => (
            <span key={guest} className="invitado-badge">
              {guest}
            </span>
          ))}
        </div>

        <p className="text-base font-light italic text-muted-foreground">
          Nos encanta compartir este momento con vos. ¡Te esperamos!
        </p>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

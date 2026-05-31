import ButterflyDivider from "./ButterflyDivider"

const FIESTA_CARDS = [
  {
    title: "Música",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    desc: "¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?",
    btnLabel: "Sugerir canción",
    btnHref: "https://wa.me/549XXXXXXXXXX?text=Quiero+sugerir+una+cancion+para+los+XV+de+Julieta",
    btnStyle: {},
  },
  {
    title: "Dress Code",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
    desc: "Una orientación para tu vestuario",
    btnLabel: "Ver más",
    btnHref: "#",
    btnStyle: {},
  },
  {
    title: "Tips y Notas",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    desc: "Información adicional para tener en cuenta",
    btnLabel: "+ Info",
    btnHref: "#",
    btnStyle: {},
  },
]

export default function FiestaSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10">
        {/* Section header with butterfly divider on top */}
        <div className="mb-6">
          <ButterflyDivider />
        </div>

        <div className="text-center mb-12 mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-foreground mb-3">
            Fiesta
          </h2>
          <div className="gold-line my-5" />
          <p className="text-base font-light text-muted-foreground italic">
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {FIESTA_CARDS.map((card) => (
            <div key={card.title} className="fiesta-card p-8 flex flex-col items-center text-center gap-6">
              <h3 className="text-xl sm:text-2xl font-light tracking-wide gold-shimmer">
                {card.title}
              </h3>

              <div className="opacity-80">
                {card.icon}
              </div>

              <p className="text-sm font-light text-muted-foreground leading-relaxed flex-1">
                {card.desc}
              </p>

              <a
                href={card.btnHref}
                target={card.btnHref.startsWith("http") ? "_blank" : undefined}
                rel={card.btnHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className="btn-gold w-full"
              >
                {card.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

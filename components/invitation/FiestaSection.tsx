import ButterflyDivider from "./ButterflyDivider"

const FIESTA_CARDS = [
  {
    title: "Música",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#d4b96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    desc: "¿Cuál es la canción que no debe faltar en la PlayList de la fiesta?",
    btnLabel: "Sugerir canción",
    btnHref: "https://wa.me/5492494275937?text=Quiero+sugerir+una+canci%C3%B3n+para+la+playlist+de+los+XV+de+Julieta+%F0%9F%8E%B5",
  },
  {
    title: "Dress Code",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#d4b96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
    desc: "Una orientación para tu vestuario",
    btnLabel: "Ver más",
    btnHref: "#",
  },
  {
    title: "Tips y Notas",
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#d4b96a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    desc: "Información adicional para tener en cuenta",
    btnLabel: "+ Info",
    btnHref: "#",
  },
]

export default function FiestaSection() {
  return (
    <section id="fiesta" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10">

        <div className="mb-6">
          <ButterflyDivider />
        </div>

        <div className="text-center mb-14 mt-8">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)" }}>
            Fiesta
          </h2>
          <div className="gold-line my-5" />
          <p className="body-text italic" style={{ fontSize: "1.05rem" }}>
            Hagamos juntos una fiesta épica. Aquí algunos detalles a tener en cuenta.
          </p>
        </div>

        {/* Green cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {FIESTA_CARDS.map((card) => (
            <div key={card.title} className="fiesta-card p-8 flex flex-col items-center text-center gap-6">
              {/* Title: green */}
              <h3
                className="font-bold tracking-wide"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                  fontSize: "clamp(1.3rem, 3vw, 1.6rem)",
                  color: "#2d5a2d",
                }}
              >
                {card.title}
              </h3>

              {/* Icon: gold */}
              <div>{card.icon}</div>

              {/* Description: green */}
              <p className="leading-relaxed flex-1 font-normal"
                 style={{ fontFamily: "var(--font-lato)", fontSize: "0.95rem", color: "#4a7a4a" }}>
                {card.desc}
              </p>

              {/* Button: green border, green text, gold on hover */}
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

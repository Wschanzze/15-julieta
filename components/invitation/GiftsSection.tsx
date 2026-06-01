import ButterflyDivider from "./ButterflyDivider"

export default function GiftsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}>
          Regalos
        </h2>
        <div className="gold-line my-5" />
        <p className="body-text text-lg italic mb-10 text-[#4a7a4a]">
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

        <button className="btn-gold px-12 py-4 text-lg">
          Ver más
        </button>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

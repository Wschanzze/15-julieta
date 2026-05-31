import ButterflyDivider from "./ButterflyDivider"

export default function GiftsSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#2d4a2d] mb-3">
          Regalos
        </h2>
        <div className="gold-line my-5" />
        <p className="text-base font-light text-[#5a7a5a] italic mb-10">
          Si deseás regalarme algo más que tu hermosa presencia...
        </p>

        {/* Gift icon */}
        <div className="mb-8 opacity-70">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b8962e" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
        </div>

        <button className="btn-gold px-10 py-3 text-base">
          Ver más
        </button>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

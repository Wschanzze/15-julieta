import ButterflyDivider from "./ButterflyDivider"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Sparkles decorativos */}
      <div className="sparkle" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
      <div className="sparkle" style={{ top: '30%', right: '20%', animationDelay: '1s' }} />
      <div className="sparkle" style={{ bottom: '40%', left: '25%', animationDelay: '2s' }} />
      <div className="sparkle" style={{ top: '60%', right: '15%', animationDelay: '1.5s' }} />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 sm:pt-20 pb-8 sm:pb-10 z-10 relative">
        
        {/* Date */}
        <p className="label-text text-xs sm:text-sm mb-6 sm:mb-8">
          17.07.2026
        </p>

        {/* Name — dorado con efectos premium */}
        <h1
          className="leading-tight mb-8 sm:mb-10 px-2"
          style={{
            fontSize: "clamp(3.5rem, 18vw, 11rem)",
            fontWeight: 400,
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontStyle: "italic",
            letterSpacing: "0.04em",
            color: "#d4b96a",
            textShadow: "0 0 20px rgba(212, 185, 106, 0.4), 0 2px 4px rgba(45, 90, 45, 0.1)",
          }}
        >
          Julieta
        </h1>

        {/* Subtitle */}
        <p
          className="text-[#2d5a2d] mb-10 sm:mb-12 font-semibold tracking-[0.22em] sm:tracking-[0.25em]"
          style={{ fontSize: "clamp(1.1rem, 3.5vw, 2rem)", fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          Mis XV años
        </p>

        {/* Message */}
        <p className="body-text max-w-lg text-base sm:text-lg italic leading-relaxed text-[#4a7a4a] px-4">
          Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
        </p>
      </div>

      <div className="relative z-10 mt-8 sm:mt-10">
        <ButterflyDivider />
      </div>
    </section>
  )
}

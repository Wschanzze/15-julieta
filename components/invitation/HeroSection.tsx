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

        {/* Name — dorado con efectos premium y plantas animadas */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center mb-8 sm:mb-10 py-6 select-none">
          {/* Left plant behind text */}
          <div className="absolute left-[8%] sm:left-[14%] md:left-[18%] lg:left-[22%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 z-0 pointer-events-none opacity-80">
            <div className="w-full h-full animate-sway-left">
              <img
                src="/Flores/Grupo02_c.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right plant behind text */}
          <div className="absolute right-[8%] sm:right-[14%] md:right-[18%] lg:right-[22%] top-1/2 -translate-y-1/2 translate-x-1/2 w-28 h-28 xs:w-36 xs:h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 z-0 pointer-events-none opacity-80">
            <div className="w-full h-full animate-sway-right">
              <img
                src="/Flores/Grupo01_c.png"
                alt=""
                className="w-full h-full object-contain scale-x-[-1]"
              />
            </div>
          </div>

          {/* The Name "Julieta" */}
          <h1
            className="leading-tight px-2 text-mirrored-shine relative z-10"
            style={{
              fontSize: "clamp(3.5rem, 18vw, 11rem)",
              fontWeight: 400,
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              letterSpacing: "0.04em",
              textShadow: "0 0 25px rgba(212, 185, 106, 0.35), 0 2px 4px rgba(45, 90, 45, 0.08)",
            }}
          >
            Julieta
          </h1>
        </div>

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

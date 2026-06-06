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

        {/* Name — dorado con lecho floral 3D denso */}
        {/* Name — Título floral enmascarado ("julieta") */}
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center my-8 sm:my-12 py-10 select-none">
          
          {/* ========================================================
              CAPA DE PRIMER PLANO (z-20) - Flores naciendo del contorno del texto
              ======================================================== */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            
            {/* 1. Ramillete en el extremo izquierdo (letra 'j') */}
            <div className="absolute left-[10%] sm:left-[16%] md:left-[20%] top-[60%] -translate-y-1/2 -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <div className="w-full h-full animate-sway-left">
                <img
                  src="/Flores/Grupo02_b.png"
                  alt=""
                  className="w-full h-full object-contain rotate-[-30deg]"
                />
              </div>
            </div>

            {/* 2. Ramillete en el medio (letras 'l' / 'i') */}
            <div className="absolute left-[44%] sm:left-[46%] md:left-[47%] top-[15%] -translate-y-1/2 w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <div className="w-full h-full animate-sway-right">
                <img
                  src="/Flores/Grupo02_a.png"
                  alt=""
                  className="w-full h-full object-contain scale-x-[-1] rotate-[15deg]"
                />
              </div>
            </div>

            {/* 3. Ramillete en el extremo derecho (letra 'a') */}
            <div className="absolute right-[8%] sm:right-[14%] md:right-[18%] top-[35%] -translate-y-1/2 translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28">
              <div className="w-full h-full animate-sway-slow">
                <img
                  src="/Flores/Grupo01_b.png"
                  alt=""
                  className="w-full h-full object-contain rotate-[-15deg]"
                />
              </div>
            </div>

          </div>

          {/* ========================================================
              CAPA DEL TEXTO (z-10) - Máscara de recorte floral ("julieta")
              ======================================================== */}
          <h1
            className="leading-tight px-6 text-floral-masked relative z-10 text-center select-text"
            style={{
              fontSize: "clamp(3.5rem, 18vw, 11rem)",
              fontWeight: 400,
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            julieta
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

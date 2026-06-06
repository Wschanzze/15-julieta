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
        <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center my-8 sm:my-12 py-10 select-none">
          
          {/* ========================================================
              CAPA DE FONDO (z-0) - Lecho floral denso detrás del texto (Opción 2)
              ======================================================== */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            
            {/* 1. Centro Fondo - Rosas y claveles especiales (FloresEspeciales.png) */}
            <div 
              className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-48 sm:w-[500px] sm:h-[300px] md:w-[600px] md:h-[360px] opacity-75 z-0"
              style={{ mixBlendMode: "multiply", filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-slow">
                <img
                  src="/Flores/FloresEspeciales.png"
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* 2. Centro-Izquierda Fondo (Grupo03.png) */}
            <div 
              className="absolute left-[25%] sm:left-[30%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 opacity-75"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-slow">
                <img
                  src="/Flores/Grupo03.png"
                  alt=""
                  className="w-full h-full object-contain -rotate-[10deg]"
                />
              </div>
            </div>

            {/* 3. Centro-Derecha Fondo (Grupo03.png invertido) */}
            <div 
              className="absolute right-[25%] sm:right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 opacity-75"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-slow">
                <img
                  src="/Flores/Grupo03.png"
                  alt=""
                  className="w-full h-full object-contain scale-x-[-1] rotate-[10deg]"
                />
              </div>
            </div>

            {/* 4. Extremo Izquierda Fondo (Grupo02_c.png) */}
            <div 
              className="absolute left-[8%] sm:left-[12%] top-[45%] -translate-y-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 opacity-75"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-left">
                <img
                  src="/Flores/Grupo02_c.png"
                  alt=""
                  className="w-full h-full object-contain -rotate-[25deg]"
                />
              </div>
            </div>

            {/* 5. Extremo Derecha Fondo (Grupo01_c.png) */}
            <div 
              className="absolute right-[8%] sm:right-[12%] top-[45%] -translate-y-1/2 translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 opacity-75"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-right">
                <img
                  src="/Flores/Grupo01_c.png"
                  alt=""
                  className="w-full h-full object-contain scale-x-[-1] rotate-[25deg]"
                />
              </div>
            </div>

            {/* 6. Superior Centro Fondo (Grupo02_a.png) */}
            <div 
              className="absolute top-[5%] left-1/2 -translate-x-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-60 md:h-60 opacity-70"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-delicate">
                <img
                  src="/Flores/Grupo02_a.png"
                  alt=""
                  className="w-full h-full object-contain rotate-12"
                />
              </div>
            </div>

            {/* 7. Inferior Centro Fondo (Grupo02_b.png) */}
            <div 
              className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 opacity-70"
              style={{ filter: "brightness(0.95) contrast(0.90)" }}
            >
              <div className="w-full h-full animate-sway-delicate">
                <img
                  src="/Flores/Grupo02_b.png"
                  alt=""
                  className="w-full h-full object-contain -rotate-12"
                />
              </div>
            </div>

          </div>

          {/* ========================================================
              CAPA DEL TEXTO (z-10) - Texto principal "Julieta"
              ======================================================== */}
          <h1
            className="leading-tight px-6 text-mirrored-shine relative z-10 text-center select-text"
            style={{
              fontSize: "clamp(3.5rem, 18vw, 11rem)",
              fontWeight: 400,
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              letterSpacing: "0.04em",
              textShadow: "0 0 30px rgba(212, 185, 106, 0.45), 0 2px 4px rgba(45, 90, 45, 0.1)",
            }}
          >
            Julieta
          </h1>

          {/* ========================================================
              CAPA DE PRIMER PLANO (z-20) - Flores superpuestas al texto
              ======================================================== */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            
            {/* 8. Superposición Izquierda sobre la letra 'J' (Grupo02_b.png) */}
            <div className="absolute left-[20%] sm:left-[24%] md:left-[26%] bottom-[12%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-95">
              <div className="w-full h-full animate-sway-left">
                <img
                  src="/Flores/Grupo02_b.png"
                  alt=""
                  className="w-full h-full object-contain rotate-[45deg]"
                />
              </div>
            </div>

            {/* 9. Superposición Derecha sobre la letra 'a' (Grupo02_a.png) */}
            <div className="absolute right-[18%] sm:right-[22%] md:right-[24%] top-[10%] w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 opacity-95">
              <div className="w-full h-full animate-sway-right">
                <img
                  src="/Flores/Grupo02_a.png"
                  alt=""
                  className="w-full h-full object-contain scale-x-[-1] -rotate-[35deg]"
                />
              </div>
            </div>

          </div>

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

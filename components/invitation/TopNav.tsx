export default function TopNav() {
  return (
    <nav className="top-nav" aria-label="Navegación de la invitación">
      <div className="flex-1">
        <p className="text-xs tracking-[0.2em] text-[#5a7a5a] uppercase font-light">
          Julieta
        </p>
        <p className="text-[10px] tracking-[0.15em] text-[#5a7a5a]/70 font-light">
          Mis XV años
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#confirmacion"
          className="text-xs tracking-[0.1em] text-[#5a7a5a] hover:text-[#2d4a2d] transition-colors font-light"
        >
          Confirmar asistencia
        </a>
        <a
          href="#fiesta"
          className="text-xs tracking-[0.1em] text-[#5a7a5a] hover:text-[#2d4a2d] transition-colors font-light hidden sm:block"
        >
          Sugerir canción
        </a>
        <a
          href="#fiesta"
          className="text-xs tracking-[0.1em] text-[#5a7a5a] hover:text-[#2d4a2d] transition-colors font-light hidden sm:block"
        >
          Agendar Fiesta
        </a>
      </div>
    </nav>
  )
}

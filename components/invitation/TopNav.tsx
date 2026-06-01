export default function TopNav() {
  return (
    <nav className="top-nav" aria-label="Navegación de la invitación">
      <div className="flex-1">
        <p className="heading-serif" style={{ fontSize: "0.95rem", color: "#2d5a2d", letterSpacing: "0.1em" }}>
          Julieta
        </p>
        <p className="label-text" style={{ fontSize: "0.65rem", opacity: 0.7 }}>
          Mis XV años
        </p>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#confirmacion"
          className="body-text transition-colors hover:text-[#b8962e]"
          style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", color: "#2d5a2d" }}
        >
          Confirmar asistencia
        </a>
        <a
          href="#fiesta"
          className="body-text transition-colors hover:text-[#b8962e] hidden sm:block"
          style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", color: "#2d5a2d" }}
        >
          Sugerir canción
        </a>
        <a
          href="#fiesta"
          className="body-text transition-colors hover:text-[#b8962e] hidden sm:block"
          style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", color: "#2d5a2d" }}
        >
          Agendar Fiesta
        </a>
      </div>
    </nav>
  )
}

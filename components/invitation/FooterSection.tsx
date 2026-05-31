export default function FooterSection() {
  return (
    <footer className="relative py-12 px-6 text-center z-10">
      <div className="gold-line mb-8" />

      <p className="text-sm tracking-[0.2em] text-[#5a7a5a] font-light mb-1 uppercase">
        Julieta
      </p>
      <p className="text-xs tracking-[0.15em] text-[#5a7a5a]/70 font-light mb-8 uppercase">
        Mis XV años &mdash; 17 de Julio 2025
      </p>

      <span className="text-xs text-[#5a7a5a]/50 font-light">
        Hecho con{" "}
        <span className="text-[#b8962e] opacity-60" aria-hidden="true">♥</span>
      </span>
    </footer>
  )
}

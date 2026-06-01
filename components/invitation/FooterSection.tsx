export default function FooterSection() {
  return (
    <footer className="relative py-10 px-6 text-center z-10">
      <div className="gold-line mb-6" />

      <p
        className="heading-serif mb-1"
        style={{ fontSize: "1.15rem", letterSpacing: "0.2em", color: "#2d5a2d" }}
      >
        Julieta
      </p>
      <p
        className="label-text mb-6"
        style={{ color: "#4a7a4a", opacity: 0.8 }}
      >
        Mis XV años &mdash; 17 de Julio 2025
      </p>

      <span className="body-text" style={{ fontSize: "0.8rem", color: "#4a7a4a", opacity: 0.6 }}>
        Hecho con{" "}
        <span className="heart-pulse inline-block" style={{ fontSize: "0.9rem" }} aria-hidden="true">♥</span>
      </span>
    </footer>
  )
}

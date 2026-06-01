import ButterflyDivider from "./ButterflyDivider"

export default function ConfirmationSection() {
  return (
    <section id="confirmacion" className="relative py-14 px-6 overflow-hidden section-tinted">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="heading-display mb-4" style={{ fontSize: "clamp(2rem, 5.5vw, 3.2rem)" }}>
          Confirmación de asistencia
        </h2>

        <div className="gold-line my-4" />

        <p className="body-text italic mb-8" style={{ fontSize: "1.1rem", color: "#4a7a4a" }}>
          Es importante que confirmes tu asistencia
        </p>

        <a
          href="https://wa.me/5492494275937?text=Hola!+Confirmo+mi+asistencia+a+los+XV+de+Julieta+%F0%9F%8E%89"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: "1rem", padding: "0.75rem 3rem" }}
        >
          Confirmar asistencia
        </a>
      </div>

      <div className="mt-10">
        <ButterflyDivider />
      </div>
    </section>
  )
}

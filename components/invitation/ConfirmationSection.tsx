import ButterflyDivider from "./ButterflyDivider"

export default function ConfirmationSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-foreground mb-3">
          Confirmación de asistencia
        </h2>

        <div className="gold-line my-5" />

        <p className="text-base font-light text-muted-foreground mb-10 italic">
          Es importante que confirmes tu asistencia
        </p>

        <a
          href="https://wa.me/549XXXXXXXXXX?text=Hola!+Confirmo+asistencia+a+los+XV+de+Julieta"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold px-10 py-3 text-base"
        >
          Confirmar asistencia
        </a>
      </div>

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

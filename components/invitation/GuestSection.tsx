import ButterflyDivider from "./ButterflyDivider"

export default function GuestSection() {
  return (
    <section className="relative py-10 px-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto">
        <p
          className="body-text italic"
          style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)", color: "#2d5a2d" }}
        >
          Los momentos más felices y divertidos de la vida se tornan más lindos cuando los compartimos con familiares y amigos.
        </p>
      </div>
      <div className="mt-8">
        <ButterflyDivider />
      </div>
    </section>
  )
}

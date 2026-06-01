import ButterflyDivider from "./ButterflyDivider"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-8 z-10 relative">
        {/* Date */}
        <p className="label-text text-sm mb-6">
          17.07.2025
        </p>

        <div className="gold-line mb-6" />

        {/* Name — gold shimmer, large */}
        <h1
          className="gold-shimmer leading-none mb-4"
          style={{ fontSize: "clamp(4.5rem, 15vw, 10rem)", fontWeight: 700 }}
        >
          Julieta
        </h1>

        <div className="gold-line mb-6" />

        {/* Subtitle */}
        <p
          className="text-[#2d5a2d] mb-10 font-semibold tracking-[0.25em]"
          style={{ fontSize: "clamp(1.3rem, 3.5vw, 2rem)", fontFamily: "var(--font-playfair), 'Playfair Display', serif" }}
        >
          Mis XV años
        </p>

        {/* Message */}
        <p className="body-text max-w-md text-lg italic leading-relaxed text-[#4a7a4a]">
          Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <ButterflyDivider />
      </div>
    </section>
  )
}

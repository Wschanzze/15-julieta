import ButterflyDivider from "./ButterflyDivider"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden">
      {/* Content centered vertically */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-24 pb-8 z-10 relative">
        {/* Date */}
        <p className="text-sm tracking-[0.3em] text-muted-foreground mb-6 uppercase font-light">
          17.07.2025
        </p>

        {/* Gold lines around name */}
        <div className="gold-line mb-6" />

        {/* Name */}
        <h1 className="text-[clamp(4rem,14vw,9rem)] font-light leading-none tracking-wide gold-shimmer mb-4">
          Julieta
        </h1>

        <div className="gold-line mb-6" />

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl font-light tracking-[0.2em] text-foreground/90 mb-10">
          Mis XV años
        </p>

        {/* Message */}
        <p className="max-w-md text-base sm:text-lg font-light leading-relaxed text-foreground/70 italic">
          Te espero para compartir la alegría de esa noche que será para mí mágica, inolvidable y única.
        </p>
      </div>

      {/* Butterfly divider at bottom */}
      <div className="relative z-10 mt-8">
        <ButterflyDivider />
      </div>
    </section>
  )
}

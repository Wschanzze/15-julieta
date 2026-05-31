import Image from "next/image"

interface ButterflyDividerProps {
  flipped?: boolean
}

export default function ButterflyDivider({ flipped = false }: ButterflyDividerProps) {
  return (
    <div
      className={`relative w-full flex justify-center overflow-visible ${flipped ? "scale-y-[-1]" : ""}`}
      aria-hidden="true"
    >
      {/* Gold horizontal line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c44] to-transparent" />

      {/* Butterflies row */}
      <div className="relative flex items-end justify-center gap-2 sm:gap-4 pb-0">
        <div className="relative w-20 h-16 sm:w-28 sm:h-20 -mb-4 opacity-75 translate-y-1">
          <Image
            src="/butterfly-gold.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.4)]"
            style={{ objectPosition: "left" }}
          />
        </div>
        <div className="relative w-24 h-20 sm:w-32 sm:h-24 -mb-6 opacity-90">
          <Image
            src="/butterfly-gold.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(201,168,76,0.5)]"
            style={{ objectPosition: "center" }}
          />
        </div>
        <div className="relative w-16 h-14 sm:w-20 sm:h-16 -mb-3 opacity-70">
          <Image
            src="/butterfly-gold.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_8px_rgba(201,168,76,0.3)]"
            style={{ transform: "scaleX(-1)", objectPosition: "right" }}
          />
        </div>
        <div className="relative w-24 h-20 sm:w-28 sm:h-22 -mb-5 opacity-85">
          <Image
            src="/butterfly-gold.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_10px_rgba(201,168,76,0.45)]"
            style={{ transform: "scaleX(-1)", objectPosition: "left" }}
          />
        </div>
        <div className="relative w-18 h-14 sm:w-22 sm:h-18 -mb-2 opacity-65">
          <Image
            src="/butterfly-gold.png"
            alt=""
            fill
            className="object-contain drop-shadow-[0_0_6px_rgba(201,168,76,0.35)]"
            style={{ objectPosition: "right" }}
          />
        </div>
      </div>
    </div>
  )
}

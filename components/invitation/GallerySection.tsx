"use client"

import { useState } from "react"
import Image from "next/image"
import ButterflyDivider from "./ButterflyDivider"

const PHOTOS = [
  { src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop", alt: "Foto 1" },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=400&fit=crop", alt: "Foto 2" },
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop", alt: "Foto 3" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop", alt: "Foto 4" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop", alt: "Foto 5" },
]

export default function GallerySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#2d4a2d] mb-3">
            Un recorrido de estos 15 años
          </h2>
          <div className="gold-line my-5" />
          <p className="text-base font-light text-[#5a7a5a] italic">
            Junto a personas que son muy importantes en mi vida
          </p>

          {/* Camera icon */}
          <div className="mt-6 flex justify-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b8962e"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.7}
              aria-hidden="true"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        {/* Photo carousel */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:flex-wrap md:justify-center md:overflow-visible">
          {PHOTOS.map((photo, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="polaroid flex-shrink-0 snap-center w-44 h-52 md:w-40 md:h-48 overflow-hidden cursor-pointer focus:outline-none"
              style={{ transform: i % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)" }}
              aria-label={`Ver foto ${i + 1}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 bg-white/95 z-[300] flex items-center justify-center p-4"
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <div className="relative max-w-lg w-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={PHOTOS[activeIdx].src}
              alt={PHOTOS[activeIdx].alt}
              width={600}
              height={600}
              className="object-contain w-full h-full rounded"
            />
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-2 right-2 text-[#2d4a2d] text-xl bg-white/80 rounded-full w-8 h-8 flex items-center justify-center border border-[#b8962e44]"
              aria-label="Cerrar foto"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="mt-16">
        <ButterflyDivider />
      </div>
    </section>
  )
}

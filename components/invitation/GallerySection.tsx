"use client"

import { useState } from "react"
import Image from "next/image"
import ButterflyDivider from "./ButterflyDivider"

// Las 4 fotos reales de Julieta con sus ratios originales
const PHOTOS = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b19955ca-1936-4de3-9692-78512c2449e6.jfif-WaTgh3nWSUFTga3267QX3x8drLGVXg.jpeg",
    alt: "Julieta con tiara y campera rosa",
    // Retrato vertical aprox 3:4
    width: 3,
    height: 4,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/067cdc21-314b-494d-9052-996157f86f11.jfif-ysKYru5eb0Vmj7FKc2B4VIPxgClBCs.jpeg",
    alt: "Julieta con proyeccion de luces doradas",
    // Horizontal aprox 16:9
    width: 16,
    height: 9,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17ef4723-3ebb-4f47-8b2d-c0d1c5404966.jfif-BrOaqMJpu6HoclCtIHKP0hJCRweCxN.jpeg",
    alt: "Julieta recostada en el cesped",
    // Horizontal aprox 16:9
    width: 16,
    height: 9,
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f0e98314-5ba6-4fdb-bcf7-b859059af156.jfif-PJeTmAycgod9s5b3xFKzskl9EdDB1Z.jpeg",
    alt: "Julieta sentada en escaleras del parque",
    // Horizontal aprox 16:9
    width: 16,
    height: 9,
  },
]

export default function GallerySection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10">

        <div className="text-center mb-14">
          <h2 className="heading-display mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            La protagonista de esta historia
          </h2>
          <div className="gold-line my-5" />
          <p className="body-text italic" style={{ fontSize: "1.05rem", color: "#4a7a4a" }}>
            Detalles, sueños y emociones que forman parte de mis 15 años.
          </p>

          <div className="mt-6 flex justify-center" style={{ color: "#b8962e", opacity: 0.7 }}>
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
          </div>
        </div>

        {/* Polaroid grid — cada foto mantiene su ratio original */}
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
          {PHOTOS.map((photo, i) => {
            const isPortrait = photo.height > photo.width
            const rotate = ["-2deg", "1.5deg", "-1.5deg", "2deg"][i]
            return (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className="polaroid cursor-pointer focus:outline-none w-full"
                style={{ transform: `rotate(${rotate})` }}
                aria-label={`Ver foto ${i + 1}`}
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                </div>
                {/* Caption area below foto (estilo polaroid) */}
                <div className="h-8" />
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {activeIdx !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: "rgba(255,255,255,0.97)" }}
          onClick={() => setActiveIdx(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
        >
          <div
            className="relative w-full max-w-3xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-full"
              style={{ aspectRatio: `${PHOTOS[activeIdx].width} / ${PHOTOS[activeIdx].height}`, maxHeight: "80vh" }}
            >
              <Image
                src={PHOTOS[activeIdx].src}
                alt={PHOTOS[activeIdx].alt}
                fill
                className="object-contain rounded-lg"
                sizes="90vw"
              />
            </div>
            <button
              onClick={() => setActiveIdx(null)}
              className="absolute top-2 right-2 text-[#2d5a2d] text-xl rounded-full w-9 h-9 flex items-center justify-center"
              style={{ background: "rgba(255,255,255,0.9)", border: "1.5px solid #b8962e55" }}
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

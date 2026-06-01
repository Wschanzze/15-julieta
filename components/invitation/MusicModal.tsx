"use client"

import { useState, useRef } from "react"

const YOUTUBE_VIDEO_ID = "dvgZkm1xWPE"

interface MusicModalProps {
  onClose: (withMusic: boolean) => void
}

function MusicModal({ onClose }: MusicModalProps) {
  return (
    <div className="music-modal-overlay" role="dialog" aria-modal="true" aria-label="Bienvenida">
      <div className="music-modal-box">
        {/* Leaf corner decorations */}
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo02_c-3EiTan9ZCsZJZsAYp2lXd8OopYcOkh.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-28 h-28 object-contain opacity-25 pointer-events-none"
          style={{ transform: "scaleX(-1)" }}
        />
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo02_b-4bqiU83MCRvhcyC6c4OLFtI92JhNjo.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-24 h-24 object-contain opacity-20 pointer-events-none"
        />

        <div className="gold-line mb-6" />

        <p className="label-text mb-3">Bienvenidos a la invitación de</p>

        <h2
          className="gold-shimmer font-bold mb-2"
          style={{ fontSize: "clamp(2.5rem, 8vw, 3.5rem)" }}
        >
          Julieta
        </h2>
        <p
          className="heading-serif mb-6"
          style={{ fontSize: "1.1rem", letterSpacing: "0.22em", color: "#2d5a2d" }}
        >
          Mis XV años
        </p>

        <div className="gold-line mb-6" />

        <p className="body-text italic mb-8" style={{ fontSize: "0.9rem", color: "#4a7a4a" }}>
          La música de fondo es parte de la experiencia
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => onClose(true)}
            className="btn-gold w-full"
            style={{ fontSize: "1rem", padding: "0.75rem 1rem" }}
          >
            Ingresar con música
          </button>
          <button
            onClick={() => onClose(false)}
            className="btn-gold w-full"
            style={{ fontSize: "1rem", padding: "0.75rem 1rem", opacity: 0.55 }}
          >
            Ingresar sin música
          </button>
        </div>
      </div>
    </div>
  )
}

export default function MusicController() {
  const [showModal, setShowModal] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [iframeSrc, setIframeSrc] = useState("")
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const buildSrc = (autoplay: boolean) =>
    `https://www.youtube-nocookie.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=${autoplay ? 1 : 0}&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&mute=0&enablejsapi=0&rel=0`

  const handleModalClose = (withMusic: boolean) => {
    setShowModal(false)
    if (withMusic) {
      setIframeSrc(buildSrc(true))
      setIsPlaying(true)
    }
  }

  const toggleMusic = () => {
    if (!iframeSrc) {
      setIframeSrc(buildSrc(true))
      setIsPlaying(true)
      return
    }
    if (isPlaying) {
      setIframeSrc(buildSrc(false))
      setIsPlaying(false)
    } else {
      setIframeSrc(buildSrc(true))
      setIsPlaying(true)
    }
  }

  return (
    <>
      {iframeSrc && (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          allow="autoplay; encrypted-media"
          className="fixed -top-full -left-full w-1 h-1 opacity-0 pointer-events-none"
          aria-hidden="true"
          title="Música de fondo"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        />
      )}

      {showModal && <MusicModal onClose={handleModalClose} />}

      {!showModal && (
        <button
          onClick={toggleMusic}
          className="music-btn"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      )}
    </>
  )
}

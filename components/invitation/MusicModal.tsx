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
        <div className="gold-line mb-6" />

        <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3 font-light">
          Bienvenidos a la invitación de
        </p>

        <h2 className="text-4xl font-light gold-shimmer mb-2">Julieta</h2>
        <p className="text-base tracking-[0.2em] font-light text-foreground/80 mb-6">
          Mis XV años
        </p>

        <div className="gold-line mb-6" />

        <p className="text-xs text-muted-foreground mb-8 font-light italic">
          La música de fondo es parte de la experiencia
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => onClose(true)}
            className="btn-gold py-3 text-base w-full"
          >
            Ingresar con música
          </button>
          <button
            onClick={() => onClose(false)}
            className="btn-gold py-3 text-base w-full opacity-60"
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
      // First time enabling music after choosing "sin música"
      setIframeSrc(buildSrc(true))
      setIsPlaying(true)
      return
    }
    if (isPlaying) {
      // Pause: replace src with autoplay=0 to stop audio
      setIframeSrc(buildSrc(false))
      setIsPlaying(false)
    } else {
      // Resume: reload with autoplay=1
      setIframeSrc(buildSrc(true))
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* Hidden YouTube embed iframe - rendered only when music is active */}
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

      {/* Welcome modal */}
      {showModal && <MusicModal onClose={handleModalClose} />}

      {/* Floating music button */}
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

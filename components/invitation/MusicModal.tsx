"use client"

import { useState, useRef, useEffect } from "react"

// YouTube IFrame API type
declare global {
  interface Window {
    YT: {
      Player: new (
        elementId: string,
        config: {
          videoId: string
          playerVars?: Record<string, number | string>
          events?: {
            onReady?: (event: { target: { playVideo: () => void; pauseVideo: () => void } }) => void
          }
        }
      ) => {
        playVideo: () => void
        pauseVideo: () => void
        destroy: () => void
      }
      PlayerState: { PLAYING: number }
    }
    onYouTubeIframeAPIReady: () => void
  }
}

// Placeholder: user will update with actual YouTube video ID
const YOUTUBE_VIDEO_ID = "3AtDnEC4zak" // Placeholder romantic song

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
  const playerRef = useRef<{ playVideo: () => void; pauseVideo: () => void; destroy: () => void } | null>(null)
  const apiLoadedRef = useRef(false)

  const loadYouTubeAPI = () => {
    if (apiLoadedRef.current) return
    apiLoadedRef.current = true

    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: { autoplay: 1, loop: 1, playlist: YOUTUBE_VIDEO_ID, controls: 0 },
        events: {
          onReady: (e) => {
            e.target.playVideo()
            setIsPlaying(true)
          },
        },
      })
    }
  }

  const handleModalClose = (withMusic: boolean) => {
    setShowModal(false)
    if (withMusic) {
      loadYouTubeAPI()
    }
  }

  const toggleMusic = () => {
    if (!apiLoadedRef.current) {
      loadYouTubeAPI()
      return
    }
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
      setIsPlaying(false)
    } else {
      playerRef.current.playVideo()
      setIsPlaying(true)
    }
  }

  return (
    <>
      {/* Hidden YouTube player */}
      <div id="yt-player" className="fixed -top-full -left-full w-1 h-1 opacity-0 pointer-events-none" aria-hidden="true" />

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

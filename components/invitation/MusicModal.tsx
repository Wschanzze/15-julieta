"use client"

import { useState, useRef, useEffect } from "react"

// URL de la música de fondo (puedes cambiarla por tu archivo MP3)
const MUSIC_URL = "https://www.youtube.com/watch?v=dvgZkm1xWPE" // Temporal - necesitarás reemplazar con URL de audio directo

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

        <div className="flex flex-col gap-3 mb-8">
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

        <p className="body-text italic" style={{ fontSize: "0.9rem", color: "#4a7a4a" }}>
          La música de fondo es parte de la experiencia
        </p>
      </div>
    </div>
  )
}

export default function MusicController() {
  const [showModal, setShowModal] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [shouldPlay, setShouldPlay] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Crear el elemento de audio solo en el cliente
    if (typeof window !== 'undefined' && !audioRef.current) {
      audioRef.current = new Audio()
      audioRef.current.loop = true
      audioRef.current.volume = 0.5
      audioRef.current.preload = 'auto'
      
      // URL del audio - REEMPLAZAR CON TU ARCHIVO MP3
      audioRef.current.src = "https://cdn.pixabay.com/download/audio/2022/03/15/audio_d1718ab41b.mp3"
      
      // Eventos para mejor compatibilidad móvil
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio cargado y listo')
      })
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('Error al cargar audio:', e)
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
        audioRef.current = null
      }
    }
  }, [])

  const handleModalClose = (withMusic: boolean) => {
    setShowModal(false)
    if (withMusic && audioRef.current) {
      setShouldPlay(true)
      
      // Intentar cargar y reproducir
      const playAudio = () => {
        if (!audioRef.current) return
        
        audioRef.current.load() // Importante para móviles
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true)
            console.log('Música reproduciendo correctamente')
          })
          .catch(err => {
            console.log('Error al reproducir:', err)
            // Intentar nuevamente después de interacción del usuario
            setIsPlaying(false)
          })
      }
      
      // Ejecutar inmediatamente
      playAudio()
      
      // Añadir listener para interacción táctil en móviles
      const handleFirstInteraction = () => {
        if (audioRef.current && !isPlaying) {
          playAudio()
        }
        document.removeEventListener('touchstart', handleFirstInteraction)
        document.removeEventListener('click', handleFirstInteraction)
      }
      
      document.addEventListener('touchstart', handleFirstInteraction, { once: true })
      document.addEventListener('click', handleFirstInteraction, { once: true })
    }
  }

  const toggleMusic = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log('Error al reproducir:', err))
    }
  }

  return (
    <>
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

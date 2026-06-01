'use client'

import { useEffect, useRef } from 'react'

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const particleCount = 30

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      
      // Random animation delay and duration
      particle.style.animationDelay = `${Math.random() * 8}s`
      particle.style.animationDuration = `${8 + Math.random() * 4}s`
      
      // Random size
      const size = 2 + Math.random() * 4
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      
      container.appendChild(particle)
    }

    return () => {
      container.innerHTML = ''
    }
  }, [])

  return <div ref={containerRef} className="particle-container" />
}

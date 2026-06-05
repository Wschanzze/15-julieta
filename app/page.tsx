"use client"

import { useState } from "react"
import BotanicalBackground from "@/components/invitation/BotanicalBackground"
import { ScrollPlant } from "@/components/invitation/BotanicalBackground"
import TopNav from "@/components/invitation/TopNav"
import MusicController from "@/components/invitation/MusicModal"
import HeroSection from "@/components/invitation/HeroSection"
import CountdownSection from "@/components/invitation/CountdownSection"
import GuestSection from "@/components/invitation/GuestSection"
import PartyDetailsSection from "@/components/invitation/PartyDetailsSection"
import GallerySection from "@/components/invitation/GallerySection"
import FiestaSection from "@/components/invitation/FiestaSection"
import GiftsSection from "@/components/invitation/GiftsSection"
import FooterSection from "@/components/invitation/FooterSection"
import FloatingParticles from "@/components/invitation/FloatingParticles"

// Plant image URLs (Flores locales)
const P1 = "/Flores/Grupo02_c.png"
const P2 = "/Flores/Grupo01_c.png"
const P3 = "/Flores/Grupo02_b.png"
const P4 = "/Flores/Grupo01_b.png"
const P5 = "/Flores/Grupo02_a.png"
const P6 = "/Flores/Grupo03.png"
const P7 = "/Flores/Grupo02_c.png"
const P8 = "/Flores/Grupo02_b.png"

export default function InvitationPage() {
  const [suggestedSong, setSuggestedSong] = useState("")
  const [dietaryRestriction, setDietaryRestriction] = useState("")

  return (
    <main className="relative min-h-screen bg-[#fafafa] overflow-x-hidden">
      {/* Fixed white background */}
      <BotanicalBackground />

      {/* Floating particles premium effect */}
      <FloatingParticles />

      {/* Fixed UI elements */}
      <TopNav />
      <MusicController />

      {/* Invitation content */}
      <div className="relative z-10">

        {/* ── HERO ─────────────────────────────────────────────── */}
        <div className="relative">
          {/* Top-left plant - adaptativo a todas las pantallas */}
          <ScrollPlant src={P1} position="top-left" width={180} height={200} />
          {/* Top-right plant - adaptativo a todas las pantallas */}
          <ScrollPlant src={P2} position="top-right" width={200} height={190} />
          <HeroSection />
        </div>

        {/* ── COUNTDOWN ────────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P3} position="top-left" width={150} height={150} />
          <ScrollPlant src={P6} position="top-right" width={160} height={160} />
          <CountdownSection />
        </div>

        {/* ── GUEST MESSAGE ─────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P4} position="top-right" width={170} height={160} />
          <GuestSection />
        </div>

        {/* ── PARTY DETAILS ─────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P5} position="top-left" width={160} height={160} />
          <PartyDetailsSection />
        </div>

        {/* ── GALLERY ──────────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P7} position="top-left" width={180} height={170} />
          <ScrollPlant src={P1} position="bottom-right" width={160} height={150} />
          <GallerySection />
        </div>

        {/* ── FIESTA CARDS ─────────────────────────────────────── */}
        <div className="relative" id="fiesta">
          <ScrollPlant src={P8} position="top-right" width={170} height={150} />
          <FiestaSection 
            onSuggestSong={setSuggestedSong} 
            onSetDietaryRestriction={setDietaryRestriction} 
          />
        </div>

        {/* ── GIFTS ────────────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P3} position="top-right" width={150} height={150} />
          <GiftsSection 
            suggestedSong={suggestedSong} 
            dietaryRestriction={dietaryRestriction} 
          />
        </div>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <FooterSection />
      </div>
    </main>
  )
}

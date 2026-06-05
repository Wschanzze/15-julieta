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

// Plant image URLs
const P1 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo02_c-3EiTan9ZCsZJZsAYp2lXd8OopYcOkh.png"
const P2 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo01_c-Y9noh9pBBOxGvYxqRKSQupQRtwNhJQ.png"
const P3 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo01_a-I01qVd94xKuPee9GLiy6wCkgD27VU8.png"
const P4 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo01_b-OZipqt0hhFLK7aDXflBJX5nVhpR8l4.png"
const P5 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo02_a-3Q0Lh62lJ7fFCaiw5j2DxCPo9y7YqO.png"
const P6 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo03-vV8ZmLn8SJugR4qkyFXat32JLIll9m.png"
const P7 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo04-yeHHU1ZvFscmQ2KzRrl96BzREsbVis.png"
const P8 = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Grupo02_b-4bqiU83MCRvhcyC6c4OLFtI92JhNjo.png"

export default function InvitationPage() {
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
          <GallerySection />
        </div>

        {/* ── FIESTA CARDS ─────────────────────────────────────── */}
        <div className="relative" id="fiesta">
          <ScrollPlant src={P8} position="top-right" width={170} height={150} />
          <FiestaSection />
        </div>

        {/* ── GIFTS ────────────────────────────────────────────── */}
        <div className="relative">
          <ScrollPlant src={P3} position="top-right" width={150} height={150} />
          <GiftsSection />
        </div>

        {/* ── FOOTER ───────────────────────────────────────────── */}
        <FooterSection />
      </div>
    </main>
  )
}

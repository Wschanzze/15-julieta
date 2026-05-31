import BotanicalBackground from "@/components/invitation/BotanicalBackground"
import TopNav from "@/components/invitation/TopNav"
import MusicController from "@/components/invitation/MusicModal"
import HeroSection from "@/components/invitation/HeroSection"
import CountdownSection from "@/components/invitation/CountdownSection"
import GuestSection from "@/components/invitation/GuestSection"
import PartyDetailsSection from "@/components/invitation/PartyDetailsSection"
import ConfirmationSection from "@/components/invitation/ConfirmationSection"
import GallerySection from "@/components/invitation/GallerySection"
import FiestaSection from "@/components/invitation/FiestaSection"
import GiftsSection from "@/components/invitation/GiftsSection"
import FooterSection from "@/components/invitation/FooterSection"

export default function InvitationPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Botanical background */}
      <BotanicalBackground />

      {/* Fixed elements */}
      <TopNav />
      <MusicController />

      {/* Invitation content */}
      <div className="relative z-10">
        {/* 1. Hero / portada */}
        <HeroSection />

        {/* 2. Countdown */}
        <CountdownSection />

        {/* 3. Guests */}
        <GuestSection />

        {/* 4. Party details card */}
        <PartyDetailsSection />

        {/* 5. Attendance confirmation */}
        <section id="confirmacion">
          <ConfirmationSection />
        </section>

        {/* 6. Gallery */}
        <GallerySection />

        {/* 7. Fiesta info cards */}
        <section id="fiesta">
          <FiestaSection />
        </section>

        {/* 8. Gifts */}
        <GiftsSection />

        {/* 9. Footer */}
        <FooterSection />
      </div>
    </main>
  )
}

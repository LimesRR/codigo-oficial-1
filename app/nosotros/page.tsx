"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { AboutHero } from "@/components/about-hero"
import { MissionVision } from "@/components/mission-vision"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function NosotrosPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <AboutHero />
          <MissionVision />
          <StatsSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

// ============================================================================
// HOME PAGE (Inicio) - Main landing page of the Alarmax website
// ============================================================================
// This is the first page visitors see when they come to alarmax.com
// It showcases services, company stats, reasons to choose Alarmax, and a CTA
// ============================================================================

"use client" // This tells Next.js this component runs in the browser (needed for interactive features)

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { StatsSection } from "@/components/stats-section"
import { WhyUsSection } from "@/components/why-us-section"
import { CtaBanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    // LanguageProvider: Manages language switching (Spanish/English) for the entire page
    <LanguageProvider>
      <div className="min-h-screen">
        {/* Header: Navigation bar with logo, menu links, and language toggle */}
        <Header />

        <main>
          {/* HeroSection: Large banner with main message "Protegemos lo que más importa" */}
          <HeroSection />

          {/* ServicesPreview: Grid showing the 8 main services (CCTV, Alarms, etc.) */}
          <ServicesPreview />

          {/* StatsSection: Shows impressive numbers (40+ years, 1500+ clients, etc.) */}
          <StatsSection />

          {/* WhyUsSection: Explains reasons to choose Alarmax (experience, technology, etc.) */}
          <WhyUsSection />

          {/* CtaBanner: Call-to-action button encouraging visitors to contact Alarmax */}
          <CtaBanner />
        </main>

        {/* Footer: Bottom section with links, contact info, and copyright */}
        <Footer />
      </div>
    </LanguageProvider>
  )
}

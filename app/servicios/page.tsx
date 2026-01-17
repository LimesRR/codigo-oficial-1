"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { ServicesCta } from "@/components/services-cta"
import { Footer } from "@/components/footer"

export default function ServiciosPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <ServicesHero />
          <ServicesGrid />
          <ServicesCta />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

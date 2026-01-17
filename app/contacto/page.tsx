"use client"

import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { ContactHero } from "@/components/contact-hero"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactoPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <ContactHero />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

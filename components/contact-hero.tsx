"use client"

import { useLanguage } from "@/components/language-provider"
import { MessageSquare } from "lucide-react"

export function ContactHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/4.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 md:from-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
            <MessageSquare className="w-8 h-8 md:w-10 md:h-10 text-primary" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-balance">
            {t.contact.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-pretty">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

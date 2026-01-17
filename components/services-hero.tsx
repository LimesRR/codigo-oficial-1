"use client"

import { useLanguage } from "@/components/language-provider"
import { Shield, Settings } from "lucide-react"

export function ServicesHero() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 md:from-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/20 border border-primary/40 mb-4 md:mb-6 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-primary">{t.hero.tagline}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 text-balance">
              {t.services.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto lg:mx-0 text-pretty">
              {t.services.subtitle}
            </p>
          </div>

          <div className="hidden lg:flex w-32 h-32 xl:w-40 xl:h-40 flex-shrink-0 rounded-2xl bg-primary/20 items-center justify-center">
            <Settings className="w-16 h-16 xl:w-20 xl:h-20 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

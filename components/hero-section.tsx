"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Shield, ArrowRight, Play, Award } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out scale-110"
        style={{
          transform: isMobile
            ? "scale(1.1)"
            : `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50 md:from-black/80 md:via-black/60 md:to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 md:from-black/80" />

      {/* Animated Grid Pattern - Hidden on mobile for performance */}
      <div className="absolute inset-0 opacity-10 hidden md:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(59, 93, 231, 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 93, 231, 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center">
          {/* Badges */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/20 border border-primary/40 opacity-0 animate-fade-up backdrop-blur-sm">
              <Award className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-semibold text-primary">{t.hero.badge}</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-white/10 border border-white/20 opacity-0 animate-fade-up animation-delay-100 backdrop-blur-sm">
              <Shield className="h-3.5 w-3.5 md:h-4 md:w-4 text-white" />
              <span className="text-xs md:text-sm font-medium text-white/90">{t.hero.tagline}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 opacity-0 animate-fade-up animation-delay-200 text-balance leading-tight max-w-5xl">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-white/70 mb-8 md:mb-10 max-w-2xl opacity-0 animate-fade-up animation-delay-300 text-pretty leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 opacity-0 animate-fade-up animation-delay-400">
            <Button
              size="lg"
              asChild
              className="group w-full sm:w-auto min-w-[180px] md:min-w-[200px] h-12 md:h-14 text-sm md:text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
            >
              <Link href="/contacto">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full sm:w-auto min-w-[180px] md:min-w-[200px] h-12 md:h-14 text-sm md:text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 backdrop-blur-sm transition-all duration-300"
            >
              <Link href="/servicios">
                <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                {t.hero.secondary}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up animation-delay-600 hidden sm:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 md:w-1.5 md:h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse hidden md:block" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-200 hidden md:block" />
    </section>
  )
}

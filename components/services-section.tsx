"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Video, Fingerprint, Flame, Bell, Radio, Network, Zap, Settings, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const serviceIcons = {
  cctv: Video,
  access: Fingerprint,
  fire: Flame,
  alarms: Bell,
  monitoring: Radio,
  networks: Network,
  fences: Zap,
  automation: Settings,
}

const serviceKeys = ["cctv", "access", "fire", "alarms", "monitoring", "networks", "fences", "automation"] as const

export function ServicesSection() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key]
            const service = t.services[key]
            const isHovered = hoveredIndex === index

            return (
              <button
                key={key}
                onClick={scrollToContact}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "group relative p-6 lg:p-8 rounded-2xl border border-border text-left transition-all duration-300",
                  "hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5",
                  isHovered ? "bg-primary text-primary-foreground" : "bg-card",
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
                    isHovered ? "bg-primary-foreground/20" : "bg-primary/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      isHovered ? "text-primary-foreground" : "text-primary",
                    )}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed transition-colors duration-300",
                    isHovered ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div
                  className={cn(
                    "absolute bottom-6 right-6 transition-all duration-300",
                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
                  )}
                >
                  <ArrowRight className="h-5 w-5" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

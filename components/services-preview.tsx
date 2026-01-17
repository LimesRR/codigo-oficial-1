"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Video, Fingerprint, Flame, Bell, Radio, Network, ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const serviceIcons = {
  cctv: Video,
  access: Fingerprint,
  fire: Flame,
  alarms: Bell,
  monitoring: Radio,
  networks: Network,
}

const serviceKeys = ["cctv", "access", "fire", "alarms", "monitoring", "networks"] as const

export function ServicesPreview() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 md:mb-16 gap-4 md:gap-6">
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 block">
              {t.services.title}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.services.subtitle}
            </h2>
          </div>
          <Button variant="outline" asChild className="self-center lg:self-auto group bg-transparent">
            <Link href="/servicios">
              {t.services.viewAll}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key]
            const service = t.services[key]
            const isHovered = hoveredIndex === index

            return (
              <Link
                key={key}
                href="/servicios"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "group relative p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border transition-all duration-500",
                  "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 active:scale-[0.98]",
                  isHovered ? "bg-primary border-primary text-white" : "bg-card border-border hover:border-primary/30",
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-all duration-500",
                    isHovered ? "bg-white/20" : "bg-primary/10",
                  )}
                >
                  <Icon
                    className={cn(
                      "h-6 w-6 md:h-7 md:w-7 transition-all duration-500",
                      isHovered ? "text-white" : "text-primary",
                    )}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                <p
                  className={cn(
                    "text-sm leading-relaxed transition-colors duration-500 line-clamp-3",
                    isHovered ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {service.description}
                </p>

                {/* Arrow */}
                <div
                  className={cn(
                    "absolute top-4 right-4 md:top-6 md:right-6 transition-all duration-500",
                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2",
                  )}
                >
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

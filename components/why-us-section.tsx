"use client"

import { useLanguage } from "@/components/language-provider"
import { Award, Cpu, HeadphonesIcon, Users, Shield } from "lucide-react"

const reasons = [
  { key: "experience", icon: Award },
  { key: "technology", icon: Cpu },
  { key: "support", icon: HeadphonesIcon },
  { key: "team", icon: Users },
]

export function WhyUsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mb-10 md:mb-16">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <div className="text-center lg:text-left">
            <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider mb-2 md:mb-3 block">
              {t.whyUs.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{t.whyUs.title}</h2>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const title = t.whyUs[reason.key as keyof typeof t.whyUs]
            const text = t.whyUs[`${reason.key}Text` as keyof typeof t.whyUs]

            return (
              <div
                key={reason.key}
                className="group relative p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 active:scale-[0.98]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Number */}
                <span className="absolute top-4 right-4 md:top-6 md:right-6 text-5xl md:text-6xl lg:text-7xl font-bold text-muted/50 group-hover:text-primary/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  <Icon className="h-6 w-6 md:h-7 md:w-7 text-primary group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 md:mb-3 relative z-10">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10">{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

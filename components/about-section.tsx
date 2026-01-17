"use client"

import { useLanguage } from "@/components/language-provider"
import { Target, Eye, CheckCircle } from "lucide-react"

export function AboutSection() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.about.title}</h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Mission */}
          <div className="relative p-8 lg:p-10 rounded-2xl bg-background border border-border group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{t.about.mission}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.missionText}</p>
          </div>

          {/* Vision */}
          <div className="relative p-8 lg:p-10 rounded-2xl bg-background border border-border group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{t.about.vision}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { es: "Tecnología de vanguardia", en: "Cutting-edge technology" },
            { es: "Personal altamente capacitado", en: "Highly trained staff" },
            { es: "Atención personalizada", en: "Personalized attention" },
            { es: "Soluciones integrales", en: "Comprehensive solutions" },
            { es: "Monitoreo 24/7", en: "24/7 monitoring" },
            { es: "Garantía de servicio", en: "Service guarantee" },
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground">{benefit[language]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

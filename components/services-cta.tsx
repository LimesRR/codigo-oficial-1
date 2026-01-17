"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { LottieCamera } from "@/components/lottie-camera"

export function ServicesCta() {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-4 md:mb-6 rounded-xl bg-primary/10 flex items-center justify-center p-3 md:p-4">
          <LottieCamera className="w-full h-full" />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">{t.cta.title}</h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
        <Button size="lg" asChild className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group">
          <Link href="/contacto">
            {t.cta.button}
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

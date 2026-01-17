"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield } from "lucide-react"

export function CtaBanner() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-primary" />

      {/* Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="hidden lg:flex w-32 h-32 xl:w-40 xl:h-40 flex-shrink-0 rounded-2xl bg-white/10 items-center justify-center">
            <Shield className="w-16 h-16 xl:w-20 xl:h-20 text-white" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-balance">
              {t.cta.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
              {t.cta.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/20 h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group"
              >
                <Link href="/contacto">
                  {t.cta.button}
                  <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="w-full sm:w-auto bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 md:h-14 px-6 md:px-8 text-sm md:text-base"
              >
                <a href="tel:669 985 0038">
                  <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  669 985 0038
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Target, Eye, Heart, Lightbulb, Handshake, Sparkles } from "lucide-react"

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]"
const DURATION = "duration-700"

export function MissionVision() {
  const { t } = useLanguage()

  const values = [
    { key: "commitment", icon: Heart },
    { key: "innovation", icon: Lightbulb },
    { key: "trust", icon: Handshake },
  ]

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20">

          {/* Mission */}
          <div
            className={`group relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl
            bg-white border border-border
            hover:bg-gradient-to-br hover:from-primary hover:to-primary/80
            transition-all ${DURATION} ${EASE} overflow-hidden`}
          >
            {/* Glow */}
            <div
              className={`absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64
              bg-primary/10 rounded-full blur-3xl
              -translate-y-1/2 translate-x-1/2
              opacity-0 group-hover:opacity-100
              transition-opacity ${DURATION} ${EASE}`}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl
                bg-primary/10 group-hover:bg-white/20
                flex items-center justify-center mb-4 md:mb-6
                transition-colors ${DURATION} ${EASE}`}
              >
                <Target
                  className={`h-6 w-6 md:h-8 md:w-8
                  text-primary group-hover:text-white
                  transition-colors ${DURATION} ${EASE}`}
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold
                text-foreground group-hover:text-white
                mb-3 md:mb-4 transition-colors ${DURATION} ${EASE}`}
              >
                {t.about.mission}
              </h3>

              {/* Text */}
              <p
                className={`text-muted-foreground group-hover:text-white/80
                leading-relaxed text-sm md:text-base lg:text-lg
                transition-colors ${DURATION} ${EASE}`}
              >
                {t.about.missionText}
              </p>
            </div>
          </div>

          {/* Vision — EXACT SAME BEHAVIOR */}
          <div
            className={`group relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl
            bg-white border border-border
            hover:bg-gradient-to-br hover:from-primary hover:to-primary/80
            transition-all ${DURATION} ${EASE} overflow-hidden`}
          >
            {/* Glow */}
            <div
              className={`absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64
              bg-primary/10 rounded-full blur-3xl
              -translate-y-1/2 translate-x-1/2
              opacity-0 group-hover:opacity-100
              transition-opacity ${DURATION} ${EASE}`}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl
                bg-primary/10 group-hover:bg-white/20
                flex items-center justify-center mb-4 md:mb-6
                transition-colors ${DURATION} ${EASE}`}
              >
                <Eye
                  className={`h-6 w-6 md:h-8 md:w-8
                  text-primary group-hover:text-white
                  transition-colors ${DURATION} ${EASE}`}
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-bold
                text-foreground group-hover:text-white
                mb-3 md:mb-4 transition-colors ${DURATION} ${EASE}`}
              >
                {t.about.vision}
              </h3>

              {/* Text */}
              <p
                className={`text-muted-foreground group-hover:text-white/80
                leading-relaxed text-sm md:text-base lg:text-lg
                transition-colors ${DURATION} ${EASE}`}
              >
                {t.about.visionText}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="flex flex-col items-center mb-6 md:mb-8">
            <div className="w-14 h-14 md:w-16 md:h-16 mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center">
              {t.about.values}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
            {values.map((value) => {
              const Icon = value.icon
              const title = t.about[value.key as keyof typeof t.about]
              const text = t.about[`${value.key}Text` as keyof typeof t.about]

              return (
                <div
                  key={value.key}
                  className={`group text-center p-5 md:p-6 lg:p-8
                  rounded-xl md:rounded-2xl
                  bg-white border border-border
                  hover:bg-primary hover:shadow-xl hover:shadow-primary/20
                  transition-all ${DURATION} ${EASE}
                  hover:-translate-y-1 active:scale-[0.98]`}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl
                    bg-primary/10 group-hover:bg-white/20
                    flex items-center justify-center mx-auto mb-3 md:mb-5
                    transition-all ${DURATION} ${EASE}`}
                  >
                    <Icon
                      className={`h-6 w-6 md:h-8 md:w-8
                      text-primary group-hover:text-white
                      transition-colors ${DURATION} ${EASE}`}
                    />
                  </div>

                  <h4
                    className={`text-base md:text-lg font-bold
                    text-foreground group-hover:text-white
                    mb-1 md:mb-2 transition-colors ${DURATION} ${EASE}`}
                  >
                    {title}
                  </h4>

                  <p
                    className={`text-xs md:text-sm
                    text-muted-foreground group-hover:text-white/80
                    transition-colors ${DURATION} ${EASE}`}
                  >
                    {text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}


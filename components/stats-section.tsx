"use client"

import { useLanguage } from "@/components/language-provider"
import { useEffect, useState, useRef } from "react"

const statsData = [
  { key: "years", value: 40, suffix: "+" },
  { key: "clients", value: 1500, suffix: "+" },
  { key: "projects", value: 5000, suffix: "+" },
  { key: "support", value: 24, suffix: "/7" },
]

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tabular-nums"
    >
      {count.toLocaleString()}
      <span className="text-primary">{suffix}</span>
    </div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-foreground relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/95 to-foreground" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-6 md:gap-8 lg:grid-cols-4 lg:gap-12">
          {statsData.map((stat, index) => (
            <div key={stat.key} className="text-center group" style={{ animationDelay: `${index * 100}ms` }}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 md:mt-3 text-xs sm:text-sm md:text-base font-medium text-white/60 uppercase tracking-wider">
                {t.stats[stat.key as keyof typeof t.stats]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

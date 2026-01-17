"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Video, Fingerprint, Flame, Bell, Radio, Network, Zap, Settings, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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

const serviceKeys = ["monitoring", "alarms", "cctv", "fire", "access", "networks", "fences", "automation"] as const

export function ServicesGrid() {
  const { t } = useLanguage()
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section className="py-12 md:py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-3 md:gap-4 lg:gap-6">
          {serviceKeys.map((key, index) => {
            const Icon = serviceIcons[key]
            const service = t.services[key]
            const isExpanded = expandedIndex === index

            return (
              <div
                key={key}
                className={cn(
                  "group relative rounded-xl md:rounded-2xl border transition-all duration-500 overflow-hidden cursor-pointer",
                  isExpanded ? "bg-primary border-primary" : "bg-card border-border hover:border-primary/30",
                )}
                onClick={() => setExpandedIndex(isExpanded ? null : index)}
              >
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div
                      className={cn(
                        "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-500",
                        isExpanded ? "bg-white/20" : "bg-primary/10",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-6 w-6 md:h-8 md:w-8 transition-all duration-500",
                          isExpanded ? "text-white" : "text-primary",
                        )}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className={cn(
                            "text-lg md:text-xl lg:text-2xl font-bold transition-colors duration-500",
                            isExpanded ? "text-white" : "text-foreground",
                          )}
                        >
                          {service.title}
                        </h3>
                        <div
                          className={cn(
                            "w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-2",
                            isExpanded ? "bg-white/20 rotate-45" : "bg-muted",
                          )}
                        >
                          <ArrowRight
                            className={cn(
                              "h-3 w-3 md:h-4 md:w-4 transition-colors duration-500",
                              isExpanded ? "text-white" : "text-muted-foreground",
                            )}
                          />
                        </div>
                      </div>
                      <p
                        className={cn(
                          "text-sm md:text-base leading-relaxed transition-colors duration-500",
                          isExpanded ? "text-white/80" : "text-muted-foreground",
                        )}
                      >
                        {service.description}
                      </p>

                      {/* Features - Expandable */}
                      <div
                        className={cn(
                          "grid transition-all duration-500 overflow-hidden",
                          isExpanded ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6" : "grid-rows-[0fr] opacity-0",
                        )}
                      >
                        <div className="overflow-hidden">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                            {service.features?.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2 md:gap-3">
                                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                  <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
                                </div>
                                <span className="text-xs md:text-sm text-white/90">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 md:mt-6">
                            <Button
                              asChild
                              className="bg-white text-primary hover:bg-white/90 h-10 md:h-auto text-sm"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Link href="/contacto">
                                {t.hero.cta}
                                <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

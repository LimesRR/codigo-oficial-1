"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, CheckCircle, Send } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 text-balance">
              {t.contact.title}
            </h2>
            <p className="text-lg text-background/70 mb-10">{t.contact.subtitle}</p>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {/* Office */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background/5 border border-background/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">{t.contact.office}</h4>
                  <a href="tel:6699850038" className="text-background/70 hover:text-primary transition-colors">
                    6699850038
                  </a>
                </div>
              </div>

              {/* Riviera Maya */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background/5 border border-background/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">{t.contact.riviera}</h4>
                  <a href="tel:9841575319" className="text-background/70 hover:text-primary transition-colors">
                    984 157 5319
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 rounded-xl bg-background/5 border border-background/10">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-background mb-1">{t.contact.hours}</h4>
                  <p className="text-background/70 text-sm">{t.contact.hoursWeek}</p>
                  <p className="text-background/70 text-sm">{t.contact.hoursSat}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="p-8 lg:p-10 rounded-2xl bg-background">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">{t.contact.success}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.name}
                    </label>
                    <Input id="name" name="name" required placeholder="Juan García" className="h-12" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@ejemplo.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.phone}
                    </label>
                    <Input id="phone" name="phone" type="tel" required placeholder="984 123 4567" className="h-12" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="¿En qué podemos ayudarte?"
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12" disabled={isLoading}>
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        {t.contact.submit}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

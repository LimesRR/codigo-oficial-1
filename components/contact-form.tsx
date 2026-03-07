"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, CheckCircle, Send, AlertCircle, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { submitContactForm } from "@/lib/firebase"

const services = [
  { key: "cctv", es: "CCTV", en: "CCTV" },
  { key: "access", es: "Control de Acceso", en: "Access Control" },
  { key: "fire", es: "Contra Incendio", en: "Fire Systems" },
  { key: "alarms", es: "Alarmas", en: "Alarms" },
  { key: "monitoring", es: "Monitoreo", en: "Monitoring" },
  { key: "networks", es: "Redes", en: "Networks" },
  { key: "fences", es: "Cercas", en: "Fences" },
  { key: "automation", es: "Automatización", en: "Automation" },
]

export function ContactForm() {
  const { t, language } = useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const phone = formData.get("phone") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    try {
      console.log("[v0] Submitting form data to Firebase...")
      await submitContactForm({
        name,
        phone: phone || "",
        email: email || "",
        services: selectedServices,
        message: message || "",
        language,
      })
      console.log("[v0] Form submitted successfully!")
      setIsSubmitted(true)
    } catch (err) {
      console.error("[v0] Error submitting form:", err)
      setError(
        language === "es" ? "Error al enviar. Por favor intenta de nuevo." : "Error submitting. Please try again.",
      )
    } finally {
      setIsLoading(false)
    }
  }

  const toggleService = (serviceKey: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceKey) ? prev.filter((s) => s !== serviceKey) : [...prev, serviceKey],
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-7 h-7 md:w-8 md:h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">{t.contact.title}</h2>
              </div>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-8 md:mb-10">{t.contact.subtitle}</p>

            {/* Contact Info Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
              {/* Office */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{t.contact.office}</h4>
                  <a
                    href="tel:9850038"
                    className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg font-medium"
                  >
                    985 0038
                  </a>
                </div>
              </div>

              {/* Riviera Maya */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{t.contact.riviera}</h4>
                  <a
                    href="tel:+529841575319"
                    className="text-muted-foreground hover:text-primary transition-colors text-base md:text-lg font-medium"
                  >
                    984 157 5319
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-muted/50 border border-border hover:border-primary/30 transition-colors duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{t.contact.hours}</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">{t.contact.hoursWeek}</p>
                  <p className="text-muted-foreground text-xs md:text-sm">{t.contact.hoursSat}</p>
                </div>
              </div>

              {/* Emergency */}
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/30">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base mb-1">{t.contact.emergency}</h4>
                  <p className="text-primary font-bold text-base md:text-lg">
                    Un mantenimiento preventivo anual prolonga la vida útil del sistema hasta un 50%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="p-5 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-card border border-border shadow-xl shadow-black/5">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 md:py-16 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-4 md:mb-6">
                    <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-green-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{t.contact.success}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {language === "es" ? "Pronto nos pondremos en contacto contigo." : "We will contact you soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      {t.contact.name} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Juan García"
                      className="h-11 md:h-12 bg-background text-sm md:text-base"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        {t.contact.phone}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="984 123 4567"
                        className="h-11 md:h-12 bg-background text-sm md:text-base"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                      >
                        {t.contact.email}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        className="h-11 md:h-12 bg-background text-sm md:text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-medium text-foreground mb-2 md:mb-3">
                      {t.contact.service}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service.key}
                          type="button"
                          onClick={() => toggleService(service.key)}
                          className={cn(
                            "px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border",
                            selectedServices.includes(service.key)
                              ? "bg-primary text-white border-primary"
                              : "bg-background border-border hover:border-primary/50 text-foreground",
                          )}
                        >
                          {service[language]}
                        </button>
                      ))}
                    </div>
                    {selectedServices.length > 0 && (
                      <p className="text-xs text-muted-foreground mt-2">
                        {language === "es"
                          ? `${selectedServices.length} servicio(s) seleccionado(s)`
                          : `${selectedServices.length} service(s) selected`}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2"
                    >
                      {t.contact.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={language === "es" ? "¿En qué podemos ayudarte?" : "How can we help you?"}
                      rows={4}
                      className="resize-none bg-background text-sm md:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-12 md:h-14 text-sm md:text-base shadow-lg shadow-primary/25"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
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

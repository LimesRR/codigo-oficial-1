"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Shield, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { key: "home", href: "/" },
    { key: "services", href: "/servicios" },
    { key: "about", href: "/nosotros" },
    { key: "contact", href: "/contacto" },
  ]

  return (
    <footer className="bg-foreground pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-8 md:pb-12 border-b border-white/10">
          
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Image
              src="images/logo-2.0.jpeg"
              alt="Alarmax"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto mb-3 md:mb-4"
            />
            <div className="flex items-center gap-2 text-white/60">
              <Shield className="h-3.5 w-3.5 md:h-4 md:w-4" />
              <span className="text-xs md:text-sm">{t.footer.tagline}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {t.nav[link.key as keyof typeof t.nav]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
              {t.services.title}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              {["CCTV", "Control de Acceso", "Alarmas", "Monitoreo 24/7"].map((service) => (
                <li key={service}>
                  <Link
                    href="/servicios"
                    className="text-white/60 hover:text-primary transition-colors text-xs md:text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-white font-semibold text-sm md:text-base mb-3 md:mb-4">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-2 md:space-y-3">
              
              {/* Phone */}
              <li>
                <a
                  href="tel:+529841575319"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-xs md:text-sm"
                >
                  <Phone className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  669 985 0038
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@alarmax.com"
                  className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors text-xs md:text-sm"
                >
                  <Mail className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  info@alarmax.com
                </a>
              </li>

              {/* Location 1 */}
              <li className="flex items-start gap-2 text-white/60 text-xs md:text-sm">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 mt-0.5" />
                Mazatlán, Sin.
              </li>

              {/* Location 2 */}
              <li className="flex items-start gap-2 text-white/60 text-xs md:text-sm">
                <MapPin className="h-3.5 w-3.5 md:h-4 md:w-4 flex-shrink-0 mt-0.5" />
                Riviera Maya, Q. Roo
              </li>

            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 md:pt-8 text-center text-xs md:text-sm text-white/40">
          © {new Date().getFullYear()} Alarmax. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Globe, ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"
import { createPortal } from "react-dom"

const navItems = [
  { key: "home", href: "/" },
  { key: "services", href: "/servicios" },
  { key: "about", href: "/nosotros" },
  { key: "contact", href: "/contacto" },
]

function MobileMenu({
  isOpen,
  onClose,
  navItems,
  pathname,
  t,
  language,
  toggleLanguage,
}: {
  isOpen: boolean
  onClose: () => void
  navItems: typeof navItems
  pathname: string
  t: any
  language: string
  toggleLanguage: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!mounted) return null

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[9998] transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Menu Panel - completely independent with inline styles for guaranteed white bg */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-sm z-[9999] lg:hidden transition-transform duration-300 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-4 border-b" style={{ backgroundColor: "#ffffff" }}>
          <Image src="/images/logo-2.0.jpeg" alt="Alarmax" width={180} height={50} className="h-8 w-auto" />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto" style={{ backgroundColor: "#ffffff" }}>
          <nav className="flex-1 p-4">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={onClose}
                  className={cn(
                    "flex items-center justify-between py-4 px-4 rounded-xl font-medium text-lg transition-all duration-200 mb-2",
                    isActive ? "bg-primary/10 text-primary" : "text-gray-800 hover:bg-gray-100",
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    backgroundColor: isActive ? "rgba(59, 93, 231, 0.1)" : undefined,
                  }}
                >
                  <span>{t.nav[item.key as keyof typeof t.nav]}</span>
                  <ArrowRight
                    className={cn("h-5 w-5 transition-transform", isActive ? "text-primary" : "text-gray-400")}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Language Toggle */}
          <div className="p-4 border-t" style={{ backgroundColor: "#ffffff" }}>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-800">{language === "es" ? "English" : "Español"}</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="p-4" style={{ backgroundColor: "#ffffff" }}>
            <Button asChild className="w-full h-14 text-base shadow-lg">
              <Link href="/contacto" onClick={onClose}>
                {t.hero.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-border"
            : "bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105 duration-300">
              <Image
                src="/images/logo-2.0.jpeg"
                alt="Alarmax"
                width={180}
                height={50}
                className="h-7 md:h-8 lg:h-10 w-auto transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                      isActive
                        ? "text-primary bg-primary/10"
                        : cn(
                            "hover:text-primary",
                            !isScrolled
                              ? "text-white/90 hover:text-white hover:bg-white/10"
                              : "text-foreground/70 hover:bg-muted",
                          ),
                    )}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                )
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 lg:gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={cn(
                  "flex items-center gap-1 md:gap-1.5 px-2 md:px-3 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                  !isScrolled
                    ? "border border-white/30 text-white hover:bg-white/10"
                    : "border border-border hover:border-primary/50 hover:bg-muted",
                )}
              >
                <Globe
                  className={cn(
                    "h-3.5 w-3.5 md:h-4 md:w-4 transition-colors duration-300",
                    !isScrolled ? "text-white" : "text-foreground",
                  )}
                />
                <span>{language.toUpperCase()}</span>
                <ChevronDown
                  className={cn(
                    "h-2.5 w-2.5 md:h-3 md:w-3 transition-colors duration-300",
                    !isScrolled ? "text-white" : "text-foreground",
                  )}
                />
              </button>

              {/* CTA Button - Desktop */}
              <Button
                asChild
                className="hidden lg:flex shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow duration-300"
              >
                <Link href="/contacto">{t.hero.cta}</Link>
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "lg:hidden p-2 rounded-xl transition-all duration-300",
                  !isScrolled ? "text-white hover:bg-white/10" : "hover:bg-muted",
                )}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X
                    className={cn(
                      "h-5 w-5 md:h-6 md:w-6 transition-colors duration-300",
                      !isScrolled ? "text-white" : "text-foreground",
                    )}
                  />
                ) : (
                  <Menu
                    className={cn(
                      "h-5 w-5 md:h-6 md:w-6 transition-colors duration-300",
                      !isScrolled ? "text-white" : "text-foreground",
                    )}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        pathname={pathname}
        t={t}
        language={language}
        toggleLanguage={toggleLanguage}
      />
    </>
  )
}

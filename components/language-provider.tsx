// ============================================================================
// LANGUAGE PROVIDER - Manages Spanish/English switching across the website
// ============================================================================
// This component wraps around pages and provides language state and translations
// It remembers the user's language choice even when they navigate between pages
// ============================================================================

"use client" // Runs in browser to access localStorage and manage interactive state

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, translations } from "@/lib/i18n"

// Define the shape of the language context that components can access
type LanguageContextType = {
  language: Language // Current language: "es" or "en"
  setLanguage: (lang: Language) => void // Function to change language
  t: typeof translations.es // Translation object for current language
}

// Create React Context for sharing language state across all components
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// LanguageProvider component that wraps pages and provides language functionality
export function LanguageProvider({ children }: { children: ReactNode }) {
  // State to track current language (starts with Spanish)
  const [language, setLanguageState] = useState<Language>("es")

  // Track if component has mounted (prevents hydration errors)
  const [mounted, setMounted] = useState(false)

  // Run once when component first loads
  useEffect(() => {
    setMounted(true)

    // Try to load saved language preference from browser's localStorage
    const savedLanguage = localStorage.getItem("alarmax-language") as Language | null

    // If a valid language was saved before, use it
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Function to change language AND save it to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang) // Update React state
    localStorage.setItem("alarmax-language", lang) // Save to browser storage
  }

  // Get the translations object for the current language
  const t = translations[language]

  // Wait for component to mount before rendering to prevent React hydration errors
  // (Server-rendered HTML won't match client if localStorage is different)
  if (!mounted) {
    return null
  }

  // Provide language state and functions to all child components
  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

// Custom hook to access language context in any component
// Usage: const { language, setLanguage, t } = useLanguage()
export function useLanguage() {
  const context = useContext(LanguageContext)

  // Throw error if someone tries to use this hook outside of LanguageProvider
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}

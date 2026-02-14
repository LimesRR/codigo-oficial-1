import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import { WhatsAppStickyButton } from "@/components/whatsapp-sticky-button"
import "./globals.css"

// Montserrat: Primary font - Regular/Medium for body, Bold/Black for headings
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
})

// SEO Metadata - Local SEO optimized for Mazatlán, Sinaloa
export const metadata: Metadata = {
  title: "Seguridad Privada y Alarmas en Mazatlán | Alarmax (AMX)",
  description:
    "Instalación de alarmas, cámaras CCTV y sistemas de seguridad electrónica en Mazatlán, Sinaloa. Protección para hoteles, negocios y residencias con Alarmax.",
  keywords: [
    "alarmas Mazatlán",
    "CCTV Mazatlán",
    "seguridad electrónica Sinaloa",
    "cámaras de seguridad Mazatlán",
    "alarmas para hoteles Mazatlán",
    "Zona Dorada Mazatlán seguridad",
  ],
  openGraph: {
    title: "Seguridad Privada y Alarmas en Mazatlán | Alarmax (AMX)",
    description:
      "Instalación de alarmas, cámaras CCTV y sistemas de seguridad electrónica en Mazatlán, Sinaloa. Protección para hoteles, negocios y residencias con Alarmax.",
  },
  icons: {
    icon: "images/logo-searchbar.jpeg", // Small icon shown in browser tab
    apple: "/apple-icon.png", // Icon used when site is saved to iPhone/iPad home screen
  },
}

// Browser theme color - Deep Navy Blue brand color
export const viewport: Viewport = {
  themeColor: "#001F3F",
}

// Main layout component that wraps all pages
export default function RootLayout({
  children, // This will be replaced with the content of each page (Home, Services, etc.)
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Main HTML wrapper - sets language to Spanish and enables smooth scrolling
    <html lang="es" className={`scroll-smooth ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {/* ScrollToTop: Automatically scrolls to top when navigating between pages */}
        <ScrollToTop />

        {/* Children: The actual page content (Home, Services, Contact, etc.) gets inserted here */}
        {children}

        {/* Vercel Analytics: Tracks page views and user interactions */}
        <Analytics />

        {/* Sticky WhatsApp CTA - Fast conversion for tourism & social traffic */}
        <WhatsAppStickyButton />
      </body>
    </html>
  )
}

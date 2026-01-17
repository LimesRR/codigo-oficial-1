import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import Script from "next/script"
import "./globals.css"

// Load Google Fonts for the website
// Inter: Main font used throughout the site
// Geist_Mono: Monospace font (currently not actively used but available)
const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// SEO Metadata - This appears in search engines and browser tabs
export const metadata: Metadata = {
  title: "Alarmax | Líderes en Sistemas de Seguridad",
  description:
    "Soluciones en CCTV, alarmas, control de acceso y automatización. Más de 30 años protegiendo hogares y empresas en México.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // Small icon shown in browser tab
    apple: "/apple-icon.png", // Icon used when site is saved to iPhone/iPad home screen
  },
}

// Browser theme color - makes the browser chrome match our brand color
export const viewport: Viewport = {
  themeColor: "#3B5DE7", // Alarmax blue color
}

// Main layout component that wraps all pages
export default function RootLayout({
  children, // This will be replaced with the content of each page (Home, Services, etc.)
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // Main HTML wrapper - sets language to Spanish and enables smooth scrolling
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">
        {/* ScrollToTop: Automatically scrolls to top when navigating between pages */}
        <ScrollToTop />

        {/* Children: The actual page content (Home, Services, Contact, etc.) gets inserted here */}
        {children}

        {/* Vercel Analytics: Tracks page views and user interactions */}
        <Analytics />

        {/* Tawk.to Live Chat Widget */}
        {/* This adds a chat button to the bottom right of every page */}
        {/* Customers can click it to start a conversation with Alarmax team */}
        <Script
          id="tawk-to-chat"
          strategy="lazyOnload" // Loads after page content to improve performance
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              // Minimize the chat widget by default so it starts as a small button
              Tawk_API.onLoad = function(){
                Tawk_API.minimize();
              };
              // Load the Tawk.to chat widget script
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/696698cda6259b197dfb9194/1jescj27i';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}

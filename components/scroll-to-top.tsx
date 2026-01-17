// ============================================================================
// SCROLL TO TOP - Automatically scrolls to top when navigating between pages
// ============================================================================
// Problem: When you scroll down on one page and click a link to another page,
// you might start at the bottom of the new page instead of the top
// Solution: This component automatically scrolls to the top whenever the URL changes
// ============================================================================

"use client" // Runs in browser to access window.scrollTo

import { useEffect } from "react"
import { usePathname } from "next/navigation" // Hook to detect URL changes

export function ScrollToTop() {
  // Get current page path (e.g., "/", "/servicios", "/contacto")
  const pathname = usePathname()

  // Whenever pathname changes (user navigates to a different page)
  useEffect(() => {
    // Scroll to the very top of the page (x: 0, y: 0)
    window.scrollTo(0, 0)
  }, [pathname]) // Re-run this effect whenever pathname changes

  // This component doesn't render anything visible - it just performs the scroll action
  return null
}

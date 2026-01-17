// ============================================================================
// UTILITY FUNCTIONS - Helper functions used throughout the website
// ============================================================================
// cn() - Combines and merges CSS class names intelligently
// Used to conditionally apply Tailwind classes and handle conflicts
// ============================================================================

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn() function - Combines multiple class names and resolves Tailwind conflicts
// Example: cn("text-red-500", isActive && "text-blue-500", "font-bold")
// If isActive is true: "text-blue-500 font-bold" (blue overrides red)
// If isActive is false: "text-red-500 font-bold"
export function cn(...inputs: ClassValue[]) {
  // clsx: Combines class names and handles conditionals
  // twMerge: Intelligently merges Tailwind classes, removing conflicts
  // (e.g., if you have both "text-red-500" and "text-blue-500", only the last one is kept)
  return twMerge(clsx(inputs))
}

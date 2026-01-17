"use client"

import { useEffect, useRef } from "react"

export function LottieCamera({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return

    // Create and load dotlottie-player dynamically
    const script = document.createElement("script")
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
    script.type = "module"
    document.head.appendChild(script)

    script.onload = () => {
      if (containerRef.current && !containerRef.current.querySelector("dotlottie-player")) {
        const player = document.createElement("dotlottie-player")
        player.setAttribute("src", "https://lottie.host/5d561cb0-7ff7-47d0-a6c1-dca4bd3f949b/hzlFHDAy2P.lottie")
        player.setAttribute("background", "transparent")
        player.setAttribute("speed", "1")
        player.setAttribute("loop", "")
        player.setAttribute("autoplay", "")
        player.style.width = "100%"
        player.style.height = "100%"
        containerRef.current.appendChild(player)
      }
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  return <div ref={containerRef} className={className} />
}

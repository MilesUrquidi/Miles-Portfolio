"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { LightRays } from "@/registry/magicui/light-rays"

export default function ThemedLightRays() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const scrollY = window.scrollY
      const fadeEnd = window.innerHeight * 0.7
      const opacity = Math.max(0, 1 - scrollY / fadeEnd)
      ref.current.style.opacity = String(opacity)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ maskImage: "linear-gradient(to bottom, black 30%, transparent 80%)" }}
    >
      <LightRays
        className="absolute inset-0"
        color={isDark ? "rgba(160, 210, 255, 0.32)" : "rgba(180, 215, 255, 0.38)"}
        blendMode={isDark ? "screen" : "multiply"}
        maxOpacity={0.5}
        count={14}
      />
    </div>
  )
}

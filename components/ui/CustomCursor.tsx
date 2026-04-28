"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const onMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
    }

    const onEnter = () => cursor.classList.add("scale-[3]")
    const onLeave = () => cursor.classList.remove("scale-[3]")

    window.addEventListener("mousemove", onMove)

    const interactives = document.querySelectorAll("a, button, [role='button']")
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter)
        el.removeEventListener("mouseleave", onLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-foreground pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ease-out"
    />
  )
}

"use client"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/registry/magicui/dot-pattern"

export default function DotBackground() {
  return (
    <div className="dot-bg fixed inset-0 pointer-events-none -z-10" aria-hidden>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn("fill-white/20")}
      />
    </div>
  )
}

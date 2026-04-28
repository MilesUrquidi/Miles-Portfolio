"use client"

import { useState } from "react"
import Image from "next/image"

export interface IconClusterItem {
  src?: string
  alt: string
  tooltipText: string
  href?: string
  fallbackLetter?: string
  fallbackColor?: string
  noRotation?: boolean
  scale?: number
  backgroundColor?: string
}

interface IconClusterProps {
  items: IconClusterItem[]
  size?: number
  overlapOffset?: number
}

function getRotationSeed(item: IconClusterItem, index: number) {
  const source = `${item.alt}-${item.tooltipText}-${index}`
  let hash = 0

  for (const char of source) {
    hash = (hash * 31 + char.charCodeAt(0)) % 11
  }

  return hash - 5
}

export function IconCluster({ items, size = 32, overlapOffset = -10 }: IconClusterProps) {
  const [isSpread, setIsSpread] = useState(false)

  return (
    <span
      className="inline-flex items-center relative align-middle"
      onMouseEnter={() => setIsSpread(true)}
      onMouseLeave={() => setIsSpread(false)}
      onClick={() => setIsSpread(!isSpread)}
      style={{ height: `${size}px` }}
    >
      {items.map((item, index) => {
        const marginLeft = index === 0 ? 0 : isSpread ? 4 : overlapOffset
        const zIndex = items.length - index
        const rotation = item.noRotation ? 0 : getRotationSeed(item, index)

        const IconWrapper = item.href ? "a" : "span"
        const wrapperProps = item.href
          ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
          : {}

        return (
          <IconWrapper
            key={index}
            className="group/icon relative inline-block transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ marginLeft: `${marginLeft}px`, zIndex }}
            aria-label={item.tooltipText}
            {...wrapperProps}
          >
            {item.src ? (
              <span
                className="block rounded-full border-2 border-background dark:border-background overflow-hidden transition-transform duration-300"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  transform: item.noRotation ? "rotate(0deg)" : `rotate(${rotation}deg)`,
                  backgroundColor: item.backgroundColor || "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!item.noRotation) e.currentTarget.style.transform = "rotate(0deg)"
                }}
                onMouseLeave={(e) => {
                  if (!item.noRotation) e.currentTarget.style.transform = `rotate(${rotation}deg)`
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={size}
                  height={size}
                  className="w-full h-full object-cover"
                  style={item.scale ? { transform: `scale(${item.scale})` } : undefined}
                />
              </span>
            ) : (
              <span
                className="rounded-full border-2 border-background dark:border-background inline-flex items-center justify-center font-semibold text-white transition-transform duration-300"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: item.fallbackColor || "#3B82F6",
                  fontSize: `${Math.floor(size * 0.5)}px`,
                  transform: item.noRotation ? "rotate(0deg)" : `rotate(${rotation}deg)`,
                }}
                onMouseEnter={(e) => {
                  if (!item.noRotation) e.currentTarget.style.transform = "rotate(0deg)"
                }}
                onMouseLeave={(e) => {
                  if (!item.noRotation) e.currentTarget.style.transform = `rotate(${rotation}deg)`
                }}
              >
                {item.fallbackLetter || "?"}
              </span>
            )}
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap opacity-0 pointer-events-none group-hover/icon:opacity-100 transition-opacity duration-150 z-50">
              {item.tooltipText}
            </span>
          </IconWrapper>
        )
      })}
    </span>
  )
}

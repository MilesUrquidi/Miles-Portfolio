"use client"

import Image from "next/image"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"
import { photos } from "@/lib/content"

const rotations = [-15, -7, 0, 7, 15]

export default function PhotoStrip() {
  return (
    <FadeInOnScroll>
      <div
        className="py-4 overflow-hidden"
        style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
      >
        <div
          className="flex items-center justify-center gap-3"
          style={{ perspective: "1000px" }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden"
              style={{
                transform: `rotateY(${rotations[i]}deg)`,
                width: 190,
                height: 250,
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="190px"
              />
            </div>
          ))}
        </div>
      </div>
    </FadeInOnScroll>
  )
}

import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Miles Urquidi"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const COLS = 50
const ROWS = 27
const GAP = 24

export default async function Image() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Figtree:wght@700",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text())
  const fontUrl = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1]
  const fontData = fontUrl
    ? await fetch(fontUrl).then((res) => res.arrayBuffer())
    : null
  const dots = Array.from({ length: COLS * ROWS }, (_, i) => ({
    x: (i % COLS) * GAP,
    y: Math.floor(i / COLS) * GAP,
  }))

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
          position: "relative",
        }}
      >
        {/* Dot grid */}
        {dots.map((dot, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: dot.x,
              top: dot.y,
              width: 2,
              height: 2,
              borderRadius: "50%",
              backgroundColor: "rgba(0,0,0,0.15)",
            }}
          />
        ))}

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://miles-portfolio-opal.vercel.app/images/avatar.jpeg"
              width={88}
              height={88}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              alt="Miles"
            />
            <span
              style={{
                fontSize: 68,
                fontWeight: 700,
                fontFamily: "Figtree",
                color: "#1a1a1a",
                letterSpacing: "-2px",
              }}
            >
              Hi, I&apos;m Miles Urquidi
            </span>
          </div>
          <span style={{ fontSize: 30, color: "#6b7280", fontFamily: "Figtree" }}>
            swe + builder + creator
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData ? { fonts: [{ name: "Figtree", data: fontData, weight: 700 as const }] } : {}),
    }
  )
}

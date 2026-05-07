import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { figtree } from "@/lib/fonts"
import CustomCursor from "@/components/ui/CustomCursor"
import SpotifyNowPlaying from "@/components/ui/SpotifyNowPlaying"
import { Analytics } from "@vercel/analytics/next"
import ThemedLightRays from "@/components/ui/ThemedLightRays"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miles Urquidi",
  description: "CS student at UC Irvine. Building software across research labs and startups.",
  openGraph: {
    title: "Miles Urquidi",
    description: "CS student at UC Irvine. Building software across research labs and startups.",
    siteName: "Miles Urquidi",
    type: "website",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miles Urquidi",
    description: "CS student at UC Irvine. Building software across research labs and startups.",
    images: ["/og-image.webp"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figtree.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <ThemedLightRays />
          <CustomCursor />
          {children}
          <SpotifyNowPlaying />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

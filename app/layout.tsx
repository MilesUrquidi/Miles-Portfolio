import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { figtree } from "@/lib/fonts"
import CustomCursor from "@/components/ui/CustomCursor"
import ScrollProgress from "@/components/ui/ScrollProgress"
import SpotifyNowPlaying from "@/components/ui/SpotifyNowPlaying"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miles Urquidi",
  description: "CS student at UC Irvine. Building software across research labs and startups.",
  openGraph: {
    title: "Miles Urquidi",
    description: "CS student at UC Irvine. Building software across research labs and startups.",
    siteName: "Miles Urquidi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miles Urquidi",
    description: "CS student at UC Irvine. Building software across research labs and startups.",
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
          <ScrollProgress />
          <CustomCursor />
          {children}
          <SpotifyNowPlaying />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import { figtree } from "@/lib/fonts"
import CustomCursor from "@/components/ui/CustomCursor"
import ScrollProgress from "@/components/ui/ScrollProgress"
import ThemeToggle from "@/components/ui/ThemeToggle"
import "./globals.css"

export const metadata: Metadata = {
  title: "Miles Urquidi",
  description: "Software engineer based in California.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CustomCursor />
          <ScrollProgress />
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

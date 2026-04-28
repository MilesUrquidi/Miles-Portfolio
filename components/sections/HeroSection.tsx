import { about, name, socialLinks, tagline } from "@/lib/content"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

export default function HeroSection() {
  return (
    <section className="relative flex items-center dotted-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 to-background pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-6 py-24 w-full">
        <FadeInOnScroll>
          <div className="w-14 h-14 rounded-full bg-border flex items-center justify-center text-xl font-semibold mb-8 select-none">
            M
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.1}>
          <h1 className="text-4xl font-semibold tracking-tight mb-3">{name}</h1>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.2}>
          <p className="text-xl text-muted leading-relaxed mb-5">{tagline}</p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.25}>
          <p className="text-base text-muted leading-relaxed mb-8 max-w-lg">{about}</p>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0.3}>
          <div className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-accent transition-colors duration-200"
              >
                {link.name} →
              </a>
            ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  )
}

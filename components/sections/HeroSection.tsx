import { IconCluster } from "@/components/ui/IconCluster";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function HeroSection() {
  const avatarIcon = [
    {
      src: "/images/avatar.jpeg",
      alt: "Miles Urquidi",
      tooltipText: "Miles Urquidi",
      noRotation: true,
    },
  ];

  const uciIcon = [
    {
      src: "/images/logos/uci.png",
      alt: "UC Irvine",
      tooltipText: "UC Irvine",
      objectFit: "contain" as const,
      backgroundColor: "#ffffff",
    },
  ];

  return (
    <FadeInOnScroll>
      <section className="space-y-6">
        <h1 className="text-3xl sm:text-4xl leading-snug tracking-tight">
          Hi, I&apos;m <IconCluster items={avatarIcon} size={48} />{" "}
          <strong>Miles Urquidi</strong>.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-foreground/90">
          I&apos;m a CS student at <IconCluster items={uciIcon} />{" "}
          <strong>UC Irvine</strong>. I love building products that make
          people&apos;s lives easier, and solve the kinds of problems that save
          me time so they can help other people too.
        </p>
        <hr className="mt-8 border-t border-border" />
      </section>
    </FadeInOnScroll>
  );
}

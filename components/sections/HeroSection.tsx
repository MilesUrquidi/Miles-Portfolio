import { IconCluster } from "@/components/ui/IconCluster";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import { socialLinks } from "@/lib/content";

const faviconMap: Record<string, string> = {
  GitHub: "/icons/GitHub_Invertocat_Black.svg",
  LinkedIn: "/icons/linkedin-svgrepo-com.svg",
  Instagram: "/icons/insta.svg",
  Email: "/icons/email-svgrepo-com.svg",
};

const whiteBackgroundIcons = new Set([
  "GitHub",
  "Email",
  "Instagram",
  "LinkedIn",
]);

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
      scale: 0.75,
      backgroundColor: "#ffffff",
    },
  ];

  const clusterItems = socialLinks.map((s) => ({
    src:
      faviconMap[s.name] ??
      `https://www.google.com/s2/favicons?domain=${new URL(s.url.replace("mailto:", "https://")).hostname}&sz=32`,
    alt: s.name,
    tooltipText: s.name,
    href: s.url,
    backgroundColor: whiteBackgroundIcons.has(s.name) ? "#ffffff" : undefined,
    objectFit: "contain" as const,
  }));

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
        <p className="text-xl leading-relaxed text-foreground/90">
          Heres my socials! <IconCluster items={clusterItems} />
        </p>
        <hr className="mt-8 border-t border-border" />
      </section>
    </FadeInOnScroll>
  );
}

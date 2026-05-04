import { socialLinks } from "@/lib/content";
import { IconCluster } from "@/components/ui/IconCluster";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

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

export default function SocialSection() {
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
      <section>
        <p className="text-xl leading-relaxed text-foreground/90">
          I also post sometimes on <IconCluster items={clusterItems} />
        </p>
      </section>
    </FadeInOnScroll>
  );
}

import { experiences, philanthropyExperience } from "@/lib/content";
import { IconCluster } from "@/components/ui/IconCluster";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function ExperienceSection() {
  const clusterItems = experiences.map((exp) => ({
    src: exp.logo,
    alt: exp.company,
    tooltipText: `${exp.title} @ ${exp.company}`,
    href: exp.link,
    scale: exp.logoScale,
    backgroundColor: exp.logoBackground,
  }));

  const sigmaChiItems = [
    {
      src: philanthropyExperience.logo,
      alt: philanthropyExperience.company,
      tooltipText: `${philanthropyExperience.title} @ ${philanthropyExperience.company}`,
      href: philanthropyExperience.link,
      scale: philanthropyExperience.logoScale,
      backgroundColor: philanthropyExperience.logoBackground,
      objectFit: "contain" as const,
    },
  ];

  return (
    <FadeInOnScroll>
      <section>
        <p className="text-xl leading-relaxed text-foreground/90">
          I&apos;ve built software across <IconCluster items={clusterItems} />{" "}
          startups and university IT.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/70">
          Outside of engineering, {philanthropyExperience.description} with{" "}
          <IconCluster items={sigmaChiItems} size={28} overlapOffset={0} />.
        </p>
      </section>
    </FadeInOnScroll>
  );
}

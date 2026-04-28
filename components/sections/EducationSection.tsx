import { education } from "@/lib/content"
import { IconCluster } from "@/components/ui/IconCluster"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

export default function EducationSection() {
  const uciIcon = [
    {
      src: education[0].logo,
      alt: education[0].school,
      tooltipText: `${education[0].school} — ${education[0].gpa} GPA`,
      href: education[0].link,
    },
  ]

  return (
    <FadeInOnScroll>
      <section>
        <p className="text-xl leading-relaxed text-foreground/90">
          I&apos;m studying <strong>{education[0].degree}</strong> at{" "}
          <strong>{education[0].school}</strong>{" "}
          <IconCluster items={uciIcon} />.
        </p>
      </section>
    </FadeInOnScroll>
  )
}

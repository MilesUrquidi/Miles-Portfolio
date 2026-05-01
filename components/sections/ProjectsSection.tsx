import { projects } from "@/lib/content"
import BuildCard from "@/components/ui/BuildCard"
import { IconCluster } from "@/components/ui/IconCluster"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

const projectColors = ["#3B82F6", "#10B981", "#F97316", "#A855F7"]

export default function ProjectsSection() {
  const clusterItems = projects.map((project, index) => ({
    src: project.logo || undefined,
    alt: project.name,
    tooltipText: `${project.name} — ${project.description}`,
    href: project.link || undefined,
    fallbackLetter: project.logo ? undefined : project.name[0].toUpperCase(),
    fallbackColor: project.logo ? undefined : projectColors[index % projectColors.length],
    backgroundColor: project.logoBackground,
  }))

  return (
    <FadeInOnScroll>
      <section className="space-y-6">
        <p className="text-xl leading-relaxed text-foreground/90">
          A few things I&apos;ve built:{" "}
          <IconCluster items={clusterItems} />
        </p>
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <BuildCard
              key={project.name}
              index={i}
              name={project.name}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
              isPrivate={project.isPrivate}
              date={project.date}
              image={project.image}
              icon={project.logo || undefined}
              iconBackground={project.logoBackground}
            />
          ))}
        </div>
      </section>
    </FadeInOnScroll>
  )
}

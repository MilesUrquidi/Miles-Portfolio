import { projects } from "@/lib/content"
import BuildCard from "@/components/ui/BuildCard"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

export default function ProjectsSection() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <FadeInOnScroll>
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
      </FadeInOnScroll>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <FadeInOnScroll key={project.name} delay={i * 0.1}>
            <BuildCard project={project} />
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  )
}

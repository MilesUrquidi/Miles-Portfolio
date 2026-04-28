import { experience } from "@/lib/content"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

export default function ExperienceSection() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <FadeInOnScroll>
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
      </FadeInOnScroll>

      <div className="space-y-10">
        {experience.map((job, i) => (
          <FadeInOnScroll key={`${job.company}-${job.role}`} delay={i * 0.1}>
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-medium">{job.role}</h3>
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {job.company}
                  </a>
                </div>
                <span className="text-sm text-muted shrink-0">
                  {job.start} — {job.end}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {job.description.map((line) => (
                  <li key={line} className="text-sm text-muted leading-relaxed flex gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  )
}

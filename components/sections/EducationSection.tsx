import { education } from "@/lib/content"
import FadeInOnScroll from "@/components/ui/FadeInOnScroll"

export default function EducationSection() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-16">
      <FadeInOnScroll>
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
      </FadeInOnScroll>

      <div className="space-y-6">
        {education.map((edu) => (
          <FadeInOnScroll key={edu.school}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">{edu.school}</h3>
                <p className="text-sm text-muted mt-0.5">{edu.degree}</p>
                {edu.gpa && (
                  <p className="text-sm text-muted mt-0.5">GPA: {edu.gpa}</p>
                )}
              </div>
              <span className="text-sm text-muted shrink-0">{edu.graduation}</span>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  )
}

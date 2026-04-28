import type { Education, Experience, Project, SocialLink } from "@/types"

export const name = "Miles Urquidi"

export const tagline = "Software engineer who likes building things that matter."

export const about =
  "I'm a software engineer based in California, studying at UC Irvine. I like building clean, fast products and figuring out hard problems."

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MilesUrquidi" },
  { name: "LinkedIn", url: "https://linkedin.com/in/placeholder" },
  { name: "Email", url: "mailto:urquidim@uci.edu" },
]

export const experience: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "Company Name",
    url: "https://example.com",
    start: "Jun 2024",
    end: "Aug 2024",
    description: [
      "Built something impactful here.",
      "Worked with this technology to solve that problem.",
    ],
  },
  {
    role: "Another Role",
    company: "Another Company",
    url: "https://example.com",
    start: "Jan 2024",
    end: "May 2024",
    description: [
      "Placeholder description of what you did.",
    ],
  },
]

export const projects: Project[] = [
  {
    name: "ZotDeals",
    description:
      "A directory of everything UCI students can get for free or heavily discounted with their .edu email.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    url: "https://example.com",
    repo: "https://github.com/MilesUrquidi/UCI-Free-Stuff",
  },
  {
    name: "Project Two",
    description: "Placeholder description of this project and what problem it solves.",
    tech: ["React", "Node.js", "PostgreSQL"],
    url: "https://example.com",
    repo: "https://github.com/MilesUrquidi/placeholder",
  },
  {
    name: "Project Three",
    description: "Placeholder description of this project and what problem it solves.",
    tech: ["Python", "FastAPI", "Docker"],
    repo: "https://github.com/MilesUrquidi/placeholder",
  },
]

export const education: Education[] = [
  {
    school: "University of California, Irvine",
    degree: "B.S. Computer Science",
    graduation: "Jun 2026",
    gpa: "3.X / 4.0",
  },
]

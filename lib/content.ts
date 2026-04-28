import type { Education, Experience, Project, SocialLink } from "@/types"

export const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "Company Name",
    logo: "/images/logos/placeholder.svg",
    date: "Summer 2024",
    description: "Built something impactful here using these technologies.",
    link: "https://example.com",
  },
  {
    title: "Another Role",
    company: "Another Company",
    logo: "/images/logos/placeholder.svg",
    date: "2023 – 2024",
    description: "Placeholder description of what you did here.",
    link: "https://example.com",
  },
]

export const projects: Project[] = [
  {
    name: "ZotDeals",
    language: "TypeScript",
    description:
      "A directory of everything UCI students can get for free or heavily discounted with their .edu email.",
    link: "https://github.com/MilesUrquidi/UCI-Free-Stuff",
    logo: "",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "2024",
  },
  {
    name: "Project Two",
    language: "TypeScript",
    description: "Placeholder description of this project and what problem it solves.",
    link: "https://github.com/MilesUrquidi/placeholder",
    logo: "",
    techStack: ["React", "Node.js", "PostgreSQL"],
    date: "2024",
  },
  {
    name: "Project Three",
    language: "Python",
    description: "Placeholder description of this project and what problem it solves.",
    link: "https://github.com/MilesUrquidi/placeholder",
    logo: "",
    techStack: ["Python", "FastAPI", "Docker"],
    date: "2023",
  },
]

export const education: Education[] = [
  {
    school: "University of California, Irvine",
    logo: "/images/logos/uci.png",
    degree: "B.S. Computer Science",
    gpa: "3.X / 4.0",
    date: "2022 – 2026",
    link: "https://uci.edu",
  },
]

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MilesUrquidi", icon: "/icons/github.svg" },
  { name: "LinkedIn", url: "https://linkedin.com/in/placeholder", icon: "/icons/linkedin.svg" },
  { name: "Email", url: "mailto:urquidim@uci.edu", icon: "/icons/email.svg" },
]

export const ctaLink = "mailto:urquidim@uci.edu"

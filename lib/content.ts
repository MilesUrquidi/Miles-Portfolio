import type { Education, Experience, Project, SocialLink } from "@/types"

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Kalea.fyi",
    logo: "/images/logos/kalea-logo.svg",
    date: "Mar 2026 – Present",
    description:
      "Building a full-stack UGC marketplace connecting SaaS companies with student LinkedIn creators. Engineering an AI content pipeline using LLMs to generate high-conversion posts in under 2 minutes.",
    link: "https://kalea.fyi",
  },
  {
    title: "Information Technology Assistant",
    company: "UC Irvine",
    logo: "/images/logos/uci.png",
    date: "Mar 2025 – Present",
    description:
      "Built responsive website features serving 58,200 monthly visitors. Automated inventory tracking system and maintained 20+ devices for staff and students.",
    link: "https://uci.edu",
  },
]

export const projects: Project[] = [
  {
    name: "Kalea",
    description:
      "UGC marketplace connecting SaaS companies with student LinkedIn creators for paid product reviews. AI pipeline generates high-conversion posts in under 2 minutes.",
    link: "https://kalea.fyi",
    logo: "/images/logos/kalea-logo.svg",
    image: "/images/projects/kalea-landing.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "2026",
  },
  {
    name: "Dive",
    description: "Coming soon.",
    link: "https://dive-gxb2.vercel.app/",
    logo: "/images/projects/dive-logo.png",
    image: "/images/projects/dive.png",
    techStack: [],
    date: "2025",
  },
  {
    name: "ZotDeals",
    description:
      "Directory of free tools and student discounts available to UCI students with a .edu email. 37+ deals, email gate, click tracking, and live at zotdeals.me.",
    link: "https://zotdeals.me",
    logo: "/images/logos/zotdealslogo.svg",
    image: "/images/projects/zotdeals.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "2025",
  },
  {
    name: "Remy – AI Cooking Assistant",
    description:
      "Real-time cooking assistant built at IrvineHacks. Computer vision pipeline verifies cooking step completion via live camera feed. Hands-free voice interaction via OpenAI Realtime API.",
    link: "https://github.com/MilesUrquidi/remy",
    logo: "",
    image: "/images/projects/remy.svg",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "OpenCV"],
    date: "Feb 2025",
  },
  {
    name: "Gaming Search Engine",
    description:
      "Game discovery platform with real-time search and filtering across 39 categories. Integrated RAWG API with caching, delivering access to 1,000+ games.",
    link: "https://github.com/MilesUrquidi/gaming-search-engine",
    logo: "",
    image: "/images/projects/gaming-search-engine.png",
    techStack: ["TypeScript", "React", "CSS"],
    date: "Feb 2025",
  },
]

export const education: Education[] = [
  {
    school: "University of California, Irvine",
    logo: "/images/logos/uci.png",
    degree: "B.S. Software Engineering",
    gpa: "3.X / 4.0",
    date: "2024 – 2028",
    link: "https://uci.edu",
  },
]

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MilesUrquidi" },
  { name: "LinkedIn", url: "https://linkedin.com/in/placeholder" },
  { name: "Email", url: "mailto:urquidim@uci.edu" },
]

export const ctaLink = "mailto:urquidim@uci.edu"

export const photos = [
  "/images/photos/photo-1.jpg",
  "/images/photos/photo-2.jpg",
  "/images/photos/photo-3.jpg",
  "/images/photos/photo-4.jpg",
  "/images/photos/photo-5.jpg",
]

import type { Education, Experience, Project, SocialLink } from "@/types";

export const experiences: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Kalea.fyi",
    logo: "/images/logos/kalea-logo-dark.png",
    logoBackground: "#ffffff",
    date: "Mar 2026 – Present",
    description:
      "Building a full-stack UGC marketplace connecting SaaS companies with student LinkedIn creators. Engineering an AI content pipeline using LLMs to generate high-conversion posts in under 2 minutes.",
    link: "https://kalea.fyi",
  },
  {
    title: "Information Technology Assistant",
    company: "UC Irvine",
    logo: "/images/logos/uci.png",
    logoBackground: "#ffffff",
    date: "Mar 2025 – Present",
    description:
      "Built responsive website features serving 40,000 active visitors. Automated inventory tracking system and maintained 20+ devices for staff and students.",
    link: "https://www.campusrec.uci.edu/",
  },
];

export const philanthropyExperience: Experience = {
  title: "Philanthropy Chairman",
  company: "Sigma Chi",
  logo: "/images/logos/sigmachi.svg",
  date: "",
  description: "I've helped raise over $94,000 for cancer research.",
};

export const projects: Project[] = [
  {
    name: "Kalea",
    description: "UGC marketplace for LinkedIn creators.",
    link: "https://kalea.fyi",
    logo: "/images/logos/kalea-logo-dark.png",
    logoBackground: "#ffffff",
    image: "/images/projects/kalea-landing.webp",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "Apr 2026",
  },
  {
    name: "Dive",
    description:
      "Team productivity app with gamified reef that grows with your progress.",
    link: "https://dive-gxb2.vercel.app/",
    logo: "/images/projects/dive-logo.png",
    image: "/images/projects/dive.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "Apr 2026",
  },
  {
    name: "ZotDeals",
    description: "Free tools and student discounts for UCI students.",
    link: "https://zotdeals.me",
    logo: "/images/logos/zotdealslogo.svg",
    image: "/images/projects/zotdeals.png",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    date: "Mar 2026",
  },
  {
    name: "Remy – AI Cooking Assistant",
    description:
      "AI cooking assistant — computer vision verifies steps, voice interaction hands-free.",
    link: "https://devpost.com/software/remy-9w1phf",
    logo: "",
    image: "/images/projects/remy.svg",
    techStack: ["Next.js", "Python", "FastAPI", "OpenAI", "OpenCV"],
    date: "Feb 2026",
  },
  {
    name: "Gaming Search Engine",
    description:
      "Game discovery platform — real-time search and filtering across 1,000+ titles.",
    link: "https://github.com/MilesUrquidi/Game-Hub",
    logo: "",
    image: "/images/projects/gaming-search-engine.png",
    techStack: ["TypeScript", "React", "CSS"],
    date: "Feb 2025",
  },
];

export const education: Education[] = [
  {
    school: "University of California, Irvine",
    logo: "/images/logos/uci.png",
    degree: "B.S. Software Engineering",
    gpa: "3.X / 4.0",
    date: "2024 – 2028",
    link: "https://uci.edu",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/MilesUrquidi" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/miles-urquidi/" },
  { name: "Instagram", url: "https://www.instagram.com/miles.urquidi/" },
  { name: "Email", url: "mailto:urquidim@uci.edu" },
];

export const ctaLink = "mailto:urquidim@uci.edu";

export const photos = [
  "/images/photos/photo-1.jpg",
  "/images/photos/photo-2.jpg",
  "/images/photos/photo-3.jpg",
  "/images/photos/photo-4.jpg",
  "/images/photos/photo-5.jpg",
];

export interface Experience {
  title: string
  company: string
  logo: string
  date: string
  description: string
  link?: string
  logoScale?: number
  logoBackground?: string
}

export interface Project {
  name: string
  description: string
  link: string
  logo: string
  isPrivate?: boolean
  techStack: string[]
  date?: string
  image?: string
}

export interface Education {
  school: string
  logo: string
  degree: string
  gpa: string
  date: string
  link?: string
  logoBackground?: string
  logoScale?: number
}

export interface SocialLink {
  name: string
  url: string
}

export interface SpotifyTrack {
  isPlaying: boolean
  title?: string
  artist?: string
  albumImageUrl?: string
  songUrl?: string
  progressMs?: number
  durationMs?: number
}

export interface SpotifyData {
  current: SpotifyTrack
  previous?: SpotifyTrack
}

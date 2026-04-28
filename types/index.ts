export type Experience = {
  role: string
  company: string
  url: string
  start: string
  end: string | "Present"
  description: string[]
}

export type Project = {
  name: string
  description: string
  tech: string[]
  url?: string
  repo?: string
  image?: string
}

export type Education = {
  school: string
  degree: string
  graduation: string
  gpa?: string
}

export type SocialLink = {
  name: string
  url: string
}

export type SpotifyTrack = {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumArt?: string
  songUrl?: string
  progress?: number
  duration?: number
}

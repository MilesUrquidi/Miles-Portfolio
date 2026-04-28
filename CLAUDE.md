# Miles Portfolio — Claude Context

## What this is

Personal portfolio website for Miles Urquidi. Next.js 15 App Router + TypeScript + Tailwind CSS v4. Style reference: https://github.com/23jmo/Johnathan-Portfolio

## Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light mode)
- **Font:** Figtree via `next/font/google`
- **Music:** Spotify Web API (Now Playing widget)
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

## Key files

| File | Purpose |
|---|---|
| `lib/content.ts` | All portfolio data — experience, projects, education |
| `lib/spotify.ts` | Spotify token refresh + now-playing fetch |
| `lib/fonts.ts` | Figtree font config |
| `types/index.ts` | TypeScript interfaces for all data |
| `app/api/spotify/route.ts` | Server-side Spotify API route |
| `app/globals.css` | CSS custom properties, dark mode, dotted bg |

## Component map

```
components/
  sections/
    HeroSection.tsx       ← name, tagline, avatar, socials, dotted bg
    ExperienceSection.tsx ← work history
    ProjectsSection.tsx   ← project card grid
    EducationSection.tsx  ← school / degree
  ui/
    BuildCard.tsx         ← project card with hover tech chips
    SpotifyNowPlaying.tsx ← Dynamic Island pill widget
    ThemeToggle.tsx       ← fixed top-right sun/moon toggle
    CustomCursor.tsx      ← 12px dot, mix-blend-mode: difference
    ScrollProgress.tsx    ← 2px accent bar at top of page
    FadeInOnScroll.tsx    ← reusable entrance animation wrapper
```

## Design rules

- Container: `max-w-2xl mx-auto px-6`
- Font: Figtree, antialiased
- Colors: CSS custom properties (`--background`, `--foreground`, `--accent`) — never hardcode hex
- Accent color: blue (`#2563eb` light / `#60a5fa` dark)
- Dark bg: `#0a0a0a`, light bg: `#fafafa`
- Animations: 150–300ms micro-interactions, nothing over 400ms
- Cards: rounded borders, subtle shadow, hover transitions

## Env vars

```
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

## Rules

- One component per file
- All data goes in `lib/content.ts` — don't hardcode strings in components
- Use `next/image` for all images
- Dark mode via CSS custom properties only — no conditional Tailwind `dark:` classes on colors
- Keep components under ~100 lines; split if they grow

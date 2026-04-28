# Miles Portfolio

Personal portfolio site for Miles Urquidi, built with Next.js App Router, TypeScript, Tailwind CSS v4, Framer Motion, `next-themes`, and a Spotify now-playing widget.

## Development

Run the local dev server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Project Structure

- `app/` - layout, page, global styles, and Spotify API route
- `components/sections/` - page sections
- `components/ui/` - reusable UI and animation components
- `lib/content.ts` - portfolio content data
- `lib/spotify.ts` - Spotify token refresh and now-playing fetch logic
- `types/index.ts` - shared TypeScript types

## Environment Variables

Spotify support needs:

```bash
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
```

## Status

The UI shell is built, but `lib/content.ts` still contains placeholder portfolio content and the image folders are waiting for real assets.

## Deploy

Deploy target is Vercel.

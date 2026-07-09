# Sodiq Olatunde — Portfolio

A distinctive single-page portfolio built on the **"Pipeline"** concept with an
**Adire Telemetry** aesthetic: Yoruba indigo-textile geometry reinterpreted as
circuitry, warm ochre "live-signal" accents, and observability-dashboard motion.

- **Framework:** Next.js 16 (App Router) · React 19 · TypeScript
- **Styling:** Tailwind CSS v4 (design tokens in `app/globals.css`)
- **Motion:** [`motion`](https://motion.dev)
- **Fonts:** Clash Display + Switzer (Fontshare) · Martian Mono (Google)

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

## Editing content

Everything is data-driven — edit **`lib/content.ts`** to update copy, roles,
metrics, projects, and skills. The UI reads from it; no need to touch components.

## ✅ Fill these in (currently placeholders)

1. **GitHub username** — `lib/content.ts` → `profile.links.github`
   (also updates the Contact "github" channel automatically).
2. **CV PDF** — drop your file at **`public/sodiq-olatunde-cv.pdf`**
   (matches `profile.cvHref`). Or ask me to generate an on-brand PDF.

## Design system

Tokens live in `app/globals.css` under `@theme`:

| Token            | Value     | Use                    |
| ---------------- | --------- | ---------------------- |
| `--color-base`   | `#0c1024` | deep indigo background |
| `--color-ochre`  | `#e8a13c` | live-signal accent     |
| `--color-signal` | `#6fe3c4` | data-pulse highlight   |

Respects `prefers-reduced-motion` throughout.

## Deploy to Vercel (`sodiqolatunde.com`)

```bash
npx vercel            # link + preview deploy
npx vercel --prod     # production
```

Then add the domain: Vercel Project → **Settings → Domains → Add
`sodiqolatunde.com`** and point your registrar's records as Vercel instructs.

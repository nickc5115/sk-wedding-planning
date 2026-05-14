# SK Wedding Planning

Marketing site for Shannon Kelly / SK Wedding Planning. Next 15 (App Router) + Tailwind v4, deployed to Cloudflare Pages.

## Stack

- Next.js 15.5 (App Router)
- React 18, Tailwind CSS v4
- Resend (transactional email for the contact form, edge runtime)
- Cloudflare Pages via `@cloudflare/next-on-pages`
- Cloudflare Web Analytics (cookieless)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

Create `.env.local`:

```
RESEND_API_KEY=re_...
NEXT_PUBLIC_CF_BEACON_TOKEN=...   # optional in dev
```

`RESEND_API_KEY` is required for the contact form. Without it, the form returns a 500 with a generic error. The CF analytics script only renders when `NEXT_PUBLIC_CF_BEACON_TOKEN` is set, so dev pages do not call the beacon.

## Project shape

- `src/app/` - App Router pages (`/`, `/about`, `/services`, `/gallery`, `/contact`)
- `src/app/api/contact/route.ts` - edge-runtime contact form handler
- `src/app/icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx` - generated images via `next/og`
- `src/app/sitemap.ts`, `robots.ts` - SEO
- `src/components/` - section components
- `src/lib/site.ts` - email, planner name, URL (single source of truth)
- `src/lib/services.ts` - service tier definitions

## Content that still needs Shannon's input

Placeholders are marked with `PLACEHOLDER` comments in source. See the launch checklist at the bottom of this README.

- About bio (`src/components/About.tsx`)
- Real testimonials (`src/components/Testimonials.tsx` - currently shows a "coming soon" state)
- Real photos in `public/gallery/` plus a portrait at `public/shannon.jpg`
- FAQ answers (travel radius, pricing framing) in `src/components/Faq.tsx`
- Real email + social handles in `src/lib/site.ts`

## Build + deploy (Cloudflare Pages)

Local edge-runtime build:

```bash
npm run build:cf
npm run preview:cf
```

Set production secrets:

```bash
npx wrangler pages secret put RESEND_API_KEY
```

Pages project configuration:
- Build command: `npm run build:cf`
- Build output: `.vercel/output` (matches `wrangler.toml`)
- Compat flags: `nodejs_compat` (already in `wrangler.toml`)

Add `NEXT_PUBLIC_CF_BEACON_TOKEN` as a Pages environment variable once Cloudflare Web Analytics is set up for the deployed hostname.

## Launch checklist

- [ ] Replace placeholder bio in About
- [x] Add at least 3 real testimonials (pulled from `reviews.md`)
- [ ] Confirm attribution for the anonymous reviews (June wedding, Cescaphe) - do we have permission to use real names?
- [ ] Drop real photos into `public/gallery/` and set `src` per tile in `Gallery.tsx`
- [ ] Add `public/shannon.jpg` and set `SHANNON_PHOTO` in `About.tsx`
- [ ] Fill in FAQ placeholders (travel, pricing)
- [ ] Update `src/lib/site.ts` (email, instagram, phone, url)
- [ ] Set `RESEND_API_KEY` in Cloudflare Pages
- [ ] Verify a real submission lands in Shannon's inbox
- [ ] Configure Cloudflare Web Analytics + set `NEXT_PUBLIC_CF_BEACON_TOKEN`
- [ ] Point DNS at the Pages deployment
- [ ] Submit `sitemap.xml` in Google Search Console

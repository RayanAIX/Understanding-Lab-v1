# The Understanding Lab — Website v1

**What does it mean to truly understand something?**

An independent research program investigating the nature, measurement, and development of understanding across humans and intelligent systems.

**Researcher:** Muhammad Rayan Shahid  
**Live site:** Deploy to Vercel (see below)  
**Theory version:** v0.2 · Working  
**Status:** Website v1 — First public launch

---

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Next.js** (auto-detected)
5. Build command: `next build`
6. Output directory: `out` (if using static export) or leave default
7. Click Deploy

## Research Links

- **DOI:** [10.5281/zenodo.18269740](https://zenodo.org/records/18269740)
- **GitHub:** [HCMS Repository](https://github.com/RayanAIX/HCMS-Human-Cognition-Measurement-System)
- **Personal portfolio:** [muhammadrayanshahid.vercel.app](https://muhammadrayanshahid.vercel.app)

## Architecture

```
app/
  page.tsx          Main SPA router
  layout.tsx        Metadata + fonts
  globals.css       Design system tokens + animations
components/
  ui/
    Nav.tsx         Sticky navbar with scroll behavior
    Footer.tsx      Research links footer
    Background.tsx  Particle canvas + ambient orbs
    AnimateIn.tsx   Scroll-triggered entrance animation
    ArchDiagram.tsx Animated research architecture SVG
    Badge.tsx       Research status badges
  sections/
    HomeSection.tsx     Landing + typewriter hero
    TheorySection.tsx   Full theory with tabs + confidence levels
    ExperimentsSection.tsx  HCMS + Same Mind + roadmap
    PublicationsSection.tsx Papers + BibTeX copy
    LogSection.tsx      Chronological research record
    AboutSection.tsx    Researcher + two-presence architecture
    CollaborateSection.tsx  Challenge form + collaboration areas
```

## Design Principles

The site is designed as an intellectual research archive, not a portfolio.

- Typography-led: Newsreader serif for research content
- Dark: #0C0C0E base with indigo/teal accent system
- Animated: particle canvas, ambient orbs, scroll-triggered reveals
- Honest: working theory, not validated claims; confidence levels explicit
- Compounding: architecture ready for Papers 2–10, Datasets, Benchmarks

## Version

Website v1 · Theory v0.2 · September 2026

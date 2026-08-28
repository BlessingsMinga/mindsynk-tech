# MindSynk Technologies

*Powering Progress Through Technology*

The official marketing website for **[MindSynk Technologies](https://mindsynk.tech)** — a B2B technology partner based in Lilongwe, Malawi, delivering software development, cloud computing, IT consultancy, digital marketing, data analytics, and graphic/UI-UX design services.

This is a modern, single-page marketing site built with the Next.js App Router. It features an animated WebGL hero, dark-mode support, and a validated contact form.

![Stack](https://img.shields.io/badge/Next.js-16-black) ![Stack](https://img.shields.io/badge/React-19-61dafb) ![Stack](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8) ![Stack](https://img.shields.io/badge/Prisma-6-2d3748) ![Stack](https://img.shields.io/badge/Runtime-Bun-f9f9f9)

---

## ✨ Features

- **One-page marketing site** — Home, Services, Process, Work, About, Security, and Contact sections with smooth-scroll navigation and scroll-reveal animations (Framer Motion).
- **WebGL hero effects**
  - *WarpText* — interactive glass-refraction headline driven by a GLSL shader (pointer lensing, ambient undulation, RGB channel split, ripple).
  - *Aurora* — animated simplex-noise aurora gradient background in brand colours.
  - *BorderGlow* — cursor-tracking mesh-gradient glow on cards.
- **Dark mode** toggle (light/dark/system) via `next-themes`, with the brand palette derived from the MindSynk logo (orange `#f15922` + navy `#1d1e32`).
- **Contact form** with `react-hook-form` + `zod` validation, toast notifications, and a success state; submits to `POST /api/contact`.
- **Floating WhatsApp button** that appears after scrolling past 400px, with a pre-filled chat message.
- **SEO-friendly** — metadata, OpenGraph and Twitter cards; skip-to-content link; semantic HTML; accessible focus rings; 44px mobile touch targets (WCAG-compliant).
- **Extras** — animated stat counters, scroll progress bar, responsive mobile menu (Side Sheet), custom logo component.

## 🧰 Tech Stack

| Layer        | Technology                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| Framework    | [Next.js](https://nextjs.org) 16 (App Router, `output: "standalone"`)       |
| UI Library   | [React](https://react.dev) 19, TypeScript 5                                 |
| Styling      | [Tailwind CSS](https://tailwindcss.com) 4, [shadcn/ui](https://ui.shadcn.com) (new-york, lucide icons) |
| Animation    | [Framer Motion](https://motion.dev), [ogl](https://github.com/oframe/ogl) (WebGL), CSS animations |
| Forms        | [react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev)      |
| Data layer   | [Prisma](https://prisma.io) 6 + SQLite                                       |
| Package mgr  | [Bun](https://bun.sh) (also runtimes the standalone server)                  |
| Development  | Next.js dev server + Caddy reverse proxy (`.zscripts` helper scripts)        |
## 🚀 Getting Started

### Prerequisites

- **Bun** ≥ 1.x ([install](https://bun.sh/docs/install)) — used for installs, scripts, and running the production server.
- Node.js ≥ 18 (for Next.js tooling, optional if Bun handles everything).

### 1. Install dependencies

```bash
bun install
```

### 2. Configure environment variables

```bash
# .env
DATABASE_URL="file:./db/custom.db"
```

`DATABASE_URL` is the only required variable — it points the Prisma client at the SQLite database.

### 3. Set up the database

```bash
bun run db:generate   # generate the Prisma client
bun run db:push       # push the schema to the SQLite database (creates db/custom.db)
```

### 4. Start the dev server

```bash
bun run dev           # Next.js dev server on http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

| Command                 | Description                                                        |
| ----------------------- | ------------------------------------------------------------------ |
| `bun run dev`           | Start the development server on port 3000 (logs to `dev.log`)      |
| `bun run build`         | Production build (`next build` + standalone static/public assets)  |
## 📁 Project Structure

```
mindsynk-tech/
├── .zscripts/            # Dev/build/start helper shell scripts (dev.sh, build.sh, start.sh, ...)
├── db/
│   └── custom.db         # SQLite database (gitignored data lives here)
├── mini-services/        # Optional side micro-services (auto-started by dev.sh when present)
├── prisma/
│   └── schema.prisma     # Prisma schema (User, Post models)
├── public/               # Static assets (logo images, icons, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles + brand design tokens (OKLCH palette)
│   │   ├── layout.tsx    # Root layout, SEO metadata, ThemeProvider, Toaster
│   │   ├── page.tsx      # Home page — assembles all sections
│   │   └── api/
│   │       ├── route.ts          # GET /api — health/hello endpoint
│   │       └── contact/route.ts  # POST /api/contact — validated enquiry endpoint
│   ├── components/
│   │   ├── ui/           # shadcn/ui primitives (button, card, sheet, toast, ...)
│   │   ├── sections/     # hero, about, services, process, case-studies, security, contact
│   │   ├── motion/       # Reveal/RevealGroup/RevealItem scroll-reveal wrappers
│   │   ├── providers/    # ThemeProvider (next-themes)
│   │   ├── aurora.tsx    # WebGL aurora background
│   │   ├── warp-text.tsx # WebGL glass-refraction headline
│   │   ├── border-glow.tsx
│   │   ├── contact-form.tsx
│   │   └── whatsapp-button.tsx
│   ├── hooks/            # use-mobile, use-toast
│   └── lib/
│       ├── data.ts       # Services, features, team leads, case studies, company info
│       ├── db.ts         # Prisma client singleton
│       └── utils.ts      # cn() class-name helper
├── Caddyfile             # Reverse proxy (port 81 → localhost:3000)
├── components.json       # shadcn/ui configuration
## 🗄️ Database

Prisma is wired to a **SQLite** database (`file:${PROJECT_DIR}/db/custom.db`) with `User` and `Post` models provided as a starting scaffold in `prisma/schema.prisma`. The Prisma client is exposed as a singleton through `src/lib/db.ts` to avoid connection bloat in development.

> The contact form currently logs enquiries to the server console via `POST /api/contact`. To persist enquiries, extend the schema and the endpoint (DB write, email, or queue).

## ☁️ Deployment

The project builds to a **standalone** output:

```bash
bun run build
NODE_ENV=production bun .next/standalone/server.js
```

- The build copies `.next/static` and `public/` into `.next/standalone` so the self-contained server can serve the site on port 3000.
- The bundled `Caddyfile` sits in front of the app (Caddy listens on port `81` and reverse-proxies to `localhost:3000`; optional `XTransformPort` query routing is supported).
- Environment variables (`NODE_ENV`, `PORT`, `HOSTNAME`, `DATABASE_URL`) can be overridden at deploy time.
- `.zscripts/build.sh` packages the standalone app, static assets, Caddyfile, database, and mini-services into a deployable tarball.

## 🛠️ Development Notes

- **Brand palette** is defined as OKLCH tokens in `src/app/globals.css` from the logo colours: orange `#f15922` (accent) and navy `#1d1e32` (primary/structure).
- All images sit under `public/`; the Next.js image component allows remote patterns from `z-cdn.chatglm.cn`.
- Strict mode is disabled in `next.config.ts`; TypeScript build errors are currently ignored at build time (see `next.config.ts`).

## 📬 Contact

- Website: [mindsynk.tech](https://mindsynk.tech)
- Email: hello@mindsynk.tech
- Location: Lilongwe, Malawi

## 📄 License

No license specified. All rights reserved by MindSynk Technologies.
├── next.config.ts        # standalone output, image remote patterns
└── package.json
```
| `bun run start`         | Serve the standalone build with Bun on port 3000                  |
| `bun run lint`          | Run ESLint over the project                                        |
| `bun run db:generate`   | Regenerate the Prisma client                                       |
| `bun run db:push`       | Push the Prisma schema to the database                             |
| `bun run db:migrate`    | Create and apply a new Prisma migration                            |
| `bun run db:reset`      | Reset the database (drops all data)                                |
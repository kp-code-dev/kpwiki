# KPWiki 🎮

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.6-blue?style=flat&logo=react)](https://react.dev/)
[![Payload CMS](https://img.shields.io/badge/Payload_CMS-3.86.0-black?style=flat&logo=payloadcms)](https://payloadcms.com/)
[![Database](https://img.shields.io/badge/Database-MongoDB-green?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

> **KPWiki** is a modern, high-performance gaming wiki, news portal, and game directory. Built with **Next.js 16 (App Router)** and **Payload CMS 3**, it delivers an intuitive admin experience, rich content management, interactive game filtering, and a sleek dark gaming aesthetic.

---

## 🌟 Key Features

### 🕹️ Comprehensive Game Catalog & Wiki
- **Rich Game Metadata**: Manage titles, cover art, release dates, developers, publishers, platforms, genres, ratings (0–10 scale), and featured statuses.
- **Multi-Platform Support**: Filter and browse by PC, PlayStation 5, PlayStation 4, Xbox Series X/S, Xbox One, Nintendo Switch, Android, and iOS.
- **Interactive UI**: Modal-based filtering, responsive game cards, and dynamic slug-based individual game wiki pages (`/games/[slug]`).

### 📰 Editorial & Blog Engine
- **Posts & Categories**: Publish news, reviews, guides, and patch notes with nested taxonomy support (`Categories`).
- **Related Content**: Link relevant articles and related posts dynamically.
- **Draft & Live Preview**: Real-time side-by-side editing previews across mobile, tablet, and desktop breakpoints before publishing.
- **Scheduled Publishing**: Built-in jobs queue for scheduling publication and unpublication.

### 🎨 Modular Layout Builder
- **Flexible Content Blocks**: Assemble custom landing pages using reusable blocks:
  - **Hero**: High-impact, medium-impact, and low-impact presentation headers.
  - **Content**: Multi-column editorial sections powered by the Lexical rich text editor.
  - **MediaBlock**: Responsive image and media asset displays.
  - **CallToAction**: Conversion and highlight banners.
  - **ArchiveBlock**: Filtered, paginated post/content collections.
  - **CodeBlock**: Syntax-highlighted code snippets.
  - **FormBlock**: Dynamic form integration.

### ⚡ Cutting-Edge Architecture
- **Next.js 16 + Turbopack**: Blazing fast builds, server-rendered components (RSC), and hybrid static/dynamic page generation.
- **Payload CMS 3**: Headless CMS embedded directly within the Next.js App Router under `/admin` and `/api`.
- **Lexical Editor**: Rich text editing with deep support for Payload blocks, inline assets, and formatting.
- **On-Demand Revalidation**: Automatic cache invalidation on document publishing for fresh frontend delivery.
- **SEO & Sitemaps**: Dynamic XML sitemaps (`/pages-sitemap.xml`, `/posts-sitemap.xml`, `/sitemap.xml`) and automated OpenGraph/meta tag generation.
- **Built-in Search**: Full SSR search functionality with custom search inputs and indexing.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **CMS** | [Payload CMS 3.86](https://payloadcms.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) via `@payloadcms/db-mongodb` (Mongoose) |
| **Frontend UI** | [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), [shadcn/ui](https://ui.shadcn.com/) |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/), custom *Pricedown* gaming typography |
| **Image Optimization** | [Sharp](https://sharp.pixelplumbing.com/) |
| **Type Safety** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Testing** | [Vitest](https://vitest.dev/) (Integration), [Playwright](https://playwright.dev/) (E2E) |

---

## 📁 Project Structure

```
kpwiki/
├── src/
│   ├── app/
│   │   ├── (frontend)/            # Next.js App Router frontend routes
│   │   │   ├── (sitemaps)/        # XML sitemaps (pages & posts)
│   │   │   ├── games/             # Game directory, filter modal, and /games/[slug]
│   │   │   ├── posts/             # Blog & news articles and pagination
│   │   │   ├── search/            # SSR search page
│   │   │   ├── [slug]/            # Dynamic CMS-driven pages
│   │   │   ├── layout.tsx         # Root frontend layout & providers
│   │   │   └── page.tsx           # Homepage
│   │   └── (payload)/             # Payload CMS admin interface & API routes
│   │       ├── admin/             # Admin panel route (/admin)
│   │       └── api/               # REST and GraphQL endpoints (/api)
│   ├── assets/                    # Static fonts (Pricedown) and project assets
│   ├── blocks/                    # Modular layout builder blocks (Hero, Archive, Content, etc.)
│   ├── collections/               # Payload collection definitions
│   │   ├── Categories.ts          # Nested post categories
│   │   ├── Games.ts               # Games directory collection
│   │   ├── Media.ts               # Uploads & image crops
│   │   ├── Pages.ts               # CMS Pages with layout builder
│   │   ├── Posts.ts               # Editorial articles
│   │   └── Users/                 # Admin & author accounts
│   ├── components/                # Reusable React & UI components
│   │   ├── Games/                 # Game cards & client search/filter components
│   │   ├── Link/                  # Universal CMS link component
│   │   ├── Media/                 # Responsive media renderer
│   │   └── ui/                    # shadcn / Radix UI primitive components
│   ├── endpoints/                 # Custom endpoints (e.g., database seeder)
│   ├── fields/                    # Reusable Payload field configurations (slug, links, lexical)
│   ├── Footer/                    # Global footer config (Explore, About, Help, Legal)
│   ├── Header/                    # Global header & navigation bar
│   ├── plugins/                   # Payload plugins (SEO, Search, Redirects, Forms, Nested Docs)
│   ├── utilities/                 # Helper functions (URLs, revalidation, formatting)
│   ├── payload.config.ts          # Core Payload CMS configuration
│   └── payload-types.ts           # Auto-generated TypeScript types
├── next-sitemap.config.cjs        # Post-build sitemap generation configuration
├── tailwind.config.mjs            # Tailwind CSS styling configuration
└── package.json                   # Dependencies and npm scripts
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.20.2+` or `v20.9.0+`
- **Package Manager**: `pnpm` (recommended) or `npm`
- **Database**: A running [MongoDB](https://www.mongodb.com/) instance (local or MongoDB Atlas connection string)

### 1. Clone & Install

```bash
git clone https://github.com/kp-code-dev/kpwiki.git
cd kpwiki
pnpm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Populate the required environment variables:

```env
# MongoDB Connection String
DATABASE_URL=mongodb://127.0.0.1:27017/kpwiki

# Payload Secret (Random 32+ character string for JWT encryption)
PAYLOAD_SECRET=your-random-payload-secret-key-here

# Public Server URL (No trailing slash)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Secret for Cron Jobs / Scheduled Publishing
CRON_SECRET=your-cron-secret-key

# Secret for Draft Preview Validation
PREVIEW_SECRET=your-preview-secret-key
```

### 3. Run Development Server

```bash
pnpm dev
```

Open your browser:
- **Frontend Website**: [http://localhost:3000](http://localhost:3000)
- **Payload Admin Panel**: [http://localhost:3000/admin](http://localhost:3000/admin)

On the first visit to `/admin`, follow the prompt to create your initial administrator account.

---

## 🗄️ Database & Seeding

KPWiki includes a built-in seeding utility to populate your database with initial pages, categories, posts, media, header navigation, and structured footer groups:

1. **Via Admin Panel**: Navigate to `/admin` and use the **Seed Database** option.
2. **Via API**: Access [http://localhost:3000/next/seed](http://localhost:3000/next/seed).

> ⚠️ **Warning**: Seeding resets existing data in collections and globals to initialize fresh demo content. Do not run this in a production environment with live data.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the Next.js development server with Turbopack |
| `pnpm build` | Builds the application for production and generates sitemaps |
| `pnpm start` | Serves the production build locally |
| `pnpm generate:types` | Regenerates `src/payload-types.ts` based on collection schemas |
| `pnpm generate:importmap`| Regenerates Payload Admin component import map |
| `pnpm lint` | Runs ESLint across all files |
| `pnpm lint:fix` | Runs ESLint and automatically fixes formatting issues |
| `pnpm test` | Runs both integration and end-to-end tests |
| `pnpm test:int` | Runs Vitest integration test suite |
| `pnpm test:e2e` | Runs Playwright end-to-end test suite |

---

## 🧩 Content Collections & Globals

### Collections
- **`Games`**: Detailed game catalog with cover images, descriptions, platforms (PC, PS5, Xbox, Switch, Mobile), ratings, release dates, and genres.
- **`Posts`**: Editorial gaming news, patch breakdowns, guides, and reviews with draft/publish workflows.
- **`Pages`**: Custom layouts constructed using the modular block builder.
- **`Media`**: Asset library with automated focal point resizing and responsive image generation.
- **`Categories`**: Hierarchical taxonomies for grouping posts and articles.
- **`Users`**: Role-based authentication and admin user management.

### Globals
- **`Header`**: Navigation items, active indicator controls, and top bar configuration.
- **`Footer`**: Structured multi-column footer navigation (`Explore`, `About`, `Help`, `Legal`), brand statement, social links (YouTube, Instagram, GitHub, LinkedIn, Facebook), and theme switcher.

---

## 🚢 Production Deployment

### 1. Build the Application
```bash
pnpm build
```
This runs Next.js compilation, type-checking, static page generation, and post-build sitemap creation.

### 2. Start the Server
```bash
pnpm start
```

### Hosting Options
- **Vercel / Node Hosting**: Deploy as a standard Next.js application. Ensure your MongoDB connection string (`DATABASE_URL`) allows inbound traffic from your hosting provider's IP range.
- **Docker / Self-Hosted VPS**: Build and run as a standalone Node.js container or service using PM2 / Docker behind NGINX or Caddy reverse proxy.
- **Object Storage**: For high-volume production media storage, integrate S3 or cloud storage adapters as needed.

---

## 🤝 Community & Author

- **Author**: Kalpesh Mevada ([@kp_code_dev](https://www.instagram.com/kp_code_dev))
- **YouTube**: [@codeandlifewithkp](https://www.youtube.com/@codeandlifewithkp)
- **GitHub**: [@kp-code-dev](https://github.com/kp-code-dev)
- **LinkedIn**: [Kalpesh Mevada](https://www.linkedin.com/in/kalpeshmevada)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

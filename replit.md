# AYLA - Africa's Young Leaders Association Website

## Overview

This is a modern, professional landing website for **Africa's Young Leaders Association (AYLA)**, a pan-African international youth organization. The site serves as a public-facing presence targeting students, young professionals, academics, policymakers, donors, and global partners across Africa and the diaspora.

The application is a full-stack TypeScript project with a React frontend and Express backend. It's primarily a content-driven marketing site with a functional contact form that persists submissions. The design follows a clean, institutional NGO/UN-style aesthetic with an African gold primary color scheme.

**Key pages:** Home, About, Programs, Communities, Membership, Events, Contact, and a 404 page.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend

- **Framework:** React 18 with TypeScript (no SSR, client-side only)
- **Routing:** Wouter (lightweight alternative to React Router)
- **Styling:** Tailwind CSS with CSS variables for theming, using the shadcn/ui component library (New York style)
- **Animations:** Framer Motion for page transitions, scroll-based animations, and interactive elements
- **State/Data:** TanStack React Query for server state management
- **Forms:** React Hook Form with Zod validation via `@hookform/resolvers`
- **UI Components:** Full shadcn/ui component library installed under `client/src/components/ui/`
- **Fonts:** DM Sans (body) and Playfair Display (display/headings) loaded from Google Fonts
- **Build tool:** Vite with React plugin, outputs to `dist/public`

The frontend lives entirely in `client/` with path aliases:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets` → `attached_assets/`

Navigation uses a fixed header with horizontal nav on desktop and a hamburger menu that slides in from the left on mobile.

### Backend

- **Framework:** Express 5 on Node.js
- **Language:** TypeScript, run with `tsx` in development
- **HTTP Server:** Node's `createServer` wrapping Express
- **API Pattern:** Simple REST endpoints defined in `server/routes.ts`
- **Development:** Vite dev server is integrated as middleware for HMR (in `server/vite.ts`)
- **Production:** Static files served from `dist/public` with SPA fallback (in `server/static.ts`)
- **Build:** Custom build script (`script/build.ts`) using esbuild for the server bundle and Vite for the client

### Shared Code

The `shared/` directory contains code used by both frontend and backend:
- `shared/schema.ts` — Drizzle ORM table definitions and Zod validation schemas
- `shared/routes.ts` — API route definitions with input/output types (a lightweight contract pattern)

### Data Storage

- **Schema:** Defined with Drizzle ORM targeting PostgreSQL (`shared/schema.ts`)
- **Current storage:** In-memory (`MemStorage` class in `server/storage.ts`) — the storage interface is defined but uses a `Map` instead of a real database
- **Database ready:** Drizzle config (`drizzle.config.ts`) is set up for PostgreSQL via `DATABASE_URL` environment variable. The `contact_submissions` table schema exists but migrations need to be run when connecting a real database
- **Storage interface:** `IStorage` interface in `server/storage.ts` makes it easy to swap in a database-backed implementation

### API Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/api/contact` | Submit a contact form (name, email, message) |

The API uses Zod for input validation. Invalid inputs return 400, successful submissions return 201.

### Build & Scripts

- `npm run dev` — Starts development server with Vite HMR via `tsx`
- `npm run start` — Runs production build from `dist/index.cjs`
- Build process: Vite builds client to `dist/public`, esbuild bundles server to `dist/index.cjs`

## External Dependencies

### Database
- **PostgreSQL** — Required for production via `DATABASE_URL` environment variable
- **Drizzle ORM** — SQL query builder and schema management
- **drizzle-kit** — Migration tooling (configured in `drizzle.config.ts`)
- **connect-pg-simple** — PostgreSQL session store (available but not actively used yet)

### Key Frontend Libraries
- **@tanstack/react-query** — Async state management
- **framer-motion** — Animations
- **wouter** — Client-side routing
- **react-hook-form** + **@hookform/resolvers** — Form handling with Zod validation
- **shadcn/ui** (Radix UI primitives) — Full component library
- **lucide-react** — Icon library
- **embla-carousel-react** — Carousel component
- **recharts** — Charting (available via shadcn chart component)
- **date-fns** — Date utilities

### External Assets
- **AYLA Logo:** Hosted at `https://i.ibb.co/vC0d1Qrt/307eaf4eff2d.jpg`
- **Google Fonts:** DM Sans and Playfair Display
- **Images:** The site references local image paths (`/images/hero-african-youth.jpg`, etc.) that would need to be provided or replaced with Unsplash URLs

### Replit-Specific
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Dev tooling (dev only)
- **@replit/vite-plugin-dev-banner** — Dev banner (dev only)
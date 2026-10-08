# Keshav Sandhu — Engineering Practice Portfolio

A high-craft, editorial engineering portfolio and production dossier showcasing full-stack product engineering, resilient system architecture, and applied AI systems.

---

## 1. What the Project is About and Contains

### Purpose & Philosophy
This project represents the personal engineering practice and production portfolio of **Keshav Sandhu**, a Full-Stack Product Engineer. The platform is designed around the thesis **"Product systems that perform in practice"**—demonstrating the bridge between nuanced human-centered interaction design and dependable, scalable backend systems.

Rather than presenting surface-level mockups, the portfolio emphasizes production-tested software, architectural trade-offs, and measurable outcomes.

### What the Project Contains

- **Hero & Value Proposition (`#overview`)**:
  - Editorial headline and professional narrative defining Keshav's engineering focus.
  - Quick action paths to explore featured work or download an executive curriculum vitae / résumé (`/resume-keshav-sandhu.docx`).
  - High-resolution editorial portrait with responsive image optimization and priority loading.

- **Build-Path Field Guide (`#build` / `BuildSituationGuide`)**:
  - An interactive, situational engagement framework matching engineering needs to concrete execution plans across four real-world stages:
    1. **"I have an idea"** — Scoping early-stage products, clarifying core workflows, and engineering the first useful version.
    2. **"I have a product that needs work"** — Eliminating UX bottlenecks, streamlining operational flows, and resolving system constraints.
    3. **"I want to add AI"** — Designing context-aware retrieval, reliable prompt/model orchestration, and human-in-the-loop workflows.
    4. **"I need the system to scale"** — Strengthening load-bearing paths across database queries, Redis caching, indexing, and deployment infrastructure.

- **Production Dossier (`#work` / `ProjectDossierCard`)**:
  - Detailed, dual-layer engineering case studies pairing human problem context with deep architectural breakdowns:
    - **SOKRATE PMO (Compliance & Operations Platform)**: Multi-tenant governance platform serving 50+ organizations and 100K+ compliance records; built with Next.js, PostgreSQL, Prisma, Redis, AWS; achieved ~60% reduction in manual follow-ups and ~40% latency reduction.
    - **Twin Protocol (AI Chatbot & Document Intelligence Platform)**: Contextual conversational interface for document querying powered by LangChain, vector databases, Node.js, and Stripe; reduced transaction delays by 30% and response times by 40%.
    - **TryStyle (Virtual Try-On Retailer Administration Platform)**: Multi-tenant retailer operations suite featuring real-time analytics, RBAC, Firebase authentication, and Google Gemini AI virtual try-on pipelines; reduced peak response latency by ~35%.

- **Engineering Breadth Matrix (`#about` / `PersonalIntro`)**:
  - An editorial breakdown across four primary engineering domains:
    1. *Interface*: High-craft interaction design, custom design systems, responsive layouts, and WCAG accessibility standards.
    2. *Backend & Multi-Tenancy*: Granular RBAC, tenant isolation, automated quotation-to-invoice workflows, and robust REST APIs.
    3. *Applied AI & RAG*: Document embeddings, contextual retrieval, LangChain orchestration, and flexible model-switching pipelines.
    4. *Performance & Scale*: Query optimization, database indexing, Redis caching, Docker containerization, and AWS cloud deployment.

- **Engineering Lab & Practice Areas (`#lab`)**:
  - Focus areas exploring systems at the seams: Document-aware conversations, Multi-tenant platforms, and load-bearing performance under traffic.

- **Select Engagements & Direct Booking (`#contact`)**:
  - Direct communication channels via email and an integrated, accessible modal for scheduling calls via Cal.com (`CalBookingButton`).

- **Studio Layout & Colophon (`StudioHeader`, `StudioFooter`)**:
  - Clean editorial navigation with skip-links, live location metadata (`Noida, India [UTC+5:30]`), LinkedIn integration, and copyright colophon.

---

## 2. Technical Description of the Project

### Core Architecture & Technologies

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Framework** | [Next.js](https://nextjs.org/) (v16.3.5) | App Router architecture utilizing React Server Components (RSC) and selective client hydration. |
| **UI Library** | [React](https://react.dev/) (v19.2.8) | Modern React 19 concurrent features and semantic HTML5 elements. |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (v5.x) | Strict type checking across components, content models, and configuration. |
| **Styling Architecture** | Vanilla CSS Modules + Custom Design Tokens | Modular CSS (`.module.css`) combined with a bespoke architectural design system (`design-tokens.css`). Zero CSS utility framework dependencies for maximum performance and artistic precision. |
| **Typography** | `next/font/google` | Self-hosted, zero-layout-shift font optimization: *Instrument Serif* (editorial display), *Plus Jakarta Sans* (body & interface), and *Geist Mono* (datum labels). |
| **Code Quality** | ESLint (v9.x) with `eslint-config-next` | Strict linting rules maintaining Next.js best practices and code consistency. |

### Architectural Highlights

1. **Design System & Visual Language**:
   - Built on a calibrated Warm Architectural Palette (`--bg-canvas: #F9F8F6`, `--color-accent: #B23B1E`, `--text-primary: #1A1A1A`).
   - Pure CSS watermark grid pattern applied via non-blocking pseudo-elements (`body::before`).
   - Precision datum borders, mechanical transition easings, and micro-interactions on hover and focus states.

2. **Performance & Asset Optimization**:
   - Next.js Image component (`next/image`) for responsive image delivery, WebP/AVIF formats, and priority LCP optimization.
   - Minimal client-side JavaScript bundle footprint by keeping static editorial content as Server Components.

3. **SEO & Accessibility**:
   - Comprehensive metadata configuration in `layout.tsx` (canonical URL, OpenGraph cards, Twitter cards).
   - Dynamic OpenGraph image generation via Next.js `ImageResponse` in `src/app/opengraph-image.tsx`.
   - JSON-LD Structured Data embedding schema.org `ProfilePage` and `Person` entities.
   - Accessible keyboard navigation featuring a top-level skip link (`#main-content`), ARIA landmark roles, and semantic heading hierarchies.

### Directory Structure

```text
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── layout.tsx          # Root layout, fonts, meta tags, and JSON-LD schema
│   │   ├── page.tsx            # Main portfolio page composing all studio sections
│   │   ├── page.module.css     # Layout and section styling
│   │   ├── opengraph-image.tsx # Dynamic OpenGraph social card generation
│   │   └── robots.ts           # Search engine crawler directives
│   ├── components/
│   │   ├── layout/             # Global structural components (StudioHeader, StudioFooter)
│   │   └── ui/                 # Reusable UI elements (Buttons, Cards, Modals, Portraits)
│   ├── content/                # Structured static data & copy
│   │   ├── projects.ts         # Case study dossiers (metrics, tech stack, human stories)
│   │   └── buildSituations.ts  # Situational guide data matrix
│   ├── lib/                    # Shared utilities, constants, and site configuration
│   └── styles/                 # Global styles and design token definitions
│       ├── design-tokens.css   # CSS Custom Properties (colors, spacing, typography)
│       └── globals.css         # CSS reset, base elements, and utility classes
├── public/                     # Static media assets, portraits, and downloadable résumé
├── package.json                # Project dependencies and operational scripts
└── tsconfig.json               # TypeScript compiler configuration
```

### Getting Started

#### Prerequisites
- Node.js (v18.18+ or v20+ recommended)
- npm, pnpm, yarn, or bun

#### Installation & Development
```bash
# Clone the repository
git clone <repo-url>
cd portfolio

# Install dependencies
npm install

# Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Build & Production
```bash
# Run ESLint to verify code quality
npm run lint

# Build the production bundle
npm run build

# Start the production server
npm run start
```

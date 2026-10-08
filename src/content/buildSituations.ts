export type ContributionArea =
  | "Interface"
  | "Application"
  | "API"
  | "Data"
  | "AI"
  | "Infrastructure";

export interface PipelineStep {
  step: string;
  title: string;
  subtitle: string;
  icon: "target" | "layout" | "layers" | "rocket" | "search" | "palette" | "refresh" | "spark" | "file" | "cpu" | "shield" | "message" | "activity" | "database" | "server" | "zap";
  highlight: string;
}

export interface FocusCard {
  icon: "target" | "zap" | "compass" | "shield" | "search" | "layers" | "activity" | "cpu";
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  label: string;
}

export interface BuildSituation {
  id: "idea" | "product" | "ai" | "scale";
  index: string;
  badge: string;
  shortTitle: string;
  shortTag: string;
  stageLabel: string;
  title: string;
  recognition: string;
  narrative: string;
  pipelineSteps: PipelineStep[];
  focusCards: FocusCard[];
  contributionAreas: ContributionArea[];
  contribution: string;
  contributionPledge: string;
  deliverables: string[];
  evidence: {
    label: string;
    headline: string;
    detail: string;
    href?: string;
    kind: "work" | "capability" | "placeholder";
    metrics: MetricItem[];
  };
  firstThoughts: string[];
}

export const buildSituations: BuildSituation[] = [
  {
    id: "idea",
    index: "01",
    badge: "0 → 1 Launch",
    shortTitle: "Zero to Launch",
    shortTag: "MVP & Greenfield Validation",
    stageLabel: "BLUEPRINT 01 // GREENFIELD LAUNCH",
    title: "Zero to Launch: Validating & Shipping Your MVP",
    recognition: "You have a high-conviction problem space and need a focused, production-grade first version.",
    narrative:
      "You have a sharp market thesis, but building the wrong features burns precious runway. I partner with you to distill your core value loop, make pragmatic tech stack choices, and ship a robust first version that real users can test and pay for in weeks, not quarters.",
    pipelineSteps: [
      {
        step: "01",
        title: "Core Loop Discovery",
        subtitle: "Clarify user pain and isolate the single 10x workflow",
        icon: "target",
        highlight: "User interviews & flow mapping",
      },
      {
        step: "02",
        title: "Clickable Prototype",
        subtitle: "High-fidelity UI to align vision before backend lock-in",
        icon: "layout",
        highlight: "Design tokens & interactive Figma",
      },
      {
        step: "03",
        title: "Full-Stack Foundation",
        subtitle: "Next.js App Router, PostgreSQL schema & auth setup",
        icon: "layers",
        highlight: "Clean TypeScript architecture",
      },
      {
        step: "04",
        title: "Production v1 & Telemetry",
        subtitle: "Automated CI/CD, analytics, and live user feedback",
        icon: "rocket",
        highlight: "Live deploy with zero debt",
      },
    ],
    focusCards: [
      {
        icon: "target",
        title: "The Critical User Flow",
        description: "Strip away feature bloat. Obsess over the single interaction loop that delivers immediate, undeniable value.",
      },
      {
        icon: "zap",
        title: "Fastest Path to Truth",
        description: "Launch in weeks rather than quarters to test real customer willingness to pay and engagement retention.",
      },
      {
        icon: "compass",
        title: "Pragmatic Architecture",
        description: "Select durable, modern foundations (Next.js, TypeScript, PostgreSQL) that won't require a total rewrite later.",
      },
      {
        icon: "shield",
        title: "Frictionless Onboarding",
        description: "Craft clear onboarding and authentication so first-time visitors become active, returning users immediately.",
      },
    ],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution: "Define the core flow, then engineer the complete interface and backend system around it.",
    contributionPledge: "Full-spectrum ownership: UX prototyping, component design, schema modeling, and production launch.",
    deliverables: ["Interactive High-Fi Prototype", "Production Next.js + DB Stack", "Auth & Billing Integration", "User Telemetry & Analytics"],
    evidence: {
      label: "FOUNDER PARTNERSHIP // GREENFIELD LAUNCH",
      headline: "RAPID-VALIDATION ARCHITECTURE",
      detail: "Architected lean, production-grade applications with full telemetry, automated deploys, and clean data contracts.",
      href: "#work",
      kind: "work",
      metrics: [
        { value: "3-4 Wks", label: "Idea to Live MVP" },
        { value: "100%", label: "TypeScript Fidelity" },
        { value: "0", label: "Early Tech Debt" },
      ],
    },
    firstThoughts: ["Users", "Core workflow", "Constraints", "Fastest path to validation"],
  },
  {
    id: "product",
    index: "02",
    badge: "UX & Modernization",
    shortTitle: "Product Evolution",
    shortTag: "UX Revamp & Tech Debt Relief",
    stageLabel: "BLUEPRINT 02 // PRODUCT EVOLUTION",
    title: "Product Evolution: Revitalizing Experience & Speed",
    recognition: "Your product has paying users, but usability friction or legacy code is slowing down growth.",
    narrative:
      "You have achieved product-market traction, but early technical shortcuts, UI inconsistencies, or clunky workflows are frustrating users and draining developer velocity. I identify the highest-leverage bottlenecks and modernize your frontend architecture into a joyful, fast experience.",
    pipelineSteps: [
      {
        step: "01",
        title: "Friction & Dropoff Audit",
        subtitle: "Analyze rage-clicks, dropoffs, and state management snags",
        icon: "search",
        highlight: "Heatmaps & performance waterfalls",
      },
      {
        step: "02",
        title: "Design System Tokens",
        subtitle: "Unify fragmented UI into reusable, accessible primitives",
        icon: "palette",
        highlight: "Cohesive typographic & color hierarchy",
      },
      {
        step: "03",
        title: "State & Optimistic UI",
        subtitle: "Sub-100ms UI updates with smart cache invalidation",
        icon: "refresh",
        highlight: "Eliminate re-renders & layout shifts",
      },
      {
        step: "04",
        title: "High-Craft Experience",
        subtitle: "Tactile micro-interactions and keyboard accessibility",
        icon: "spark",
        highlight: "Measurable user satisfaction lift",
      },
    ],
    focusCards: [
      {
        icon: "search",
        title: "Friction Eradication",
        description: "Pinpoint where workflows halt, forms fail, or menus confuse users, and replace them with intuitive patterns.",
      },
      {
        icon: "layers",
        title: "Design System Unification",
        description: "Establish a unified token and component foundation so every future screen looks cohesive and ships 3x faster.",
      },
      {
        icon: "zap",
        title: "Optimistic Perceived Speed",
        description: "Implement instant optimistic mutations and skeleton loaders so complex enterprise tools feel lightning fast.",
      },
      {
        icon: "shield",
        title: "Refactor Without Regression",
        description: "Ship modular improvements with zero user disruption, strict TypeScript types, and comprehensive coverage.",
      },
    ],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution: "Prioritize high-leverage UI/UX improvements and refactor the backend constraints behind them.",
    contributionPledge: "Transforming confusing multi-step workflows into clean, intuitive interfaces backed by rock-solid code.",
    deliverables: ["Token-Based Design System", "State & Query Refactor", "Accessibility & Polish Audit", "Optimistic Mutation Pipeline"],
    evidence: {
      label: "TRYSTYLE // RETAILER ADMIN PLATFORM",
      headline: "MULTI-TENANT OPERATIONS MODERNIZATION",
      detail: "Multi-tenant product operations, role-based access control (RBAC), custom styling configs, and real-time analytics.",
      href: "#project-trystyle",
      kind: "work",
      metrics: [
        { value: "100+", label: "Releases Shipped" },
        { value: "5.0 ★", label: "Client Rating" },
        { value: "< 100ms", label: "Interaction Latency" },
      ],
    },
    firstThoughts: [
      "The workflow slowing people down",
      "Where the interface stops helping",
      "The highest-leverage next change",
      "Existing system constraints",
    ],
  },
  {
    id: "ai",
    index: "03",
    badge: "LLMs & Intelligence",
    shortTitle: "Applied AI Workflows",
    shortTag: "Grounded LLMs & Context RAG",
    stageLabel: "BLUEPRINT 03 // INTELLIGENCE BLUEPRINT",
    title: "Applied AI Workflows: Grounded, Dependable Intelligence",
    recognition: "You want AI to make your product genuinely smarter, not just tack a generic chatbot on a sidebar.",
    narrative:
      "You want AI that solves real user bottlenecks with contextual grounding and verifiable answers — not hallucinations. I engineer RAG retrieval pipelines, parse proprietary document formats, and build streaming conversational interfaces with explicit source citations.",
    pipelineSteps: [
      {
        step: "01",
        title: "Data Ingestion & Parsing",
        subtitle: "Reliable extraction from PDFs, structured tables & docs",
        icon: "file",
        highlight: "Smart chunking & metadata tagging",
      },
      {
        step: "02",
        title: "Hybrid Vector Search",
        subtitle: "Dense embeddings with pgvector plus lexical fallback",
        icon: "cpu",
        highlight: "Sub-50ms semantic retrieval",
      },
      {
        step: "03",
        title: "LLM Orchestration",
        subtitle: "LangChain pipelines, prompt guardrails & citation anchors",
        icon: "shield",
        highlight: "Hallucination prevention guardrails",
      },
      {
        step: "04",
        title: "Streaming Copilot UI",
        subtitle: "Real-time token streaming with interactive source badges",
        icon: "message",
        highlight: "Direct document highlight jump",
      },
    ],
    focusCards: [
      {
        icon: "cpu",
        title: "Grounded Context & Precision",
        description: "Connect models to your specific domain knowledge with robust vector search, eliminating hallucinated answers.",
      },
      {
        icon: "shield",
        title: "Verifiable Source Citations",
        description: "Every generated insight links directly to original document page numbers and excerpts for instant verification.",
      },
      {
        icon: "zap",
        title: "Streaming Perceived Speed",
        description: "Stream tokens over Server-Sent Events (SSE) immediately so users start reading in milliseconds.",
      },
      {
        icon: "target",
        title: "Human-in-the-Loop Controls",
        description: "Empower users with clear copy, edit, regenerate, and feedback controls so AI acts as a trusted multiplier.",
      },
    ],
    contributionAreas: ["Interface", "Application", "Data", "AI"],
    contribution: "Engineer useful AI touchpoints, wire up semantic vector retrieval, and build transparent, interactive UIs.",
    contributionPledge: "End-to-end AI application delivery: ingestion pipelines, vector indexing, prompt engineering, and UI copilot.",
    deliverables: ["pgvector / RAG Ingestion Pipeline", "Prompt Guardrails & Schema Validation", "Streaming SSE Chat Surface", "Inline PDF Citation Viewer"],
    evidence: {
      label: "TWIN PROTOCOL // AI INTERACTION PLATFORM",
      headline: "CONTEXTUAL DOCUMENT CONVERSATIONS",
      detail: "Document conversations, LangChain services, vector embeddings, and contextual PDF responses with inline citations.",
      href: "#project-twin-protocol",
      kind: "work",
      metrics: [
        { value: "100%", label: "Source Grounding" },
        { value: "LangChain", label: "Orchestration" },
        { value: "pgvector", label: "Semantic Search" },
      ],
    },
    firstThoughts: [
      "The moment where context helps",
      "Source information and retrieval",
      "Where answers must be dependable",
      "The human workflow around it",
    ],
  },
  {
    id: "scale",
    index: "04",
    badge: "Scale & High Throughput",
    shortTitle: "High-Scale Systems",
    shortTag: "Latency, DB Queries & Resiliency",
    stageLabel: "BLUEPRINT 04 // INFRASTRUCTURE BLUEPRINT",
    title: "Architecture at Scale: Resilient, High-Throughput Systems",
    recognition: "Traffic growth or expanding datasets are causing slow queries, API timeouts, or stability issues.",
    narrative:
      "Your user base or transaction volume is accelerating, and sluggish database queries, unoptimized endpoints, or un-cached requests are degrading user trust. I profile system bottlenecks, tune queries, implement caching layers, and harden critical paths for predictable sub-50ms latency.",
    pipelineSteps: [
      {
        step: "01",
        title: "P99 Telemetry Profiling",
        subtitle: "Audit API waterfalls, slow queries, and memory footprints",
        icon: "activity",
        highlight: "Identify load-bearing bottlenecks",
      },
      {
        step: "02",
        title: "Query & Index Tuning",
        subtitle: "Compound indexes, connection pooling & schema refactoring",
        icon: "database",
        highlight: "Eliminate N+1 queries & full table scans",
      },
      {
        step: "03",
        title: "Edge Caching & Queues",
        subtitle: "Redis caching with stale-while-revalidate & BullMQ workers",
        icon: "server",
        highlight: "Offload heavy background compute",
      },
      {
        step: "04",
        title: "Fault-Tolerant Resilience",
        subtitle: "Rate limiting, circuit breakers & zero-downtime CI/CD",
        icon: "zap",
        highlight: "Predictable sub-50ms global response",
      },
    ],
    focusCards: [
      {
        icon: "activity",
        title: "Hot-Path Optimization",
        description: "Profile and harden the 5% of database queries and API endpoints responsible for 80% of server load.",
      },
      {
        icon: "database",
        title: "Database Indexing & Hygiene",
        description: "Add strategic compound indexes and connection pooling to keep Postgres queries fast even past 100k+ records.",
      },
      {
        icon: "server",
        title: "Distributed Caching Tiers",
        description: "Implement Redis caching with smart invalidation and background queue processing to decouple heavy jobs.",
      },
      {
        icon: "shield",
        title: "Observability & Proactive Alerts",
        description: "Instrument real-time health telemetry and error monitoring to catch issues before customers ever notice.",
      },
    ],
    contributionAreas: ["Application", "API", "Data", "Infrastructure"],
    contribution: "Strengthen load-bearing paths across database queries, APIs, caching layers, and deployment pipelines.",
    contributionPledge: "Deep systems engineering: SQL profiling, Redis architecture, asynchronous job queues, and zero-downtime resilience.",
    deliverables: ["SQL & Query Latency Optimization", "Redis Distributed Caching Layer", "Background Worker Queue Pipeline", "Automated Health & Telemetry Alerts"],
    evidence: {
      label: "SOKRATE PMO // SCALE & PERFORMANCE",
      headline: "ENTERPRISE SCALE & RESILIENCY",
      detail: "Scaled governance platform across 50+ organizations and 100K+ records, delivering a ~40% API latency reduction.",
      href: "#work",
      kind: "work",
      metrics: [
        { value: "~40%", label: "API Latency Cut" },
        { value: "50+ Orgs", label: "Active Enterprise Deploy" },
        { value: "100K+", label: "Records Handled" },
      ],
    },
    firstThoughts: [
      "Load-bearing workflows",
      "Data boundaries and query paths",
      "Slow or fragile API behavior",
      "Deployment and operational needs",
    ],
  },
];

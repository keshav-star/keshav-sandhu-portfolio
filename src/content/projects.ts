import type { ProjectDossierProps } from "@/components/ui/ProjectDossierCard";

export const featuredProjects: ProjectDossierProps[] = [
  {
    slug: "sokrate-pmo",
    index: "01",
    classification: "COMPLIANCE & OPERATIONS PLATFORM",
    title: "SOKRATE PMO",
    role: "Lead Architecture & Full-Stack Systems",
    outcomeHeadline:
      "Multi-tenant operations platform supporting 50+ organizations and 100K+ compliance records with ~60% reduction in manual follow-ups.",
    summary:
      "Architected a multi-tenant platform with strict data isolation, granular RBAC across 5 user personas, and automated quotation-to-invoice workflows. Refactored queries and caching to cut latency by ~40%.",
    metrics: [
      { value: "50+", label: "Organizations" },
      { value: "100K+", label: "Records Managed" },
      { value: "~60%", label: "Manual Drop" },
      { value: "~40%", label: "Latency Reduction" },
    ],
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Node.js", "AWS", "Vitest"],
    humanStory: {
      problem:
        "Managing compliance across dozens of client organizations required constant manual follow-ups, fragmented spreadsheets, and error-prone quotation-to-invoice handoffs.",
      product:
        "Built a unified, multi-tenant compliance and operations platform where organizations self-manage renewal cycles, audits, medical visits, and invoicing in real time.",
      contribution:
        "Engineered the multi-tenant architecture, designed the 5-persona RBAC model, built automated reminders and renewal workflows, and optimized all database queries.",
      outcome:
        "Now running across 50+ organizations managing 100K+ active records, achieving a ~60% drop in manual operational follow-ups and ~40% faster response times.",
    },
    engineeringLayers: {
      architecture:
        "Multi-tenant tenant-isolated schema with workspace provisioning and centralized governance.",
      frontend:
        "Next.js App Router with accessible audit dashboards, status trackers, and dynamic quotation pipelines.",
      backend:
        "Node.js REST API with granular RBAC authorization middleware spanning 5 distinct user roles.",
      data:
        "PostgreSQL with Prisma ORM, refactored indexes for multi-tenant query isolation, and Redis query caching.",
      performance: "Cut average API response times by ~40% under peak multi-organization load.",
      infrastructure:
        "AWS deployment with automated Vitest test coverage for regulatory audit trails.",
    },
    media:{
      src: "/images/sokrates.png",
      alt: "Sokrates.sos"
    },
    placeholderLabel: "PRIVATE CLIENT WORK // PRODUCT SCREENSHOTS UNAVAILABLE",
  },
  {
    slug: "twin-protocol",
    index: "02",
    classification: "AI CHATBOT PLATFORM",
    title: "Twin Protocol",
    role: "Full-Stack Product Engineering",
    outcomeHeadline:
      "Document conversations with contextual PDF responses, backed by a payment flow that reduced transaction delays by 30% and platform optimizations that reduced response time by 40%.",
    summary:
      "Built an AI-powered document interaction platform with responsive dashboards, conversational interfaces, secure authentication, and a Stripe-based payment system.",
    metrics: [
      { value: "30%", label: "Transaction Delay Reduction" },
      { value: "40%", label: "Response Time Reduction" },
    ],
    techStack: ["React.js", "Next.js", "Node.js", "LangChain", "PostgreSQL", "Stripe"],
    humanStory: {
      problem:
        "Users needed to work with documents through conversational interfaces and receive contextual responses.",
      product:
        "Built an AI-powered platform for document conversations and PDF-based contextual query responses.",
      contribution:
        "Developed responsive dashboards and conversational UI, then built Node.js and LangChain services with vector database integration, authentication, and Stripe payments.",
      outcome:
        "Stripe integration reduced transaction delays by 30%, while caching layers and API optimization reduced response time by 40%.",
    },
    engineeringLayers: {
      frontend:
        "Responsive React and Next.js dashboards with conversational UI, cross-device compatibility, and accessibility support.",
      backend:
        "Node.js services for document interactions, secure authentication, and Stripe-based payments.",
      data: "PostgreSQL-backed application data with caching layers and optimized API paths.",
      ai: "LangChain services with vector database integration for contextual PDF-based query responses.",
      performance: "Caching layers and API optimization reduced response time by 40%.",
    },
    placeholderLabel: "PRIVATE CLIENT WORK // PRODUCT SCREENSHOTS UNAVAILABLE",
  },
  {
    slug: "trystyle",
    index: "03",
    classification: "VIRTUAL TRY-ON ADMIN PLATFORM",
    title: "TryStyle",
    role: "Multi-Tenant Systems & AI Integration",
    outcomeHeadline:
      "Retailer-facing virtual try-on administration with tenant-aware configuration, analytics, and backend improvements that reduced response latency by ~35% under peak traffic.",
    summary:
      "Built the systems retailers use to manage virtual try-on configurations, monitor real-time interactions, and operate AI-integrated workflows.",
    metrics: [{ value: "~35%", label: "Peak-Traffic Latency Reduction" }],
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Firebase Auth", "Gemini"],
    humanStory: {
      problem:
        "Retailers needed a dependable way to integrate virtual try-on capabilities, manage configurations, and monitor user interactions.",
      product:
        "Built a multi-tenant retailer admin platform for virtual try-on operations, configuration, and real-time analytics.",
      contribution:
        "Architected tenant isolation, RBAC, authentication, Gemini VTO and internal AI pipelines, analytics dashboards, caching, indexing, and Firebase social login.",
      outcome:
        "Backend API and database-query improvements reduced response latency by ~35% under peak traffic.",
    },
    engineeringLayers: {
      architecture:
        "Multi-tenant retailer administration with secure data isolation and scalable onboarding.",
      backend:
        "Node.js and Express services with RBAC, authentication workflows, Firebase social login, and retailer configuration management.",
      data: "PostgreSQL and Prisma with caching and indexing for peak-traffic query performance.",
      ai: "Gemini VTO and internal AI pipelines with configurable model switching for flexible deployments.",
      performance: "Backend APIs and database queries reduced response latency by ~35% under peak traffic.",
    },
    placeholderLabel: "PRIVATE CLIENT WORK // PRODUCT SCREENSHOTS UNAVAILABLE",
  },
];

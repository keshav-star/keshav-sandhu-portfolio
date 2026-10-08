export type ContributionArea =
  | "Interface"
  | "Application"
  | "API"
  | "Data"
  | "AI"
  | "Infrastructure";

export interface BuildSituation {
  id: "idea" | "product" | "ai" | "scale";
  index: string;
  title: string;
  recognition: string;
  firstThoughts: string[];
  contributionAreas: ContributionArea[];
  contribution: string;
  evidence: {
    label: string;
    detail: string;
    href?: string;
    kind: "work" | "capability" | "placeholder";
  };
}

export const buildSituations: BuildSituation[] = [
  {
    id: "idea",
    index: "01",
    title: "I have an idea",
    recognition:
      "You have a real problem and need a focused first version.",
    firstThoughts: ["Users", "Core workflow", "Constraints", "Fastest path to validation"],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution: "Define the core flow, then build the interface and system around it.",
    evidence: {
      label: "EARLY-STAGE PRODUCT // FIRST USEFUL VERSION",
      detail: "Clarify users, workflow, and constraints before building.",
      kind: "placeholder",
    },
  },
  {
    id: "product",
    index: "02",
    title: "I have a product that needs work",
    recognition:
      "Your product is in use, but its experience or system needs attention.",
    firstThoughts: [
      "The workflow slowing people down",
      "Where the interface stops helping",
      "The highest-leverage next change",
      "Existing system constraints",
    ],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution: "Prioritize useful improvements and resolve the constraints behind them.",
    evidence: {
      label: "TRYSTYLE // RETAILER ADMIN PLATFORM",
      detail: "Multi-tenant product operations, RBAC, configuration, and real-time analytics.",
      href: "#project-trystyle",
      kind: "work",
    },
  },
  {
    id: "ai",
    index: "03",
    title: "I want to add AI",
    recognition:
      "You want AI to make the product more useful, not simply add a model.",
    firstThoughts: [
      "The moment where context helps",
      "Source information and retrieval",
      "Where answers must be dependable",
      "The human workflow around it",
    ],
    contributionAreas: ["Interface", "Application", "Data", "AI"],
    contribution: "Identify useful AI moments, connect the right context, and make them clear to use.",
    evidence: {
      label: "TWIN PROTOCOL // AI CHATBOT PLATFORM",
      detail: "Document conversations, LangChain services, vector context, and contextual PDF responses.",
      href: "#project-twin-protocol",
      kind: "work",
    },
  },
  {
    id: "scale",
    index: "04",
    title: "I need the system to scale",
    recognition:
      "Growth is making the application harder to keep fast and dependable.",
    firstThoughts: [
      "Load-bearing workflows",
      "Data boundaries and query paths",
      "Slow or fragile API behavior",
      "Deployment and operational needs",
    ],
    contributionAreas: ["Application", "API", "Data", "Infrastructure"],
    contribution: "Strengthen load-bearing paths across queries, APIs, data, and deployment.",
    evidence: {
      label: "SOKRATE PMO // SCALE & PERFORMANCE",
      detail: "50+ organizations, 100K+ records, and a reported ~40% API latency reduction.",
      href: "#work",
      kind: "work",
    },
  },
];

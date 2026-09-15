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
      "You have a real problem to solve and need to turn the first useful version into working software.",
    firstThoughts: ["Users", "Core workflow", "Constraints", "Fastest path to validation"],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution:
      "Shape the first useful version, then build the interface and systems it needs to become real.",
    evidence: {
      label: "PROJECT DOSSIER // TO BE ADDED",
      detail: "Further product dossiers will be added as they are published.",
      kind: "placeholder",
    },
  },
  {
    id: "product",
    index: "02",
    title: "I have a product that needs work",
    recognition:
      "Your product is already in use, but the experience or the system behind it needs attention.",
    firstThoughts: [
      "The workflow slowing people down",
      "Where the interface stops helping",
      "The highest-leverage next change",
      "Existing system constraints",
    ],
    contributionAreas: ["Interface", "Application", "API", "Data"],
    contribution:
      "Add useful features, improve the experience, and untangle the system constraints holding the product back.",
    evidence: {
      label: "SOKRATE PMO // OPERATIONAL WORKFLOWS",
      detail: "Multi-tenant product work, RBAC, and quotation-to-invoice workflows.",
      href: "#work",
      kind: "work",
    },
  },
  {
    id: "ai",
    index: "03",
    title: "I want to add AI",
    recognition:
      "You want AI to make the product more useful—not simply add a model for its own sake.",
    firstThoughts: [
      "The moment where context helps",
      "Source information and retrieval",
      "Where answers must be dependable",
      "The human workflow around it",
    ],
    contributionAreas: ["Interface", "Application", "Data", "AI"],
    contribution:
      "Define useful AI moments, connect the right context, and make the experience understandable for the people using it.",
    evidence: {
      label: "APPLIED AI & RAG // CAPABILITY NOTE",
      detail: "Contextual querying, vector embeddings, LangChain services, and model switching pipelines.",
      href: "#about",
      kind: "capability",
    },
  },
  {
    id: "scale",
    index: "04",
    title: "I need the system to scale",
    recognition:
      "More people, data, and workflows are making the application harder to keep fast and dependable.",
    firstThoughts: [
      "Load-bearing workflows",
      "Data boundaries and query paths",
      "Slow or fragile API behavior",
      "Deployment and operational needs",
    ],
    contributionAreas: ["Application", "API", "Data", "Infrastructure"],
    contribution:
      "Strengthen the paths carrying the most load—from queries and APIs to data boundaries and deployment.",
    evidence: {
      label: "SOKRATE PMO // SCALE & PERFORMANCE",
      detail: "50+ organizations, 100K+ records, and a reported ~40% API latency reduction.",
      href: "#work",
      kind: "work",
    },
  },
];

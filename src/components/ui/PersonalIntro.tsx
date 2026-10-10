import React from "react";
import styles from "./PersonalIntro.module.css";

interface PersonalIntroProps {
  className?: string;
}

type CapabilityKind = "interface" | "backend" | "ai" | "performance";

const CAPABILITIES: Array<{
  index: string;
  label: string;
  title: string;
  description: string;
  technology: string;
  kind: CapabilityKind;
}> = [
  {
    index: "01",
    label: "INTERFACE",
    title: "Interfaces people can read at a glance.",
    description: "Responsive product flows, accessible systems, and a durable component language.",
    technology: "React · Next.js · TypeScript",
    kind: "interface",
  },
  {
    index: "02",
    label: "BACKEND",
    title: "Rules that stay correct at scale.",
    description: "Tenant boundaries, RBAC, transactional workflows, and observable APIs.",
    technology: "Node.js · Prisma · PostgreSQL · Redis",
    kind: "backend",
  },
  {
    index: "03",
    label: "APPLIED AI",
    title: "AI grounded in product context.",
    description: "Source-aware retrieval, streaming answers, guardrails, and model routing.",
    technology: "LangChain · Gemini · Vector search",
    kind: "ai",
  },
  {
    index: "04",
    label: "PERFORMANCE",
    title: "Fast paths that survive traffic.",
    description: "Query plans, caching, indexes, deployment telemetry, and reliable delivery.",
    technology: "SQL · Docker · AWS · CI/CD",
    kind: "performance",
  },
];

function CapabilityGlyph({ kind }: { kind: CapabilityKind }) {
  if (kind === "interface") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="7" y="9" width="34" height="28" rx="2" />
        <path d="M7 16h34M14 22h12M14 27h20M14 32h8" />
        <path className={styles.glyphAccent} d="m31 26 7 3-4 2 2 5-2 1-2-5-3 2z" />
      </svg>
    );
  }

  if (kind === "backend") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="16" y="16" width="16" height="16" rx="2" />
        <circle cx="8" cy="10" r="3" />
        <circle cx="40" cy="10" r="3" />
        <circle cx="8" cy="39" r="3" />
        <circle cx="40" cy="39" r="3" />
        <path d="m10 12 8 7M38 12l-8 7M10 37l8-7M38 37l-8-7" />
        <circle className={styles.glyphAccent} cx="24" cy="24" r="3" />
      </svg>
    );
  }

  if (kind === "ai") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="13" cy="24" r="4" />
        <circle cx="25" cy="12" r="3" />
        <circle cx="36" cy="24" r="5" />
        <circle cx="24" cy="37" r="3" />
        <path d="m16 21 7-7M28 14l5 6M32 27l-6 8M21 35l-6-8M17 24h14" />
        <circle className={styles.glyphAccent} cx="36" cy="24" r="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 38V10M7 38h35" />
      <path className={styles.glyphSignal} d="m9 34 9-8 7 3 8-12 8-6" />
      <circle className={styles.glyphAccent} cx="41" cy="11" r="3" />
      <path d="M14 38v-5M23 38v-7M32 38v-11M41 38V16" />
    </svg>
  );
}

export function PersonalIntro({ className = "" }: PersonalIntroProps) {
  return (
    <div className={`${styles.introContainer} ${className}`} aria-label="Product engineering practice">
      <div className={styles.introHeader}>
        <span><i /> PRODUCT ENGINEER & BUILDER</span>
        <span>ONE SYSTEM / END TO END</span>
      </div>

      <div className={styles.introLayout}>
        <div className={styles.introLead}>
          <span className={styles.eyebrow}>PRODUCT PRACTICE // 04 LAYERS</span>
          <h2 className={styles.statement}>
            One product surface. <em>Four systems working together.</em>
          </h2>
          <p className={styles.paragraph}>
            I work through the entire product path—from interaction model to data boundaries,
            AI context, and production performance.
          </p>

          <dl className={styles.proofRail} aria-label="Selected engineering outcomes">
            <div>
              <dt>50+</dt>
              <dd>organizations</dd>
            </div>
            <div>
              <dt>100K+</dt>
              <dd>records managed</dd>
            </div>
            <div>
              <dt>−60%</dt>
              <dd>manual effort</dd>
            </div>
          </dl>
        </div>

        <div className={styles.systemsMap}>
          <div className={styles.mapTopbar}>
            <span><i /> SYSTEM THREAD / ACTIVE</span>
            <span>FOCUS A LAYER TO INSPECT</span>
          </div>
          <div className={styles.capabilityGrid}>
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.index}
                className={styles.capabilityCard}
                tabIndex={0}
                data-cursor="interactive"
              >
                <div className={styles.cardTopline}>
                  <span>{capability.index} / {capability.label}</span>
                  <div className={styles.glyphPlate}>
                    <CapabilityGlyph kind={capability.kind} />
                  </div>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className={styles.technologyLine}>{capability.technology}</div>
                <div className={styles.signalTrack} aria-hidden="true"><i /></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

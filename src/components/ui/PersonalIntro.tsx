import React from "react";
import styles from "./PersonalIntro.module.css";
import { DatumLabel } from "./DatumLabel";

interface PersonalIntroProps {
  className?: string;
}

export function PersonalIntro({ className = "" }: PersonalIntroProps) {
  return (
    <div className={`${styles.introContainer} ${className}`} aria-label="About Keshav Sandhu">
      {/* Editorial Datum Header */}
      <div className={styles.introHeader}>
        <DatumLabel prefix="AUTHOR //" label="KESHAV SANDHU" variant="standard" />
        <span className={styles.divider}>{"//"}</span>
        <span className={styles.headerRole}>PRODUCT ENGINEER & BUILDER</span>
      </div>

      {/* Human-Centered Statement */}
      <h2 className={styles.statement}>
        I build resilient software across product, interface, and systems.
      </h2>

      {/* Editorial Narrative */}
      <div className={styles.narrativeBody}>
        <p className={styles.paragraph}>
          I take products from specification to operation, connecting interface decisions with the data,
          APIs, and workflows behind them. Recent systems support 50+ organizations, 100K+ records, and
          AI workflows that cut manual effort by ~60%.
        </p>
      </div>

      {/* Engineering Breadth Matrix (Layered reading: Human title + Technical evidence) */}
      <div className={styles.breadthMatrix}>
        <div className={styles.matrixCard}>
          <div className={styles.matrixIndex}>01 // INTERFACE</div>
          <h3 className={styles.matrixTitle}>Product & Interaction</h3>
          <p className={styles.matrixDesc}>
            High-craft user interfaces, design systems, responsive layouts, and WCAG accessibility standards.
          </p>
          <div className={styles.techNote}>React · Next.js · TypeScript · CSS Architecture</div>
        </div>

        <div className={styles.matrixCard}>
          <div className={styles.matrixIndex}>02 // BACKEND</div>
          <h3 className={styles.matrixTitle}>Systems & Multi-Tenancy</h3>
          <p className={styles.matrixDesc}>
            Granular RBAC governance, tenant isolation, quotation-to-invoice workflows, and clean REST APIs.
          </p>
          <div className={styles.techNote}>Node.js · Express · Prisma · PostgreSQL · Redis</div>
        </div>

        <div className={styles.matrixCard}>
          <div className={styles.matrixIndex}>03 // AI INTEGRATION</div>
          <h3 className={styles.matrixTitle}>Applied AI & RAG</h3>
          <p className={styles.matrixDesc}>
            Contextual document querying, vector embeddings, LangChain services, and model switching pipelines.
          </p>
          <div className={styles.techNote}>LangChain · Gemini · Vector DBs · Retrieval-Augmented Gen</div>
        </div>

        <div className={styles.matrixCard}>
          <div className={styles.matrixIndex}>04 // PERFORMANCE</div>
          <h3 className={styles.matrixTitle}>Optimization & Scale</h3>
          <p className={styles.matrixDesc}>
            Query refactoring, Redis caching layers, ~40% latency reduction, and predictable cloud deployments.
          </p>
          <div className={styles.techNote}>SQL Indexing · Docker · AWS (EC2/S3/CloudFront) · CI/CD</div>
        </div>
      </div>
    </div>
  );
}

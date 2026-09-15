"use client";

import React, { useState } from "react";
import styles from "./ProjectDossierCard.module.css";
import { DatumLabel } from "./DatumLabel";
import { MediaPlaceholder } from "./MediaPlaceholder";

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface HumanProductStory {
  problem: string;
  product: string;
  contribution: string;
  outcome: string;
}

export interface EngineeringBreakdown {
  architecture?: string;
  frontend?: string;
  backend?: string;
  data?: string;
  infrastructure?: string;
  performance?: string;
}

export interface ProjectDossierProps {
  index: string; // e.g. "01"
  classification: string; // e.g. "COMPLIANCE & OPERATIONS PLATFORM"
  title: string; // e.g. "SOKRATE PMO"
  role: string; // e.g. "Lead Architecture & Full-Stack System"
  outcomeHeadline: string; // e.g. "Enterprise multi-tenant infrastructure supporting 50+ organizations..."
  summary: string;
  metrics: ProjectMetric[];
  techStack: string[];
  humanStory?: HumanProductStory;
  engineeringLayers?: EngineeringBreakdown;
  placeholderLabel?: string;
  className?: string;
}

export function ProjectDossierCard({
  index,
  classification,
  title,
  role,
  outcomeHeadline,
  summary,
  metrics,
  techStack,
  humanStory,
  engineeringLayers,
  placeholderLabel,
  className = "",
}: ProjectDossierProps) {
  const [activeLayer, setActiveLayer] = useState<"human" | "engineering">("human");

  return (
    <article className={`${styles.dossier} ${className}`} aria-labelledby={`dossier-title-${index}`}>
      {/* Dossier Header Bar with Signature KS Monogram Stamp */}
      <div className={styles.headerBar}>
        <div className={styles.indexClassification}>
          <span className={styles.signatureStamp} aria-hidden="true">
            KS
          </span>
          <span className={styles.index}>DOSSIER // {index}</span>
          <span className={styles.slash}>/</span>
          <span className={styles.classification}>{classification}</span>
        </div>
        <div className={styles.roleTag}>
          <DatumLabel label={role} variant="bracketed" />
        </div>
      </div>

      {/* Main Dossier Split Grid */}
      <div className={styles.grid}>
        {/* Narrative & Metrics Column */}
        <div className={styles.contentCol}>
          <h3 id={`dossier-title-${index}`} className={styles.title}>
            {title}
          </h3>

          <p className={styles.outcomeHeadline}>{outcomeHeadline}</p>

          <p className={styles.summary}>{summary}</p>

          {/* Outcome Metrics Ledger (Headline Results) */}
          <div className={styles.metricsLedger}>
            {metrics.map((metric, i) => (
              <div key={i} className={styles.metricItem}>
                <span className={styles.metricValue}>{metric.value}</span>
                <span className={styles.metricLabel}>{metric.label}</span>
              </div>
            ))}
          </div>

          {/* DUAL-LAYER PERSPECTIVE SELECTOR */}
          {(humanStory || engineeringLayers) && (
            <div className={styles.layerSelector}>
              <div className={styles.selectorLabel}>READING DEPTH //</div>
              <div className={styles.selectorButtons}>
                <button
                  type="button"
                  onClick={() => setActiveLayer("human")}
                  className={`${styles.layerBtn} ${activeLayer === "human" ? styles.layerBtnActive : ""}`}
                  aria-pressed={activeLayer === "human"}
                >
                  <span className={styles.btnDot}>●</span>
                  Product Story (Human Layer)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveLayer("engineering")}
                  className={`${styles.layerBtn} ${activeLayer === "engineering" ? styles.layerBtnActive : ""}`}
                  aria-pressed={activeLayer === "engineering"}
                >
                  <span className={styles.btnDot}>●</span>
                  Engineering Depth (Technical Layer)
                </button>
              </div>
            </div>
          )}

          {/* LAYER 1: HUMAN / PRODUCT STORY (Problem → Product → Contribution → Outcome) */}
          {activeLayer === "human" && humanStory && (
            <div className={styles.humanStoryBox}>
              <div className={styles.storyStep}>
                <span className={styles.stepTag}>01 // PROBLEM</span>
                <p className={styles.stepText}>{humanStory.problem}</p>
              </div>
              <div className={styles.storyStep}>
                <span className={styles.stepTag}>02 // PRODUCT</span>
                <p className={styles.stepText}>{humanStory.product}</p>
              </div>
              <div className={styles.storyStep}>
                <span className={styles.stepTag}>03 // CONTRIBUTION</span>
                <p className={styles.stepText}>{humanStory.contribution}</p>
              </div>
              <div className={styles.storyStep}>
                <span className={styles.stepTag}>04 // OUTCOME</span>
                <p className={styles.stepText}>{humanStory.outcome}</p>
              </div>
            </div>
          )}

          {/* LAYER 2: ENGINEERING DEPTH (Architecture → Frontend → Backend → Data → Infrastructure) */}
          {activeLayer === "engineering" && engineeringLayers && (
            <div className={styles.engineeringBox}>
              {engineeringLayers.architecture && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>ARCHITECTURE //</span>
                  <span className={styles.engDesc}>{engineeringLayers.architecture}</span>
                </div>
              )}
              {engineeringLayers.frontend && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>FRONTEND //</span>
                  <span className={styles.engDesc}>{engineeringLayers.frontend}</span>
                </div>
              )}
              {engineeringLayers.backend && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>BACKEND & APIS //</span>
                  <span className={styles.engDesc}>{engineeringLayers.backend}</span>
                </div>
              )}
              {engineeringLayers.data && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>DATA & CACHING //</span>
                  <span className={styles.engDesc}>{engineeringLayers.data}</span>
                </div>
              )}
              {engineeringLayers.performance && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>PERFORMANCE //</span>
                  <span className={styles.engDesc}>{engineeringLayers.performance}</span>
                </div>
              )}
              {engineeringLayers.infrastructure && (
                <div className={styles.engRow}>
                  <span className={styles.engTag}>INFRASTRUCTURE //</span>
                  <span className={styles.engDesc}>{engineeringLayers.infrastructure}</span>
                </div>
              )}
            </div>
          )}

          {/* Technology Evidence Ledger (Subtle, Supporting Language) */}
          <div className={styles.techEvidence}>
            <span className={styles.techLabel}>TECHNOLOGY EVIDENCE //</span>
            <div className={styles.techChips}>
              {techStack.map((tech, i) => (
                <span key={i} className={styles.techChip}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Visual Dossier Plate Column */}
        <div className={styles.mediaCol}>
          <MediaPlaceholder
            label={placeholderLabel || `[PROJECT INTERFACE // ${title}]`}
            sublabel={`${classification} — System Overview`}
            aspectRatio="16/10"
          />
        </div>
      </div>
    </article>
  );
}

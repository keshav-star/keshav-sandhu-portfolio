"use client";

import React, { useState } from "react";
import styles from "./BlueprintConcepts.module.css";
import { buildSituations, type BuildSituation } from "@/content/buildSituations";
import { StudioButton } from "../StudioButton";
import { renderStepIcon } from "../BuildSituationIcons";

export function Concept1ScrubberCapsule() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = buildSituations[activeIndex] || buildSituations[0];

  // Calculated progress fill percentage: 0% -> 33.3% -> 66.6% -> 100%
  const progressPercent = (activeIndex / (buildSituations.length - 1)) * 90;

  return (
    <div className={styles.scrubberCard} id="concept-scrubber">
      {/* ── 1. Scrubber Rail ── */}
      <div className={styles.scrubberTrackWrap}>
        <div className={styles.scrubberTrackLine} />
        <div
          className={styles.scrubberTrackFill}
          style={{ width: `${progressPercent}%` }}
        />

        <div className={styles.scrubberNodeList} role="tablist" aria-label="Milestone scrubber">
          {buildSituations.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.scrubberNodeBtn} ${isActive ? styles.scrubberNodeBtnActive : ""}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div
                  className={`${styles.scrubberNodeDisc} ${isActive ? styles.scrubberNodeDiscActive : ""}`}
                >
                  {isActive && <span className={styles.scrubberNodeInnerDot} />}
                </div>
                <span className={styles.scrubberNodeNum}>STAGE 0{idx + 1}</span>
                <span className={styles.scrubberNodeTitle}>{item.shortTitle}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 2. Focused Stage Capsule ── */}
      <div key={current.id} className={styles.capsuleBody}>
        <div className={styles.capsuleMetaRow}>
          <div className={styles.capsuleBadge}>
            <span>{current.badge}</span>
            <span style={{ color: "var(--text-muted)" }}>//</span>
            <span>{current.shortTag}</span>
          </div>
          <span className={styles.capsuleSprintPill}>
            ⚡ 2–4 WEEK ENGAGEMENT
          </span>
        </div>

        <div>
          <h3 className={styles.capsuleHeading}>{current.title}</h3>
          <p className={styles.capsuleNarrative}>{current.recognition}</p>
        </div>

        {/* 4-Step Pipeline Strip */}
        <div className={styles.capsulePipeline}>
          {current.pipelineSteps.map((step) => (
            <div key={step.step} className={styles.capsuleStepCard}>
              <div className={styles.capsuleStepTop}>
                <span className={styles.capsuleStepNum}>PHASE {step.step}</span>
                <span className={styles.capsuleStepIcon}>
                  {renderStepIcon(step.icon, 15)}
                </span>
              </div>
              <span className={styles.capsuleStepTitle}>{step.title}</span>
              <span className={styles.capsuleStepHighlight}>{step.highlight}</span>
            </div>
          ))}
        </div>

        {/* Shipped Velocity & Metrics */}
        <div className={styles.capsuleMetricsRow}>
          <div className={styles.capsuleMetricsGroup}>
            {current.evidence.metrics.map((metric) => (
              <div key={metric.label} className={styles.capsuleMetricItem}>
                <span className={styles.capsuleMetricVal}>{metric.value}</span>
                <span className={styles.capsuleMetricLbl}>{metric.label}</span>
              </div>
            ))}
          </div>

          <StudioButton
            href="#contact"
            variant="primary"
            size="sm"
            arrow
          >
            Scope Stage 0{activeIndex + 1} Sprint
          </StudioButton>
        </div>
      </div>
    </div>
  );
}

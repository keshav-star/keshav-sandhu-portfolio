"use client";

import React, { useState } from "react";
import styles from "./BuildSituationGuide.module.css";
import { DatumLabel } from "./DatumLabel";
import { EditorialLink } from "./EditorialLink";
import { StudioButton } from "./StudioButton";
import type { BuildSituation, ContributionArea } from "@/content/buildSituations";
import { renderStepIcon } from "./BuildSituationIcons";

const ALL_CONTRIBUTION_AREAS: ContributionArea[] = [
  "Interface",
  "Application",
  "API",
  "Data",
  "AI",
  "Infrastructure",
];

interface SituationBriefProps {
  situation: BuildSituation;
  allSituations: BuildSituation[];
  currentIndex: number;
  totalCount: number;
  onSelectPrev: () => void;
  onSelectNext: () => void;
  onSelectId: (id: BuildSituation["id"]) => void;
}

export function SituationBrief({
  situation,
  allSituations,
  currentIndex,
  totalCount,
  onSelectPrev,
  onSelectNext,
  onSelectId,
}: SituationBriefProps) {
  // Collapsible section state: pipeline open by default, others collapsed for focus & compactness
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    pipeline: true,
    priorities: false,
    ownership: false,
  });

  const [activeStepHover, setActiveStepHover] = useState<number | null>(null);

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const allOpen = Object.values(openSections).every(Boolean);

  const toggleAll = () => {
    const nextState = !allOpen;
    setOpenSections({
      pipeline: nextState,
      priorities: nextState,
      ownership: nextState,
    });
  };

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalCount - 1;

  return (
    <article
      id={`situation-${situation.id}`}
      className={styles.brief}
      role="tabpanel"
      aria-labelledby={`tab-${situation.id}`}
    >
      {/* ── 1. Top Blueprint Header & Stepper Bar ── */}
      <div className={styles.briefHeader}>
        <div className={styles.briefMetaBar}>
          <div className={styles.blueprintStatusTag}>
            <span className={styles.livePulseDot} aria-hidden="true" />
            <DatumLabel label={situation.stageLabel} variant="accent" />
          </div>

          {/* Stepper Controls */}
          <div className={styles.stepperNav} aria-label="Milestone quick controls">
            <button
              type="button"
              className={styles.stepperBtn}
              onClick={onSelectPrev}
              disabled={isFirst}
              aria-label="Previous milestone"
              title="Previous milestone"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 13L5 8l5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Prev</span>
            </button>

            <div className={styles.stepperPills}>
              {allSituations.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.stepperPill} ${item.id === situation.id ? styles.stepperPillActive : ""}`}
                  onClick={() => onSelectId(item.id)}
                  aria-label={`Jump to stage 0${idx + 1}: ${item.shortTitle}`}
                >
                  0{idx + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              className={styles.stepperBtn}
              onClick={onSelectNext}
              disabled={isLast}
              aria-label="Next milestone"
              title="Next milestone"
            >
              <span>Next</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <h3 id={`situation-title-${situation.id}`} className={styles.briefTitle} tabIndex={-1}>
          {situation.title}
        </h3>

        <p className={styles.briefNarrative}>{situation.narrative}</p>
      </div>

      {/* ── 2. Collapsible Blueprint Sections (Clean, Expandable on demand) ── */}
      <div className={styles.accordionGroup}>
        <div className={styles.accordionControlBar}>
          <span className={styles.accordionGroupLabel}>
            <span className={styles.tagCrosshair}>+</span>
            <span>BLUEPRINT BREAKDOWN</span>
          </span>
          <button
            type="button"
            className={styles.toggleAllBtn}
            onClick={toggleAll}
            aria-label={allOpen ? "Collapse all sections" : "Expand all sections"}
          >
            <span>{allOpen ? "Collapse All" : "Expand All"}</span>
            <span className={styles.toggleAllIcon}>{allOpen ? "−" : "+"}</span>
          </button>
        </div>

        {/* Section A: Execution Pipeline */}
        <div className={`${styles.accordionItem} ${openSections.pipeline ? styles.accordionItemActive : ""}`}>
          <button
            type="button"
            id={`trigger-pipeline-${situation.id}`}
            className={styles.accordionTrigger}
            onClick={() => toggleSection("pipeline")}
            aria-expanded={openSections.pipeline}
            aria-controls={`panel-pipeline-${situation.id}`}
          >
            <div className={styles.accordionHeaderLeft}>
              <span className={styles.accordionIconIndicator}>
                {renderStepIcon("layers", 15)}
              </span>
              <span className={styles.accordionTitle}>Execution Pipeline</span>
              <span className={styles.accordionCountBadge}>4 Phases</span>
            </div>
            <div className={styles.accordionToggleState}>
              <span className={styles.accordionToggleLabel}>
                {openSections.pipeline ? "Hide" : "Show"}
              </span>
              <span className={`${styles.accordionToggleCross} ${openSections.pipeline ? styles.accordionToggleCrossOpen : ""}`}>
                +
              </span>
            </div>
          </button>

          <div
            id={`panel-pipeline-${situation.id}`}
            className={`${styles.accordionContentWrapper} ${openSections.pipeline ? styles.accordionContentWrapperOpen : ""}`}
            role="region"
            aria-labelledby={`trigger-pipeline-${situation.id}`}
          >
            <div className={styles.accordionInner}>
              <div className={styles.pipelineGrid}>
                {situation.pipelineSteps.map((step, idx) => {
                  const isHovered = activeStepHover === idx;

                  return (
                    <div
                      key={step.step}
                      className={`${styles.pipelineCard} ${isHovered ? styles.pipelineCardActive : ""}`}
                      onMouseEnter={() => setActiveStepHover(idx)}
                      onMouseLeave={() => setActiveStepHover(null)}
                    >
                      <div className={styles.pipelineCardTop}>
                        <div className={styles.pipelineIconWrap}>
                          {renderStepIcon(step.icon, 18, styles.pipelineIconSvg)}
                        </div>
                        <span className={styles.pipelineStepNum}>STAGE {step.step}</span>
                      </div>

                      <div className={styles.pipelineCardBody}>
                        <h4 className={styles.pipelineStepTitle}>{step.title}</h4>
                        <p className={styles.pipelineStepSub}>{step.subtitle}</p>
                      </div>

                      <div className={styles.pipelineHighlightBadge}>
                        <span className={styles.badgeIndicator} />
                        <span>{step.highlight}</span>
                      </div>

                      {idx < situation.pipelineSteps.length - 1 && (
                        <div className={styles.pipelineConnector} aria-hidden="true">
                          <span className={styles.connectorLine} />
                          <span className={styles.connectorSignal} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Section B: Strategic Priorities */}
        <div className={`${styles.accordionItem} ${openSections.priorities ? styles.accordionItemActive : ""}`}>
          <button
            type="button"
            id={`trigger-priorities-${situation.id}`}
            className={styles.accordionTrigger}
            onClick={() => toggleSection("priorities")}
            aria-expanded={openSections.priorities}
            aria-controls={`panel-priorities-${situation.id}`}
          >
            <div className={styles.accordionHeaderLeft}>
              <span className={styles.accordionIconIndicator}>
                {renderStepIcon("target", 15)}
              </span>
              <span className={styles.accordionTitle}>Strategic Priorities</span>
              <span className={styles.accordionCountBadge}>4 Focus Areas</span>
            </div>
            <div className={styles.accordionToggleState}>
              <span className={styles.accordionToggleLabel}>
                {openSections.priorities ? "Hide" : "Show"}
              </span>
              <span className={`${styles.accordionToggleCross} ${openSections.priorities ? styles.accordionToggleCrossOpen : ""}`}>
                +
              </span>
            </div>
          </button>

          <div
            id={`panel-priorities-${situation.id}`}
            className={`${styles.accordionContentWrapper} ${openSections.priorities ? styles.accordionContentWrapperOpen : ""}`}
            role="region"
            aria-labelledby={`trigger-priorities-${situation.id}`}
          >
            <div className={styles.accordionInner}>
              <div className={styles.focusGrid}>
                {situation.focusCards.map((card) => (
                  <div key={card.title} className={styles.focusCard}>
                    <div className={styles.focusCardTop}>
                      <div className={styles.focusIconPlate}>
                        {renderStepIcon(card.icon, 18, styles.focusIconSvg)}
                      </div>
                      <span className={styles.focusCrosshairCorner}>+</span>
                    </div>
                    <h4 className={styles.focusTitle}>{card.title}</h4>
                    <p className={styles.focusDesc}>{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Section C: Technical Scope & Deliverables */}
        <div className={`${styles.accordionItem} ${openSections.ownership ? styles.accordionItemActive : ""}`}>
          <button
            type="button"
            id={`trigger-ownership-${situation.id}`}
            className={styles.accordionTrigger}
            onClick={() => toggleSection("ownership")}
            aria-expanded={openSections.ownership}
            aria-controls={`panel-ownership-${situation.id}`}
          >
            <div className={styles.accordionHeaderLeft}>
              <span className={styles.accordionIconIndicator}>
                {renderStepIcon("cpu", 15)}
              </span>
              <span className={styles.accordionTitle}>Technical Scope & Deliverables</span>
              <span className={styles.accordionCountBadge}>Scope Matrix</span>
            </div>
            <div className={styles.accordionToggleState}>
              <span className={styles.accordionToggleLabel}>
                {openSections.ownership ? "Hide" : "Show"}
              </span>
              <span className={`${styles.accordionToggleCross} ${openSections.ownership ? styles.accordionToggleCrossOpen : ""}`}>
                +
              </span>
            </div>
          </button>

          <div
            id={`panel-ownership-${situation.id}`}
            className={`${styles.accordionContentWrapper} ${openSections.ownership ? styles.accordionContentWrapperOpen : ""}`}
            role="region"
            aria-labelledby={`trigger-ownership-${situation.id}`}
          >
            <div className={styles.accordionInner}>
              <div className={styles.ownershipGrid}>
                <div className={styles.areasBlock}>
                  <span className={styles.detailLabel}>DISCIPLINES INVOLVED</span>
                  <div className={styles.areaList} aria-label="Covered technical disciplines">
                    {ALL_CONTRIBUTION_AREAS.map((area) => {
                      const isRelevant = situation.contributionAreas.includes(area);

                      return (
                        <span
                          key={area}
                          className={`${styles.area} ${isRelevant ? styles.areaRelevant : styles.areaMuted}`}
                        >
                          <span className={isRelevant ? styles.areaDotActive : styles.areaDotInactive} />
                          {area}
                        </span>
                      );
                    })}
                  </div>
                  <p className={styles.contributionPledge}>{situation.contributionPledge}</p>
                </div>

                <div className={styles.deliverablesBlock}>
                  <span className={styles.detailLabel}>CORE DELIVERABLES</span>
                  <ul className={styles.deliverablesList}>
                    {situation.deliverables.map((item) => (
                      <li key={item} className={styles.deliverableItem}>
                        <svg
                          className={styles.checkIcon}
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          aria-hidden="true"
                        >
                          <path d="M3.5 8.5l3 3 6-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Case Study Evidence Dossier & Metrics ── */}
      <div className={styles.evidenceSection}>
        <div className={styles.evidenceCard}>
          <div className={styles.evidenceCardHeader}>
            <div className={styles.evidenceDatumRow}>
              <span className={styles.tagCrosshair}>+</span>
              <span className={styles.evidenceLabel}>{situation.evidence.label}</span>
            </div>
            <span className={styles.evidenceVerifiedTag}>
              <span className={styles.verifiedDot} />
              PRODUCTION PROVEN
            </span>
          </div>

          <div className={styles.evidenceBody}>
            <h4 className={styles.evidenceHeadline}>{situation.evidence.headline}</h4>
            <p className={styles.evidenceDetail}>{situation.evidence.detail}</p>

            {/* Metrics Pills */}
            {situation.evidence.metrics && situation.evidence.metrics.length > 0 && (
              <div className={styles.metricsRow}>
                {situation.evidence.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metricPill}>
                    <span className={styles.metricValue}>{metric.value}</span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.evidenceActions}>
            {situation.evidence.href ? (
              <EditorialLink href={situation.evidence.href} arrow className={styles.evidenceLink}>
                View dossier case study
              </EditorialLink>
            ) : null}

            <StudioButton
              variant="secondary"
              size="sm"
              href="#contact"
              arrow
              className={styles.ctaButton}
            >
              Discuss this roadmap
            </StudioButton>
          </div>
        </div>
      </div>
    </article>
  );
}

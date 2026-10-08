"use client";

import React, { useState } from "react";
import styles from "./BlueprintConcepts.module.css";
import { buildSituations } from "@/content/buildSituations";
import { StudioButton } from "../StudioButton";
import {
  IconRocket,
  IconSparkle,
  IconCpu,
  IconServer,
} from "../BuildSituationIcons";

const DIAGNOSTIC_CARDS = [
  {
    id: "idea",
    index: "01",
    icon: <IconRocket size={18} />,
    title: "0 → 1 Greenfield Launch",
    quote: "“I have a validated market thesis, but need a production-grade MVP shipped fast without tech debt.”",
    duration: "3–4 Wks to Live",
  },
  {
    id: "product",
    index: "02",
    icon: <IconSparkle size={18} />,
    title: "Product Evolution & UX",
    quote: "“We have paying users, but usability friction, UI inconsistency, or legacy code is draining velocity.”",
    duration: "2–3 Wk Sprint",
  },
  {
    id: "ai",
    index: "03",
    icon: <IconCpu size={18} />,
    title: "Applied AI Workflows",
    quote: "“We need grounded LLM/RAG workflows and streaming UI that don't hallucinate or inflate costs.”",
    duration: "2–4 Wk Rollout",
  },
  {
    id: "scale",
    index: "04",
    icon: <IconServer size={18} />,
    title: "High-Scale Hardening",
    quote: "“Traffic is accelerating, and sluggish database queries or API timeouts are degrading user trust.”",
    duration: "3–5 Wk Hardening",
  },
];

export function Concept2DiagnosticBento() {
  const [selectedId, setSelectedId] = useState<string>("idea");

  const currentSituation =
    buildSituations.find((s) => s.id === selectedId) || buildSituations[0];

  return (
    <div className={styles.scrubberCard} id="concept-bento">
      {/* ── 1. 4 Bento Diagnostic Cards ── */}
      <div className={styles.bentoGrid} role="tablist" aria-label="Product diagnostic choices">
        {DIAGNOSTIC_CARDS.map((card) => {
          const isActive = card.id === selectedId;

          return (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`${styles.bentoCard} ${isActive ? styles.bentoCardActive : ""}`}
              onClick={() => setSelectedId(card.id)}
            >
              <div className={styles.bentoCardHeader}>
                <div className={styles.bentoCardIconWrap}>{card.icon}</div>
                <span className={styles.bentoIndexNum}>0{card.index}</span>
              </div>

              <h4 className={styles.bentoCardTitle}>{card.title}</h4>
              <p className={styles.bentoCardQuote}>{card.quote}</p>

              <div className={styles.bentoCardFooter}>
                <span className={styles.bentoDuration}>{card.duration}</span>
                <span className={styles.bentoSelectIndicator}>
                  {isActive ? "● Selected" : "Tap to view"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── 2. Prescription Drawer (Expands below) ── */}
      <div key={currentSituation.id} className={styles.bentoDrawer}>
        <div>
          <span className={styles.drawerColTitle}>Core Shipped Deliverables</span>
          <div className={styles.deliverablesChips}>
            {currentSituation.deliverables.map((item) => (
              <span key={item} className={styles.deliverableChip}>
                <span className={styles.deliverableCheck}>✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.drawerMetricsCol}>
          <div>
            <span className={styles.drawerColTitle}>Target Turnaround</span>
            <div className={styles.capsuleMetricVal}>
              {currentSituation.evidence.metrics[0]?.value || "2–3 Wks"}
            </div>
            <div className={styles.capsuleMetricLbl}>
              {currentSituation.evidence.metrics[0]?.label || "Estimated Timeline"}
            </div>
          </div>
          <div>
            <span className={styles.drawerColTitle}>Engineering Quality</span>
            <div className={styles.capsuleMetricVal}>
              {currentSituation.evidence.metrics[1]?.value || "100%"}
            </div>
            <div className={styles.capsuleMetricLbl}>
              {currentSituation.evidence.metrics[1]?.label || "Production Rigor"}
            </div>
          </div>
        </div>

        <div>
          <StudioButton
            href="#contact"
            variant="primary"
            size="md"
            arrow
          >
            Deploy This Blueprint
          </StudioButton>
        </div>
      </div>
    </div>
  );
}

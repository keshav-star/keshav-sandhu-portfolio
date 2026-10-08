"use client";

import React, { useState } from "react";
import styles from "./BlueprintConcepts.module.css";
import { buildSituations } from "@/content/buildSituations";
import { StudioButton } from "../StudioButton";

const RADAR_DATA = [
  {
    index: 0,
    stage: "01 Greenfield Launch",
    speedVal: "96%",
    speedLabel: "Sprint Velocity",
    rigorVal: "100%",
    rigorLabel: "TypeScript Fidelity",
    debtVal: "0%",
    debtLabel: "Early Tech Debt",
    deliverables: ["Next.js Full-Stack", "Auth & DB Schema", "User Telemetry", "Clickable High-Fi"],
  },
  {
    index: 1,
    stage: "02 Product Evolution",
    speedVal: "3.2x",
    speedLabel: "Feature Velocity",
    rigorVal: "<100ms",
    rigorLabel: "Perceived Latency",
    debtVal: "0",
    debtLabel: "Regression Regimes",
    deliverables: ["Token Design System", "Optimistic Mutations", "Accessibility Audit", "Query Refactor"],
  },
  {
    index: 2,
    stage: "03 Applied AI Workflows",
    speedVal: "99.4%",
    speedLabel: "Retrieval Precision",
    rigorVal: "<1.2s",
    rigorLabel: "Median Stream Time",
    debtVal: "-40%",
    debtLabel: "Token Cost Overhead",
    deliverables: ["pgvector Embeddings", "Streaming SSE UI", "LangChain Chains", "Citation Anchors"],
  },
  {
    index: 3,
    stage: "04 Systems at Scale",
    speedVal: "85%",
    speedLabel: "Query Latency Cut",
    rigorVal: "10x",
    rigorLabel: "Throughput Headroom",
    debtVal: "99.99%",
    debtLabel: "Uptime Hardening",
    deliverables: ["SQL Index Tuning", "Redis Caching Tier", "Distributed Workers", "APM Telemetry"],
  },
];

export function Concept4RangeRadar() {
  const [sliderIndex, setSliderIndex] = useState(0);

  const currentSituation = buildSituations[sliderIndex] || buildSituations[0];
  const currentRadar = RADAR_DATA[sliderIndex] || RADAR_DATA[0];

  return (
    <div className={styles.radarCard} id="concept-range">
      {/* ── 1. Range Slider Scrubber ── */}
      <div className={styles.rangeSliderWrap}>
        <input
          type="range"
          min="0"
          max="3"
          step="1"
          value={sliderIndex}
          onChange={(e) => setSliderIndex(Number(e.target.value))}
          className={styles.rangeTrackBar}
          aria-label="Select product stage from 0 to 3"
        />

        <div className={styles.rangeLabelsRow}>
          {RADAR_DATA.map((item, idx) => (
            <button
              key={item.stage}
              type="button"
              className={`${styles.rangeLabelBtn} ${idx === sliderIndex ? styles.rangeLabelBtnActive : ""}`}
              onClick={() => setSliderIndex(idx)}
            >
              {item.stage}
            </button>
          ))}
        </div>
      </div>

      {/* ── 2. Live Metric Gauges Grid ── */}
      <div className={styles.radarGaugesGrid}>
        <div className={styles.radarGaugeItem}>
          <div className={styles.radarGaugeTop}>
            <span className={styles.radarGaugeLabel}>{currentRadar.speedLabel}</span>
            <span className={styles.radarGaugeVal}>{currentRadar.speedVal}</span>
          </div>
          <div className={styles.radarGaugeBar}>
            <div className={styles.radarGaugeFill} style={{ width: "90%" }} />
          </div>
        </div>

        <div className={styles.radarGaugeItem}>
          <div className={styles.radarGaugeTop}>
            <span className={styles.radarGaugeLabel}>{currentRadar.rigorLabel}</span>
            <span className={styles.radarGaugeVal}>{currentRadar.rigorVal}</span>
          </div>
          <div className={styles.radarGaugeBar}>
            <div className={styles.radarGaugeFill} style={{ width: "95%" }} />
          </div>
        </div>

        <div className={styles.radarGaugeItem}>
          <div className={styles.radarGaugeTop}>
            <span className={styles.radarGaugeLabel}>{currentRadar.debtLabel}</span>
            <span className={styles.radarGaugeVal}>{currentRadar.debtVal}</span>
          </div>
          <div className={styles.radarGaugeBar}>
            <div className={styles.radarGaugeFill} style={{ width: "85%" }} />
          </div>
        </div>
      </div>

      {/* ── 3. Footer Deliverables Tags & CTA ── */}
      <div className={styles.radarFooter}>
        <div className={styles.radarDeliverableTags}>
          <span style={{ fontSize: "11px", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
            CORE SHIPMENTS:
          </span>
          {currentRadar.deliverables.map((d) => (
            <span key={d} className={styles.radarTag}>
              {d}
            </span>
          ))}
        </div>

        <StudioButton href="#contact" variant="primary" size="sm" arrow>
          Deploy {currentSituation.shortTitle}
        </StudioButton>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./BuildSituationGuide.module.css";
import { buildSituations, type BuildSituation } from "@/content/buildSituations";
import { StudioButton } from "./StudioButton";
import {
  IconRocket,
  IconSparkle,
  IconCpu,
  IconServer,
} from "./BuildSituationIcons";

function renderStageIcon(id: BuildSituation["id"]) {
  switch (id) {
    case "idea":
      return <IconRocket size={16} />;
    case "product":
      return <IconSparkle size={16} />;
    case "ai":
      return <IconCpu size={16} />;
    case "scale":
      return <IconServer size={16} />;
    default:
      return <IconRocket size={16} />;
  }
}

export function BuildSituationGuide() {
  const [activeId, setActiveId] = useState<BuildSituation["id"]>("idea");

  // Interactive Sandbox 01: Greenfield Prototype state
  const [isProdMode, setIsProdMode] = useState<boolean>(true);
  const [eventCount, setEventCount] = useState<number>(1);

  // Interactive Sandbox 02: Optimistic UI vs Lag state
  const [isOptimistic, setIsOptimistic] = useState<boolean>(true);
  const [itemsCount, setItemsCount] = useState<number>(3);
  const [isSimulatingLag, setIsSimulatingLag] = useState<boolean>(false);

  // Interactive Sandbox 03: Applied AI Streaming state
  const [streamedText, setStreamedText] = useState<string>(
    "Context verified via pgvector hybrid search: Extracting SLA thresholds with 100% source grounding from TwinProtocol.pdf."
  );
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  // Interactive Sandbox 04: Systems Scale Benchmark state
  const [isCached, setIsCached] = useState<boolean>(true);

  // Read URL hash on initial mount or change
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace("#situation-", "");
      if (hash && buildSituations.some((s) => s.id === hash)) {
        setActiveId(hash as BuildSituation["id"]);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Keyboard shortcut listener (1 to 4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "1") handleSelect("idea");
      else if (e.key === "2") handleSelect("product");
      else if (e.key === "3") handleSelect("ai");
      else if (e.key === "4") handleSelect("scale");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = useCallback((id: BuildSituation["id"]) => {
    setActiveId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#situation-${id}`);
    }
  }, []);

  const currentIndex = buildSituations.findIndex((s) => s.id === activeId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const current = buildSituations[safeIndex] || buildSituations[0];

  // AI Stream simulation runner
  const handleRunStream = () => {
    setIsStreaming(true);
    setStreamedText("");
    const fullText =
      "Synthesizing RAG context... Verified 4 PDF tables in 38ms. Citation anchors verified with zero hallucinations. Enterprise SLA confirmed: 99.9% uptime with <50ms P95 API response.";
    let i = 0;

    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setStreamedText(fullText.slice(0, i));
        i += 4;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 35);
  };

  // Optimistic UI interaction simulation
  const handleTestLatency = () => {
    if (!isOptimistic) {
      setIsSimulatingLag(true);
      setTimeout(() => {
        setItemsCount((c) => c + 1);
        setIsSimulatingLag(false);
      }, 550);
    } else {
      setItemsCount((c) => c + 1);
    }
  };

  return (
    <div className={styles.guide}>
      {/* ── Section Main Header ── */}
      <div className={styles.guideHeader}>
        <div className="datum-bar">
          <span className="datum-crosshair">+</span>
          <span>COLLABORATION BLUEPRINTS</span>
          <span className={styles.headerStatusDot} aria-hidden="true" />
          <span className={styles.headerStatusText}>ROADMAP EXPLORER</span>
        </div>
        <h2 className={styles.guideTitle}>Where does your product stand today?</h2>
        <p className={styles.guideIntro}>
          Select your stage below to inspect the engineering blueprint and test live interactive
          simulations for each phase of product maturity.
        </p>
      </div>

      {/* ── Two-Column Architectural Workbench ── */}
      <div className={styles.guideGrid}>
        {/* ── Left Column: Stepper Navigator ── */}
        <nav className={styles.stepperNav} aria-label="Product stage milestones">
          <div className={styles.stepperHeader}>
            <div className={styles.stepperHeaderLeft}>
              <span className={styles.stepperPulseDot} aria-hidden="true" />
              <span className={styles.stepperLabel}>STAGE NAVIGATOR</span>
            </div>
            <span
              className={styles.stepperKeyHint}
              aria-label="Keyboard shortcuts: Press 1 to 4"
            >
              <span className={styles.keyBadge}>1</span>
              <span>–</span>
              <span className={styles.keyBadge}>4</span>
            </span>
          </div>

          <div className={styles.stepperList} role="tablist" aria-orientation="vertical">
            {buildSituations.map((situation, idx) => {
              const isActive = activeId === situation.id;
              const shortcutKey = idx + 1;

              return (
                <button
                  key={situation.id}
                  type="button"
                  role="tab"
                  id={`tab-${situation.id}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={`${styles.stepperTabBtn} ${isActive ? styles.stepperTabBtnActive : ""}`}
                  onClick={() => handleSelect(situation.id)}
                >
                  {isActive && <span className={styles.tabAccentIndicator} aria-hidden="true" />}

                  <div className={styles.tabIconPlate}>
                    {renderStageIcon(situation.id)}
                  </div>

                  <div className={styles.tabMeta}>
                    <div className={styles.tabTopRow}>
                      <span className={styles.tabNum}>0{shortcutKey}</span>
                      <span className={styles.tabBadge}>{situation.badge}</span>
                    </div>
                    <span className={styles.tabTitle}>{situation.shortTitle}</span>
                    <span className={styles.tabTag}>{situation.shortTag}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </nav>

        {/* ── Right Column: Interactive Workbench Panel ── */}
        <article
          key={current.id}
          className={styles.workbenchPanel}
          role="tabpanel"
          aria-labelledby={`tab-${current.id}`}
        >
          {/* Blueprint Meta Header */}
          <div className={styles.workbenchHeader}>
            <div className={styles.workbenchMetaBar}>
              <div className={styles.stageLabelTag}>
                <span style={{ fontWeight: 700 }}>+</span>
                <span>{current.stageLabel}</span>
              </div>
              <span className={styles.sprintPill}>⚡ 2–4 WEEK ENGAGEMENT</span>
            </div>

            <h3 className={styles.workbenchTitle}>{current.title}</h3>
            <p className={styles.workbenchNarrative}>{current.recognition}</p>
          </div>

          {/* ── Live Interactive Sandbox Window ── */}
          <div className={styles.sandboxWindow}>
            <div className={styles.windowBar}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
                <span className={styles.windowTitle}>
                  {current.id === "idea" && "live-prototype.tsx"}
                  {current.id === "product" && "optimistic-cache.ts"}
                  {current.id === "ai" && "rag-stream-pipeline.ts"}
                  {current.id === "scale" && "db-telemetry-benchmark.sql"}
                </span>
              </div>
              <div className={styles.windowLiveTag}>
                <span className={styles.liveDotPulse} />
                <span>INTERACTIVE DEMO</span>
              </div>
            </div>

            <div className={styles.windowBody}>
              {/* Sandbox Demo 01: Greenfield MVP */}
              {current.id === "idea" && (
                <>
                  <p className={styles.sandboxDesc}>
                    Test how rapid UI prototyping transitions into a robust production stack:
                  </p>

                  {isProdMode ? (
                    <div className={styles.prodLoopCard}>
                      <div className={styles.prodLoopMeta}>
                        <span className={styles.prodLoopTitle}>
                          Production Checkout Loop v1
                        </span>
                        <span className={styles.prodLoopSub}>
                          Next.js App Router + Postgres Schema + Stripe Telemetry
                        </span>
                      </div>
                      <button
                        type="button"
                        className={styles.demoTriggerBtn}
                        onClick={() => setEventCount((c) => c + 1)}
                      >
                        Simulate User Action ({eventCount})
                      </button>
                    </div>
                  ) : (
                    <div className={styles.wireframeBox}>
                      <div className={styles.wireframeLine} style={{ width: "65%" }} />
                      <div className={styles.wireframeLine} style={{ width: "90%" }} />
                      <div className={styles.wireframeLine} style={{ width: "40%" }} />
                    </div>
                  )}

                  <div className={styles.telemetryLog}>
                    ⚡ Live Telemetry: {eventCount} production events recorded · TypeScript schema verified · Zero tech debt.
                  </div>
                </>
              )}

              {/* Sandbox Demo 02: UX Evolution & Speed */}
              {current.id === "product" && (
                <>
                  <p className={styles.sandboxDesc}>
                    Feel the tangible difference between server-blocked latency and optimistic UI:
                  </p>

                  <div className={styles.latencyCompareBox}>
                    <div>
                      <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                        Perceived Latency:
                      </span>
                      <div
                        className={`${styles.latencyScore} ${!isOptimistic ? styles.latencyScoreLag : ""}`}
                      >
                        {isOptimistic ? "< 16ms (Instant Optimistic)" : "550ms (Server Blocked)"}
                      </div>
                    </div>

                    <button
                      type="button"
                      className={styles.demoTriggerBtn}
                      onClick={handleTestLatency}
                      disabled={isSimulatingLag}
                    >
                      {isSimulatingLag ? "Waiting Server..." : `Test Click (Items: ${itemsCount})`}
                    </button>
                  </div>

                  <p className={styles.sandboxDesc}>
                    {isOptimistic
                      ? "✓ Optimistic mutations apply updates in sub-16ms, reconciling asynchronously without blocking the user."
                      : "⚠️ Notice the perceptible delay as the interface locks waiting for server roundtrip confirmation."}
                  </p>
                </>
              )}

              {/* Sandbox Demo 03: Applied AI Streaming */}
              {current.id === "ai" && (
                <>
                  <p className={styles.sandboxDesc}>
                    Experience real-time Server-Sent Events (SSE) stream grounded with pgvector citations:
                  </p>

                  <div className={styles.aiTerminal}>
                    <div>{streamedText}</div>
                    {isStreaming && (
                      <span style={{ color: "var(--color-accent)", marginLeft: "4px" }}>▋</span>
                    )}
                    <div className={styles.aiCitationsRow}>
                      <span className={styles.aiCitationBadge}>[TwinProtocol.pdf · Page 4]</span>
                      <span className={styles.aiCitationBadge}>[pgvector · cosine 0.94]</span>
                      <span className={styles.aiGuardrailBadge}>✓ Hallucination Guardrail: Passed</span>
                    </div>
                  </div>
                </>
              )}

              {/* Sandbox Demo 04: Systems Scale Benchmark */}
              {current.id === "scale" && (
                <>
                  <p className={styles.sandboxDesc}>
                    Simulated query optimization and Redis distributed caching on 100k+ records:
                  </p>

                  <div className={styles.benchmarkGaugeBox}>
                    <div className={styles.gaugeLabelsRow}>
                      <span style={{ color: "var(--text-secondary)" }}>
                        {isCached ? "Redis Tier + Compound Indexes" : "Unindexed Full Table Scan"}
                      </span>
                      <span style={{ color: isCached ? "#10b981" : "#ef4444", fontWeight: 600 }}>
                        {isCached ? "24 ms (96% Faster)" : "680 ms (Timeout Risk)"}
                      </span>
                    </div>
                    <div className={styles.gaugeTrack}>
                      <div className={isCached ? styles.gaugeFillFast : styles.gaugeFillSlow} />
                    </div>
                  </div>

                  <div className={styles.benchmarkStatsRow}>
                    <span className={styles.benchmarkStat}>Cache Hit Ratio: 99.4%</span>
                    <span className={styles.benchmarkStat}>Throughput: 12,500 req/s</span>
                    <span className={styles.benchmarkStat}>CPU Headroom: 10x</span>
                  </div>
                </>
              )}
            </div>

            {/* Window Footer Controls */}
            <div className={styles.windowFooter}>
              <div>
                {current.id === "idea" && (
                  <button
                    type="button"
                    className={styles.demoTriggerBtn}
                    onClick={() => setIsProdMode((p) => !p)}
                  >
                    Toggle: {isProdMode ? "View Blueprint Wireframe" : "View Production Full-Stack"}
                  </button>
                )}
                {current.id === "product" && (
                  <button
                    type="button"
                    className={styles.demoTriggerBtn}
                    onClick={() => setIsOptimistic((o) => !o)}
                  >
                    Switch: {isOptimistic ? "Try Laggy Network Mode" : "Try Optimistic Mode"}
                  </button>
                )}
                {current.id === "ai" && (
                  <button
                    type="button"
                    className={styles.demoTriggerBtn}
                    onClick={handleRunStream}
                    disabled={isStreaming}
                  >
                    {isStreaming ? "Streaming Tokens..." : "▶ Re-run SSE Stream"}
                  </button>
                )}
                {current.id === "scale" && (
                  <button
                    type="button"
                    className={styles.demoTriggerBtn}
                    onClick={() => setIsCached((c) => !c)}
                  >
                    Toggle: {isCached ? "Simulate Unindexed Bottleneck" : "Apply Index + Cache Tier"}
                  </button>
                )}
              </div>

              <span style={{ fontSize: "11px", color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                Live Sandbox · Interactive Sandbox
              </span>
            </div>
          </div>

          {/* ── Technical Scope & Deliverables Strip ── */}
          <div className={styles.deliverablesSection}>
            <span className={styles.sectionMiniLabel}>CORE SHIPPED DELIVERABLES</span>
            <div className={styles.deliverablesRow}>
              {current.deliverables.map((item) => (
                <span key={item} className={styles.deliverableItemChip}>
                  <span className={styles.checkMark}>✓</span>
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>

          {/* ── Measurable Production Impact & Actions ── */}
          <div className={styles.metricsAndActionsRow}>
            <div className={styles.metricsGroup}>
              {current.evidence.metrics.map((metric) => (
                <div key={metric.label} className={styles.metricBlock}>
                  <span className={styles.metricValue}>{metric.value}</span>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>
              ))}
            </div>

            <StudioButton href="#contact" variant="primary" size="md" arrow>
              Scope Stage 0{safeIndex + 1} Sprint
            </StudioButton>
          </div>
        </article>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import styles from "./BlueprintConcepts.module.css";
import { StudioButton } from "../StudioButton";

const STAGES = [
  {
    id: "idea",
    num: "01",
    title: "Zero to Launch",
    subtitle: "Greenfield MVP & rapid validation",
  },
  {
    id: "product",
    num: "02",
    title: "Product Evolution",
    subtitle: "UX overhaul & sub-100ms perceived speed",
  },
  {
    id: "ai",
    num: "03",
    title: "Applied AI Workflows",
    subtitle: "Grounded RAG & streaming copilot UI",
  },
  {
    id: "scale",
    num: "04",
    title: "Systems at Scale",
    subtitle: "DB query tuning & resilient queues",
  },
];

export function Concept3StepperSandbox() {
  const [activeStage, setActiveStage] = useState<string>("idea");

  // Stage 1 Interactive State: Wireframe vs Production Toggle + Like counter
  const [isProdMode, setIsProdMode] = useState<boolean>(true);
  const [eventCount, setEventCount] = useState<number>(1);

  // Stage 2 Interactive State: Optimistic vs Laggy Mode
  const [isOptimistic, setIsOptimistic] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<number>(3);
  const [isSimulatingLag, setIsSimulatingLag] = useState<boolean>(false);

  // Stage 3 Interactive State: AI Streaming Simulator
  const [streamedText, setStreamedText] = useState<string>(
    "Contract terms analyzed: 99.4% source confidence with pgvector retrieval."
  );
  const [isStreaming, setIsStreaming] = useState<boolean>(false);

  // Stage 4 Interactive State: Latency Benchmark Toggle
  const [isCached, setIsCached] = useState<boolean>(true);

  // Handle stream simulation
  const handleRunStream = () => {
    setIsStreaming(true);
    setStreamedText("");
    const fullText =
      "Synthesizing RAG context... Verified 4 PDF tables in 38ms. Citation anchors verified with zero hallucinations.";
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setStreamedText(fullText.slice(0, currentIndex));
        currentIndex += 4;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 40);
  };

  const handleTestLatency = () => {
    if (!isOptimistic) {
      setIsSimulatingLag(true);
      setTimeout(() => {
        setCartItems((c) => c + 1);
        setIsSimulatingLag(false);
      }, 550);
    } else {
      setCartItems((c) => c + 1);
    }
  };

  return (
    <div className={styles.scrubberCard} id="concept-sandbox">
      <div className={styles.sandboxGrid}>
        {/* ── Left Column: Stepper Tabs ── */}
        <div className={styles.stepperList} role="tablist" aria-label="Interactive stages">
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.stepperItemBtn} ${isActive ? styles.stepperItemBtnActive : ""}`}
                onClick={() => setActiveStage(stage.id)}
              >
                <span className={styles.stepperNumBadge}>{stage.num}</span>
                <div className={styles.stepperContent}>
                  <span className={styles.stepperTitle}>{stage.title}</span>
                  <span className={styles.stepperSub}>{stage.subtitle}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Right Column: Interactive Sandbox Window ── */}
        <div className={styles.sandboxCanvas}>
          <div className={styles.sandboxWindowHeader}>
            <div className={styles.sandboxWindowDots}>
              <span className={styles.sandboxDot} />
              <span className={styles.sandboxDot} />
              <span className={styles.sandboxDot} />
              <span className={styles.sandboxWindowTitle}>
                {activeStage === "idea" && "live-prototype.tsx"}
                {activeStage === "product" && "optimistic-cache.ts"}
                {activeStage === "ai" && "rag-stream-pipeline.ts"}
                {activeStage === "scale" && "db-telemetry-benchmark.sql"}
              </span>
            </div>
            <div className={styles.sandboxWindowLiveBadge}>
              <span className={styles.sandboxWindowLiveDot} />
              <span>INTERACTIVE DEMO</span>
            </div>
          </div>

          <div className={styles.sandboxBody}>
            {/* ── Sandbox 01: Greenfield Launch ── */}
            {activeStage === "idea" && (
              <>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                  Test how rapid prototyping transitions into a robust production stack:
                </p>

                {isProdMode ? (
                  <div className={styles.demoCodeCard}>
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: 600, color: "#fff" }}>
                        Production Checkout Loop v1
                      </div>
                      <div style={{ fontSize: "11px", color: "var(--text-tertiary)" }}>
                        PostgreSQL Schema + Stripe Webhook + Analytics
                      </div>
                    </div>
                    <button
                      type="button"
                      className={styles.sandboxActionBtn}
                      onClick={() => setEventCount((c) => c + 1)}
                    >
                      Trigger User Action ({eventCount})
                    </button>
                  </div>
                ) : (
                  <div className={styles.demoWireframeBox}>
                    <div className={styles.demoWireframeBar} style={{ width: "60%" }} />
                    <div className={styles.demoWireframeBar} style={{ width: "90%" }} />
                    <div className={styles.demoWireframeBar} style={{ width: "45%" }} />
                  </div>
                )}

                <div className={styles.demoLogFeed}>
                  ⚡ Telemetry Log: {eventCount} production events recorded · Zero tech debt.
                </div>
              </>
            )}

            {/* ── Sandbox 02: UX & Speed ── */}
            {activeStage === "product" && (
              <>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                  Compare traditional sluggish state with optimistic sub-100ms UI:
                </p>

                <div className={styles.speedSliderBar}>
                  <div>
                    <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                      Perceived Latency:
                    </span>
                    <div className={styles.speedMetricChip}>
                      {isOptimistic ? "< 16ms (Instant Optimistic)" : "550ms (Server Blocked)"}
                    </div>
                  </div>

                  <button
                    type="button"
                    className={styles.sandboxActionBtn}
                    onClick={handleTestLatency}
                    disabled={isSimulatingLag}
                  >
                    {isSimulatingLag ? "Waiting Server..." : `Test Click (Items: ${cartItems})`}
                  </button>
                </div>

                <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                  {isOptimistic
                    ? "✓ Optimistic mutations update the screen immediately, rolling back automatically on error."
                    : "⚠️ Notice the perceptible delay waiting for roundtrip backend response."}
                </div>
              </>
            )}

            {/* ── Sandbox 03: Applied AI ── */}
            {activeStage === "ai" && (
              <>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                  Experience real-time Server-Sent Events (SSE) stream with grounding citations:
                </p>

                <div className={styles.streamingTerminal}>
                  <div>{streamedText}</div>
                  {isStreaming && <span style={{ color: "var(--color-accent)" }}>▋</span>}
                  <div className={styles.streamingCitations}>
                    <span className={styles.citationTag}>[TwinProtocol.pdf · Page 4]</span>
                    <span className={styles.citationTag}>[pgvector · 0.94 similarity]</span>
                  </div>
                </div>
              </>
            )}

            {/* ── Sandbox 04: Systems Scale ── */}
            {activeStage === "scale" && (
              <>
                <p style={{ fontSize: "12px", color: "var(--text-secondary)", margin: 0 }}>
                  Simulated database query optimization on 100k+ records:
                </p>

                <div className={styles.latencyGaugeWrap}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px" }}>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {isCached ? "Redis Tier + Compound Index" : "Unindexed Full Table Scan"}
                    </span>
                    <span style={{ color: isCached ? "#10b981" : "#ef4444", fontWeight: 600 }}>
                      {isCached ? "24 ms (96% Faster)" : "680 ms (Timeout Risk)"}
                    </span>
                  </div>
                  <div className={styles.latencyGaugeTrack}>
                    <div
                      className={styles.latencyGaugeFill}
                      style={{
                        width: isCached ? "12%" : "95%",
                        background: isCached ? "#10b981" : "#ef4444",
                      }}
                    />
                  </div>
                </div>

                <div style={{ fontSize: "12px", color: "var(--text-tertiary)" }}>
                  Impact: 10x throughput headroom achieved with zero database hardware upgrade costs.
                </div>
              </>
            )}
          </div>

          {/* ── Sandbox Footer Controls ── */}
          <div className={styles.sandboxFooter}>
            <div>
              {activeStage === "idea" && (
                <button
                  type="button"
                  className={styles.sandboxActionBtn}
                  onClick={() => setIsProdMode((p) => !p)}
                >
                  Toggle: {isProdMode ? "View Wireframe Mode" : "View Production Mode"}
                </button>
              )}
              {activeStage === "product" && (
                <button
                  type="button"
                  className={styles.sandboxActionBtn}
                  onClick={() => setIsOptimistic((o) => !o)}
                >
                  Switch Mode: {isOptimistic ? "Try Laggy UI" : "Try Optimistic UI"}
                </button>
              )}
              {activeStage === "ai" && (
                <button
                  type="button"
                  className={styles.sandboxActionBtn}
                  onClick={handleRunStream}
                  disabled={isStreaming}
                >
                  {isStreaming ? "Streaming Tokens..." : "▶ Re-run SSE Stream"}
                </button>
              )}
              {activeStage === "scale" && (
                <button
                  type="button"
                  className={styles.sandboxActionBtn}
                  onClick={() => setIsCached((c) => !c)}
                >
                  Toggle: {isCached ? "Simulate Unindexed Bottleneck" : "Apply Index + Cache"}
                </button>
              )}
            </div>

            <StudioButton href="#contact" variant="primary" size="sm" arrow>
              Scope This Stage
            </StudioButton>
          </div>
        </div>
      </div>
    </div>
  );
}

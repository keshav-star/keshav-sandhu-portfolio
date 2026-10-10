"use client";

import { useState } from "react";
import styles from "./EngineeringLab.module.css";

type LabMode = "context" | "operations" | "performance";

interface LabSignalGraphicProps {
  mode: LabMode;
  title: string;
}

const LAB_AREAS: Array<{
  id: LabMode;
  index: string;
  label: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  systemLine: string[];
}> = [
  {
    id: "context",
    index: "01",
    label: "AI & CONTEXT",
    title: "Grounded answers from messy knowledge.",
    description:
      "Retrieval flows that preserve context, expose sources, and keep model behavior inspectable from document to response.",
    metric: "−40%",
    metricLabel: "Response path",
    systemLine: ["LangChain", "Vector retrieval", "Streaming UI", "Guardrails"],
  },
  {
    id: "operations",
    index: "02",
    label: "OPERATIONS",
    title: "Control without operational drag.",
    description:
      "Tenant boundaries, permission models, and traceable workflows that replace spreadsheets and manual handoffs.",
    metric: "50+",
    metricLabel: "Organizations",
    systemLine: ["Tenant isolation", "5-persona RBAC", "Audit trails", "Automation"],
  },
  {
    id: "performance",
    index: "03",
    label: "PERFORMANCE",
    title: "Speed lives at the system seams.",
    description:
      "Indexes, caching, API shapes, and telemetry tuned together so responsiveness survives real production traffic.",
    metric: "−35%",
    metricLabel: "Peak latency",
    systemLine: ["Query plans", "Redis caching", "API profiling", "Observability"],
  },
];

function LabSignalGraphic({ mode, title }: LabSignalGraphicProps) {
  return (
    <svg
      className={styles.signalGraphic}
      viewBox="0 0 640 340"
      role="img"
      aria-label={`${title} system diagram`}
    >
      <defs>
        <pattern id={`lab-grid-${mode}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" className={styles.gridLine} />
        </pattern>
        <marker id={`lab-arrow-${mode}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" className={styles.arrowHead} />
        </marker>
      </defs>

      <rect width="640" height="340" fill={`url(#lab-grid-${mode})`} />
      <path d="M24 24h42M24 24v42M616 316h-42M616 316v-42" className={styles.cornerMarks} />

      {mode === "context" && (
        <g className={styles.diagramEnter}>
          <g className={styles.documentNode}>
            <rect x="56" y="87" width="118" height="162" rx="3" />
            <path d="M80 122h69M80 146h55M80 170h69M80 194h45" />
            <path d="M137 87v37h37" />
            <text x="76" y="226">SOURCE_04.PDF</text>
          </g>

          <path
            d="M174 168C232 168 238 114 297 114M174 168C232 168 238 222 297 222"
            className={styles.flowLine}
            markerEnd={`url(#lab-arrow-${mode})`}
          />

          <g className={styles.vectorCluster}>
            <circle cx="327" cy="104" r="7" />
            <circle cx="365" cy="124" r="5" />
            <circle cx="314" cy="154" r="5" />
            <circle cx="352" cy="174" r="8" />
            <circle cx="323" cy="218" r="6" />
            <circle cx="370" cy="224" r="5" />
            <path d="m327 104 38 20-51 30 38 20-29 44 47 6" />
            <text x="304" y="269">VECTOR SPACE</text>
          </g>

          <path d="M386 168h77" className={styles.flowLine} markerEnd={`url(#lab-arrow-${mode})`} />

          <g className={styles.answerNode}>
            <path d="M475 105h111v105h-63l-26 24v-24h-22z" />
            <path d="M497 137h64M497 158h51M497 179h58" />
            <circle cx="571" cy="224" r="7" className={styles.pulseNode} />
            <text x="481" y="86">GROUNDED OUTPUT</text>
          </g>
        </g>
      )}

      {mode === "operations" && (
        <g className={styles.diagramEnter}>
          <circle cx="320" cy="170" r="88" className={styles.orbitLine} />
          <circle cx="320" cy="170" r="138" className={styles.orbitLineSecondary} />

          <g className={styles.tenantCore}>
            <rect x="264" y="119" width="112" height="102" rx="5" />
            <path d="M286 151h68M286 174h51M286 197h60" />
            <text x="279" y="104">TENANT CORE</text>
          </g>

          {[
            [320, 31, "ADMIN"],
            [452, 126, "CLIENT"],
            [402, 286, "AUDITOR"],
            [238, 286, "OPS"],
            [188, 126, "FIELD"],
          ].map(([cx, cy, label], index) => (
            <g key={String(label)} className={styles.roleNode} style={{ animationDelay: `${index * 90}ms` }}>
              <circle cx={Number(cx)} cy={Number(cy)} r="17" />
              <circle cx={Number(cx)} cy={Number(cy)} r="4" />
              <text x={Number(cx)} y={Number(cy) + 34} textAnchor="middle">{label}</text>
            </g>
          ))}

          <path d="M320 48v67M435 133l-60 25M392 272l-43-53M248 272l43-53M205 133l60 25" className={styles.permissionLine} />
          <path d="M304 170l12 12 25-29" className={styles.checkPath} />
        </g>
      )}

      {mode === "performance" && (
        <g className={styles.diagramEnter}>
          <path d="M62 270V68M62 270h526" className={styles.axisLine} />
          <path d="M63 231C121 224 139 203 184 206S248 189 288 183 354 155 395 158 461 117 502 123 551 84 588 83" className={styles.performancePathGhost} />
          <path d="M63 231C121 224 139 203 184 206S248 189 288 183 354 155 395 158 461 117 502 123 551 84 588 83" className={styles.performancePath} />

          {[128, 221, 314, 407, 500].map((x, index) => (
            <g key={x} className={styles.performanceBar} style={{ animationDelay: `${index * 80}ms` }}>
              <rect x={x} y={245 - index * 18} width="24" height={25 + index * 18} />
              <text x={x + 12} y="293" textAnchor="middle">0{index + 1}</text>
            </g>
          ))}

          <circle cx="588" cy="83" r="8" className={styles.pulseNode} />
          <path d="M520 60h69v46" className={styles.cornerCallout} />
          <text x="407" y="48">LATENCY / OPTIMIZED</text>
          <text x="78" y="88" className={styles.axisLabel}>THROUGHPUT</text>
          <text x="505" y="321" className={styles.axisLabel}>LOAD →</text>
        </g>
      )}
    </svg>
  );
}

export function EngineeringLab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = LAB_AREAS[activeIndex];

  return (
    <section id="lab" className={styles.labSection} aria-labelledby="lab-title">
      <div className="container">
        <div className={styles.labHeader}>
          <div>
            <div className="datum-bar">
              <span className="datum-crosshair">+</span>
              <span>ENGINEERING LAB // LIVE SYSTEM STUDIES</span>
            </div>
            <h2 id="lab-title">The interface is only where the system becomes visible.</h2>
          </div>
          <p>
            Three areas where product craft and engineering depth have to work as one—from useful AI to controlled operations and speed under load.
          </p>
        </div>

        <div className={styles.labConsole}>
          <div className={styles.consoleTopbar}>
            <span><i /> SYSTEM STUDY / {active.index}</span>
            <span>HOVER OR SELECT TO INSPECT</span>
          </div>

          <div className={styles.consoleBody}>
            <div className={styles.labTabs} role="tablist" aria-label="Engineering practice areas">
              {LAB_AREAS.map((area, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-controls="lab-system-panel"
                  key={area.id}
                  className={`${styles.labTab} ${index === activeIndex ? styles.labTabActive : ""}`}
                  onClick={() => setActiveIndex(index)}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <span className={styles.tabIndex}>{area.index}</span>
                  <span className={styles.tabCopy}>
                    <small>{area.label}</small>
                    <strong>{area.title}</strong>
                  </span>
                  <span className={styles.tabArrow}>↗</span>
                </button>
              ))}
            </div>

            <div id="lab-system-panel" className={styles.systemPanel} role="tabpanel" aria-live="polite" key={active.id}>
              <div className={styles.signalCanvas}>
                <LabSignalGraphic mode={active.id} title={active.title} />
                <div className={styles.metricReadout}>
                  <span>{active.metricLabel}</span>
                  <strong>{active.metric}</strong>
                </div>
              </div>

              <div className={styles.systemBrief}>
                <div>
                  <span className={styles.briefLabel}>{active.label} / WHAT HOLDS UP</span>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                </div>
                <div className={styles.systemLine} aria-label="System capabilities">
                  {active.systemLine.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

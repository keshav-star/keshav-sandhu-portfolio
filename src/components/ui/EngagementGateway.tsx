"use client";

import { useState } from "react";
import { CalBookingButton } from "./CalBookingButton";
import { StudioButton } from "./StudioButton";
import styles from "./EngagementGateway.module.css";

interface EngagementOrbitProps {
  stage: number;
  label: string;
}

const ENGAGEMENTS = [
  {
    id: "launch",
    index: "01",
    tab: "Launch",
    kicker: "0 → 1 PRODUCT BUILD",
    headline: "Turn a strong product thesis into something people can use.",
    detail:
      "Shape the smallest credible release, establish the architecture, and ship a production-ready product without burying the next iteration in shortcuts.",
    firstMove: "A focused product and technical brief",
    timeline: "2–4 week first release",
    subject: "0 to 1 product build",
  },
  {
    id: "evolve",
    index: "02",
    tab: "Evolve",
    kicker: "PRODUCT & SYSTEM MODERNIZATION",
    headline: "Remove the friction that is slowing users and the team behind them.",
    detail:
      "Find the costly seams across experience, code, and workflow—then modernize the path that creates the most leverage first.",
    firstMove: "A friction and architecture audit",
    timeline: "2–3 week focused sprint",
    subject: "Product modernization sprint",
  },
  {
    id: "scale",
    index: "03",
    tab: "Scale",
    kicker: "PERFORMANCE & RELIABILITY",
    headline: "Make the system ready for the load, complexity, and trust ahead.",
    detail:
      "Trace the real bottlenecks, harden permissions and data paths, and leave behind a system that is easier to observe and operate.",
    firstMove: "A production bottleneck map",
    timeline: "3–5 week hardening pass",
    subject: "Performance and scale engagement",
  },
];

function EngagementOrbit({ stage, label }: EngagementOrbitProps) {
  const progressPath = ["M89 236C136 148 202 111 320 110", "M89 236C185 169 302 126 420 147", "M89 236C218 224 376 188 544 78"][stage];

  return (
    <svg className={styles.orbitGraphic} viewBox="0 0 640 390" role="img" aria-label={`${label} engagement path`}>
      <defs>
        <radialGradient id="engagement-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
        <marker id="engagement-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 10 5 0 10z" className={styles.orbitArrow} />
        </marker>
      </defs>

      <circle cx="320" cy="195" r="178" className={styles.radarRing} />
      <circle cx="320" cy="195" r="126" className={styles.radarRing} />
      <circle cx="320" cy="195" r="74" className={styles.radarRing} />
      <path d="M320 17v356M142 195h356" className={styles.radarAxis} />
      <circle cx="320" cy="195" r="190" fill="url(#engagement-glow)" className={styles.glowField} />

      <g className={styles.stageMarkers}>
        <g>
          <circle cx="89" cy="236" r="14" />
          <circle cx="89" cy="236" r="4" />
          <text x="66" y="270">BRIEF</text>
        </g>
        <g>
          <circle cx="320" cy="110" r="14" />
          <circle cx="320" cy="110" r="4" />
          <text x="295" y="85">BUILD</text>
        </g>
        <g>
          <circle cx="544" cy="78" r="14" />
          <circle cx="544" cy="78" r="4" />
          <text x="520" y="53">SCALE</text>
        </g>
      </g>

      <path d="M89 236C180 90 390 238 544 78" className={styles.orbitGhostPath} />
      <path d={progressPath} className={styles.orbitProgressPath} markerEnd="url(#engagement-arrow)" />
      <circle cx={stage === 0 ? 320 : stage === 1 ? 420 : 544} cy={stage === 0 ? 110 : stage === 1 ? 147 : 78} r="8" className={styles.activeNode} />

      <g className={styles.orbitReadout}>
        <rect x="220" y="298" width="200" height="48" rx="2" />
        <text x="238" y="318">SELECTED PATH / 0{stage + 1}</text>
        <text x="238" y="337">{label.toUpperCase()}</text>
      </g>
    </svg>
  );
}

export function EngagementGateway() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ENGAGEMENTS[activeIndex];
  const emailHref = `mailto:keshavsandhu.me@gmail.com?subject=${encodeURIComponent(active.subject)}`;

  return (
    <section id="contact" className={styles.gatewaySection} aria-labelledby="contact-title">
      <div className={styles.gatewayGrid} aria-hidden="true" />
      <div className="container">
        <div className={styles.gatewayHeader}>
          <div className="datum-bar">
            <span className="datum-crosshair">+</span>
            <span>SELECT ENGAGEMENTS // CHOOSE A STARTING POINT</span>
          </div>
          <div className={styles.gatewayTitleRow}>
            <h2 id="contact-title">What needs to move next?</h2>
            <p>
              Pick the constraint closest to yours. We can turn it into a clear first move—without a bloated discovery process.
            </p>
          </div>
        </div>

        <div className={styles.gatewayShell}>
          <div className={styles.pathSelector} role="tablist" aria-label="Choose an engagement path">
            {ENGAGEMENTS.map((engagement, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-controls="engagement-panel"
                key={engagement.id}
                onClick={() => setActiveIndex(index)}
                className={`${styles.pathButton} ${index === activeIndex ? styles.pathButtonActive : ""}`}
              >
                <span>{engagement.index}</span>
                <strong>{engagement.tab}</strong>
                <i aria-hidden="true" />
              </button>
            ))}
          </div>

          <div id="engagement-panel" className={styles.gatewayPanel} role="tabpanel">
            <div className={styles.gatewayCopy} key={`copy-${active.id}`} aria-live="polite">
              <span className={styles.engagementKicker}>{active.kicker}</span>
              <h3>{active.headline}</h3>
              <p>{active.detail}</p>

              <dl className={styles.engagementFacts}>
                <div>
                  <dt>FIRST MOVE</dt>
                  <dd>{active.firstMove}</dd>
                </div>
                <div>
                  <dt>TYPICAL START</dt>
                  <dd>{active.timeline}</dd>
                </div>
              </dl>

              <div className={styles.gatewayActions}>
                <StudioButton href={emailHref} variant="primary" size="md">
                  Start with this path
                </StudioButton>
                <CalBookingButton />
              </div>
            </div>

            <div className={styles.orbitPanel} key={`orbit-${active.id}`}>
              <div className={styles.orbitTopbar}>
                <span>ENGAGEMENT MAP</span>
                <span><i /> ACCEPTING SELECT WORK</span>
              </div>
              <EngagementOrbit stage={activeIndex} label={active.tab} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

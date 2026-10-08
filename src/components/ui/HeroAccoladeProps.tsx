"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "./HeroAccoladeProps.module.css";

/* ────────────────────────────────────────────────────────
   Each prop is a tiny 18×18 icon dot in the hero whitespace.
   On hover, a polished card appears nearby with rich info.
   ──────────────────────────────────────────────────────── */

interface PropData {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  detail: string;
  accent?: string; /* override accent color */
}

const PROPS: PropData[] = [
  {
    id: "rating",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2l2.9 6.26L22 9.27l-5 5.14L18.18 22 12 18.56 5.82 22 7 14.41 2 9.27l7.1-1.01L12 2z" />
      </svg>
    ),
    title: "5-Star Client Rating",
    subtitle: "Consistent 5.0 / 5.0 across engagements",
    detail: "Recognized for architectural clarity, on-time delivery, and exceeding technical expectations on every project.",
  },
  {
    id: "award",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
    title: "Employee of the Month",
    subtitle: "@ Scalacode",
    detail: "Awarded for engineering initiative, high-velocity shipment, and consistently delivering beyond project scope.",
  },
  {
    id: "releases",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "100+ Production Releases",
    subtitle: "Zero-downtime standard",
    detail: "Shipped across multi-tenant SaaS platforms, applied AI workflows, and governance portals with rigorous deployment discipline.",
  },
  {
    id: "react",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    ),
    title: "Expertise: React & Next.js",
    subtitle: "Design Systems · RSC · App Router",
    detail: "Deep full-stack fluency bridging high-craft interaction design with server components, streaming, and edge-deployed performance.",
  },
  {
    id: "fuel",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
        <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
        <line x1="6" y1="2" x2="6" y2="4" />
        <line x1="10" y1="2" x2="10" y2="4" />
        <line x1="14" y1="2" x2="14" y2="4" />
      </svg>
    ),
    title: "Fuel",
    subtitle: "Filter Coffee & Clean Architecture",
    detail: "Powered by pour-overs, mechanical keyboards, and the pursuit of code that reads as clearly as it runs.",
  },
];

function PropDot({
  data,
  className = "",
}: {
  data: PropData;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [cardSide, setCardSide] = useState<"right" | "left">("right");
  const [cardVAlign, setCardVAlign] = useState<"center" | "down" | "up">("center");
  const dotRef = useRef<HTMLDivElement>(null);

  const updateCardPosition = useCallback(() => {
    if (dotRef.current) {
      const rect = dotRef.current.getBoundingClientRect();
      setCardSide(rect.left > window.innerWidth / 2 ? "left" : "right");
      
      // If near sticky navbar (top < 240px), align downwards to prevent clipping under header
      if (rect.top < 240) {
        setCardVAlign("down");
      } else if (window.innerHeight - rect.bottom < 220) {
        setCardVAlign("up");
      } else {
        setCardVAlign("center");
      }
    }
  }, []);

  useEffect(() => {
    updateCardPosition();
    window.addEventListener("resize", updateCardPosition);
    return () => window.removeEventListener("resize", updateCardPosition);
  }, [updateCardPosition]);

  return (
    <div
      ref={dotRef}
      className={`${styles.propDot} ${className} ${isOpen ? styles.dotOpen : ""}`}
      onMouseEnter={() => { updateCardPosition(); setIsOpen(true); }}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => { updateCardPosition(); setIsOpen(true); }}
      onBlur={() => setIsOpen(false)}
      tabIndex={0}
      role="button"
      aria-label={`${data.title}: ${data.subtitle}`}
      aria-expanded={isOpen}
    >
      {/* The tiny icon glyph */}
      <span className={styles.dotIcon}>{data.icon}</span>

      {/* Pulsing ring hint */}
      <span className={styles.dotPulse} aria-hidden="true" />

      {/* Rich hover card */}
      <div
        className={`${styles.hoverCard} ${isOpen ? styles.cardVisible : ""} ${
          cardSide === "left" ? styles.cardLeft : styles.cardRight
        } ${
          cardVAlign === "down"
            ? styles.cardVAlignDown
            : cardVAlign === "up"
            ? styles.cardVAlignUp
            : ""
        }`}
        role="tooltip"
      >
        <div className={styles.cardAccent} />
        <div className={styles.cardBody}>
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>{data.icon}</span>
            <span className={styles.cardTitle}>{data.title}</span>
          </div>
          <div className={styles.cardSubtitle}>{data.subtitle}</div>
          <div className={styles.cardDivider} />
          <p className={styles.cardDetail}>{data.detail}</p>
        </div>
      </div>
    </div>
  );
}

export function HeroScatteredProps() {
  return (
    <div className={styles.scatteredContainer} aria-label="Professional highlights scattered across hero">
      {PROPS.map((prop, i) => (
        <PropDot
          key={prop.id}
          data={prop}
          className={styles[`pos${i + 1}` as keyof typeof styles] as string}
        />
      ))}
    </div>
  );
}

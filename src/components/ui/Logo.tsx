import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  variant?: "full" | "wordmark" | "monogram";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "full", size = "md", className = "" }: LogoProps) {
  return (
    <div
      className={`${styles.logoContainer} ${styles[size]} ${className}`}
      aria-label="Keshav Sandhu — Product Engineer / Builder"
    >
      {(variant === "full" || variant === "monogram") && (
        <span className={styles.monogram} aria-hidden="true">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.monogramSvg}
          >
            {/* Architectural Frame with subtle corner notch */}
            <rect
              x="1"
              y="1"
              width="30"
              height="30"
              stroke="currentColor"
              strokeWidth="1"
              strokeOpacity="0.22"
              fill="none"
            />

            {/* Letter K: Spine and architectural miters */}
            <path
              d="M8.5 7.5V24.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
            <path
              d="M17 8.5L9.5 16"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
            />
            <path
              d="M12 13.5L18.5 24.5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="square"
            />

            {/* Letter S: Geometric structural lines */}
            <path
              d="M24.5 9.5H20C19.4477 9.5 19 9.94772 19 10.5V14C19 14.5523 19.4477 15 20 15H23.5C24.0523 15 24.5 15.4477 24.5 16V22.5C24.5 23.0523 24.0523 23.5 23.5 23.5H19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />

            {/* Signature Motif: Signal Terracotta Registration Pip */}
            <rect x="23" y="6" width="2.5" height="2.5" fill="var(--color-accent)" />
          </svg>
        </span>
      )}

      {(variant === "full" || variant === "wordmark") && (
        <div className={styles.wordmarkBlock}>
          {/* PRIMARY: Keshav Sandhu */}
          <span className={styles.primaryName}>KESHAV SANDHU</span>

          {/* SECONDARY: Product Engineer / Builder + SUPPORTING: Studio */}
          <span className={styles.roleSubtitle}>
            <span className={styles.discipline}>PRODUCT ENGINEER / BUILDER</span>
            <span className={styles.dotSeparator}>//</span>
            <span className={styles.studioTag}>STUDIO</span>
          </span>
        </div>
      )}
    </div>
  );
}

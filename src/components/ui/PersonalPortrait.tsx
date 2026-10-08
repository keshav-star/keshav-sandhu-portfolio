"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./PersonalPortrait.module.css";

interface PersonalPortraitProps {
  src?: string;
  alt?: string;
  caption?: string;
  monochrome?: boolean;
  objectPosition?: string;
  priority?: boolean;
  className?: string;
}

export function PersonalPortrait({
  src,
  alt = "Keshav Sandhu - Product Engineer & Builder",
  caption,
  monochrome = false,
  objectPosition = "center center",
  priority = false,
  className = "",
}: PersonalPortraitProps) {
  const [isActive, setIsActive] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // When hovering on image or any popped-out icon: reveal and cancel pending hide timer
  const handleMouseEnter = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    setIsActive(true);
  }, []);

  // When hovering away: wait 3 seconds before hiding back behind image
  const handleMouseLeave = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    hideTimerRef.current = setTimeout(() => {
      setIsActive(false);
    }, 3000);
  }, []);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);

  // Copy email with tactile tooltip feedback
  const handleCopyEmail = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText("keshavsandhu.me@gmail.com");
      setCopiedEmail(true);
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
      copyTimeoutRef.current = setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    }
  }, []);

  return (
    <figure
      ref={containerRef}
      className={`${styles.figure} ${className}`}
      aria-label="Keshav Sandhu - Portrait & Interactive Contact Channels"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${styles.interactiveContainer} ${isActive ? styles.containerActive : ""}`}>
        {/* ================================================================
            PRIMARY LAYER: TRANSFORMING IMAGE FRAME
            ================================================================ */}
        <div
          className={`${styles.frame} ${isActive ? styles.frameActive : ""}`}
          tabIndex={0}
          role="region"
          aria-label="Keshav Sandhu portrait. Hover to reveal contact icons."
        >
          {/* Corner registration crosshairs */}
          <span className={`${styles.crosshair} ${styles.tl}`}>+</span>
          <span className={`${styles.crosshair} ${styles.tr}`}>+</span>
          <span className={`${styles.crosshair} ${styles.bl}`}>+</span>
          <span className={`${styles.crosshair} ${styles.br}`}>+</span>

          {/* Signature Terracotta Registration Pip with tactile ripple */}
          <span
            className={`${styles.signaturePip} ${isActive ? styles.pipActive : ""}`}
            aria-hidden="true"
          >
            <span className={styles.pipPulseRing} />
          </span>

          {src ? (
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectPosition }}
                className={`${styles.image} ${monochrome ? styles.monochrome : ""}`}
                priority={priority}
              />
              <div className={styles.imageOverlay} />
            </div>
          ) : (
            <div className={styles.placeholderCanvas}>
              <div className={styles.draftingGrid} />
              <div className={styles.placeholderContent}>
                <div className={styles.portraitTag}>
                  <span className={styles.tagPrefix}>PLATE //</span>
                  <span>PERSONAL PORTRAIT</span>
                </div>
                <div className={styles.placeholderTitle}>[ KESHAV SANDHU ]</div>
              </div>
            </div>
          )}
        </div>

        {/* ================================================================
            CREATIVE POPPING CONTACT ICONS (Outside, away from image)
            Tucked behind by default, pops outward with hopping/pulse animation
            Retreats 3 seconds after mouse leaves
            ================================================================ */}
        <div className={styles.iconsOrbitLayer} aria-label="Quick contact channels">
          {/* 1. LinkedIn Icon (Top-Right outside) */}
          <a
            href="https://linkedin.com/in/keshavsandhu"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.popIconBtn} ${styles.iconLinkedIn} ${isActive ? styles.iconBtnActive : ""}`}
            title="LinkedIn Profile: /in/keshavsandhu"
            aria-label="Open LinkedIn profile"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.pulseAura} aria-hidden="true" />
            <span className={styles.iconGlyph}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
              </svg>
            </span>
            <span className={styles.iconTooltip}>LinkedIn ↗</span>
          </a>

          {/* 2. Direct Email Icon (Bottom-Right outside) with 1-Click Copy & Mailto */}
          <button
            type="button"
            className={`${styles.popIconBtn} ${styles.iconEmail} ${isActive ? styles.iconBtnActive : ""}`}
            onClick={handleCopyEmail}
            title={copiedEmail ? "Email copied!" : "Click to copy email address"}
            aria-label="Direct email: click to copy keshavsandhu.me@gmail.com"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.pulseAura} aria-hidden="true" />
            <span className={styles.iconGlyph}>
              {copiedEmail ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
            </span>
            <span className={`${styles.iconTooltip} ${copiedEmail ? styles.tooltipSuccess : ""}`}>
              {copiedEmail ? "Copied! ✓" : "Copy Email ✉"}
            </span>
          </button>

          {/* 3. Engineering Résumé Icon (Top-Left outside) */}
          <a
            href="/resume-keshav-sandhu.docx"
            className={`${styles.popIconBtn} ${styles.iconResume} ${isActive ? styles.iconBtnActive : ""}`}
            title="Download Engineering Résumé DOCX"
            aria-label="Download engineering résumé DOCX"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.pulseAura} aria-hidden="true" />
            <span className={styles.iconGlyph}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
            </span>
            <span className={styles.iconTooltip}>Résumé ↓</span>
          </a>

          {/* 4. Direct Connect / Chat Icon (Bottom-Left outside) */}
          <a
            href="#contact"
            className={`${styles.popIconBtn} ${styles.iconContact} ${isActive ? styles.iconBtnActive : ""}`}
            title="Direct Contact / Get in Touch"
            aria-label="Get in touch"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span className={styles.pulseAura} aria-hidden="true" />
            <span className={styles.iconGlyph}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
            <span className={styles.iconTooltip}>Contact →</span>
          </a>
        </div>
      </div>

      {caption && (
        <figcaption className={styles.caption}>
          <span className={styles.captionPip}>●</span>
          <span className={styles.captionText}>{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}

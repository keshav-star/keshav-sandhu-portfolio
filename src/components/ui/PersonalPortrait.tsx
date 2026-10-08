"use client";

import React, { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [isTapped, setIsTapped] = useState(false);

  const isActive = isHovered || isTapped;

  const toggleTap = () => {
    setIsTapped((prev) => !prev);
  };

  return (
    <figure
      className={`${styles.figure} ${className}`}
      aria-label="Keshav Sandhu - Portrait Plate"
    >
      <div
        className={`${styles.interactiveContainer} ${isActive ? styles.containerActive : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={toggleTap}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleTap();
          }
        }}
        tabIndex={0}
        role="button"
        aria-pressed={isActive}
        aria-label="Keshav Sandhu portrait plate. Interactive on hover."
      >
        {/* Architectural drafting backplate that shifts on interaction */}
        <div className={styles.blueprintBackplate} aria-hidden="true">
          <div className={styles.backplateCrossTL}>+</div>
          <div className={styles.backplateCrossBR}>+</div>
        </div>

        {/* Primary Transforming Image Frame */}
        <div className={`${styles.frame} ${isActive ? styles.frameActive : ""}`}>
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

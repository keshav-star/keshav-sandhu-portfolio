import React from "react";
import Image from "next/image";
import styles from "./MediaPlaceholder.module.css";

interface MediaPlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: "16/10" | "16/9" | "4/3" | "1/1" | "3/2";
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function MediaPlaceholder({
  label = "[PROJECT COVER IMAGE]",
  sublabel,
  aspectRatio = "16/10",
  imageSrc,
  imageAlt = "",
  className = "",
}: MediaPlaceholderProps) {
  return (
    <div
      className={`${styles.canvas} ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 960px) 100vw, 40vw"
          className={styles.image}
        />
      )}

      {/* Corner Drafting Marks */}
      <span className={`${styles.corner} ${styles.tl}`}>+</span>
      <span className={`${styles.corner} ${styles.tr}`}>+</span>
      <span className={`${styles.corner} ${styles.bl}`}>+</span>
      <span className={`${styles.corner} ${styles.br}`}>+</span>

      {/* Center Label & Ratio Spec */}
      {!imageSrc && (
        <div className={styles.centerBlock}>
          <div className={styles.label}>{label}</div>
          {sublabel && <div className={styles.sublabel}>{sublabel}</div>}
          <div className={styles.ratioSpec}>RATIO // {aspectRatio}</div>
        </div>
      )}
    </div>
  );
}

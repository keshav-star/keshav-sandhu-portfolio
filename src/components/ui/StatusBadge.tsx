import React from "react";
import styles from "./StatusBadge.module.css";

interface StatusBadgeProps {
  statusText?: string;
  location?: string;
  pulse?: boolean;
  className?: string;
}

export function StatusBadge({
  statusText = "AVAILABLE FOR SELECT ENGAGEMENTS",
  location = "NOIDA, IN [UTC+5:30]",
  pulse = true,
  className = "",
}: StatusBadgeProps) {
  return (
    <div className={`${styles.badge} ${className}`}>
      <span className={styles.dotWrapper}>
        {pulse && <span className={styles.pulseRing} />}
        <span className={styles.statusDot} />
      </span>
      <span className={styles.statusText}>{statusText}</span>
      {location && (
        <>
          <span className={styles.divider}>//</span>
          <span className={styles.locationText}>{location}</span>
        </>
      )}
    </div>
  );
}

import React from "react";
import styles from "./DatumLabel.module.css";

interface DatumLabelProps {
  label: string;
  prefix?: string;
  variant?: "standard" | "bracketed" | "accent" | "bordered";
  className?: string;
}

export function DatumLabel({
  label,
  prefix,
  variant = "standard",
  className = "",
}: DatumLabelProps) {
  return (
    <span className={`${styles.datum} ${styles[variant]} ${className}`}>
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <span className={styles.label}>{label}</span>
    </span>
  );
}

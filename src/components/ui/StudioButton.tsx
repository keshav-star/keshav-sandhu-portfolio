import React from "react";
import styles from "./StudioButton.module.css";

interface StudioButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "bracket";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  shimmer?: boolean;
  indicator?: boolean;
  icon?: React.ReactNode;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function StudioButton({
  variant = "primary",
  size = "md",
  arrow = true,
  shimmer = true,
  indicator = false,
  icon,
  href,
  external = false,
  children,
  className = "",
  ...props
}: StudioButtonProps) {
  const hasShimmer = shimmer && (variant === "primary" || variant === "secondary");

  const content = (
    <>
      {hasShimmer && <span className={styles.shimmerEffect} aria-hidden="true" />}
      {indicator && (
        <span className={styles.indicatorDot} aria-hidden="true">
          <span className={styles.indicatorPulse} />
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {(icon || arrow) && variant !== "bracket" && (
        <span className={styles.arrowDisc} aria-hidden="true">
          {icon ? (
            icon
          ) : (
            <svg
              className={styles.arrowSvg}
              width="13"
              height="13"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      )}
    </>
  );

  const hasIconDisc = (Boolean(icon) || arrow) && variant !== "bracket";
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${!hasIconDisc ? styles.noIcon : ""} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}


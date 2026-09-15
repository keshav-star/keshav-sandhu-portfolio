import React from "react";
import styles from "./StudioButton.module.css";

interface StudioButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "bracket";
  size?: "sm" | "md" | "lg";
  arrow?: boolean;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function StudioButton({
  variant = "primary",
  size = "md",
  arrow = true,
  href,
  external = false,
  children,
  className = "",
  ...props
}: StudioButtonProps) {
  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;

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

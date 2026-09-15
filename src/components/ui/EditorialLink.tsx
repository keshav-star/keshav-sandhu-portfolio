import React from "react";
import styles from "./EditorialLink.module.css";

interface EditorialLinkProps {
  href: string;
  external?: boolean;
  arrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function EditorialLink({
  href,
  external = false,
  arrow = true,
  children,
  className = "",
}: EditorialLinkProps) {
  return (
    <a
      href={href}
      className={`${styles.editorialLink} ${className}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className={styles.text}>{children}</span>
      {arrow && (
        <span className={styles.arrow} aria-hidden="true">
          {external ? "↗" : "→"}
        </span>
      )}
    </a>
  );
}

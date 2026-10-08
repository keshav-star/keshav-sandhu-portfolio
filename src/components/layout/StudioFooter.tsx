import React from "react";
import styles from "./StudioFooter.module.css";

export function StudioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.colophonBlock}>
          <div className={styles.studioName}>KESHAV SANDHU // ENGINEERING PRACTICE</div>
          <p className={styles.colophonText}>
            Full-stack product engineer with experience designing and building resilient digital products,
            scalable architectures, and high-performance web systems.
          </p>
        </div>

        <div className={styles.metadataGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>LOCATION //</span>
            <span className={styles.metaValue}>NOIDA, INDIA [UTC+5:30]</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PROFILE //</span>
            <a className={styles.metaLink} href="https://linkedin.com/in/keshavsandhu" target="_blank" rel="noopener noreferrer">LINKEDIN ↗</a>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>RÉSUMÉ //</span>
            <a className={styles.metaLink} href="/resume-keshav-sandhu.docx">DOWNLOAD DOCX ↓</a>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>CONTACT //</span>
            <a className={styles.metaLink} href="mailto:keshavsandhu.me@gmail.com">KESHAVSANDHU.ME@GMAIL.COM</a>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>COPYRIGHT //</span>
            <span className={styles.metaValue}>© {currentYear} KESHAV SANDHU. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

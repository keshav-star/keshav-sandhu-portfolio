import React from "react";
import styles from "./StudioFooter.module.css";
import { DatumLabel } from "../ui/DatumLabel";

export function StudioFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.colophonBlock}>
          <div className={styles.studioName}>KESHAV SANDHU // ENGINEERING PRACTICE</div>
          <p className={styles.colophonText}>
            Operating at the intersection of full-stack product engineering, backend architectures,
            and applied AI systems. Designed and implemented with measured architectural restraint.
          </p>
        </div>

        <div className={styles.metadataGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>LOCATION //</span>
            <span className={styles.metaValue}>NOIDA, INDIA [UTC+5:30]</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>COORDINATES //</span>
            <span className={styles.metaValue}>28.5355° N, 77.3910° E</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TYPOGRAPHY //</span>
            <span className={styles.metaValue}>INSTRUMENT SERIF + PLUS JAKARTA SANS</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>COLOPHON //</span>
            <span className={styles.metaValue}>© {currentYear} KESHAV SANDHU. ALL RIGHTS RESERVED.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

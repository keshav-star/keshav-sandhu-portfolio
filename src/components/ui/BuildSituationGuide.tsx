import React from "react";
import styles from "./BuildSituationGuide.module.css";
import { buildSituations } from "@/content/buildSituations";
import { SituationBrief } from "./SituationBrief";
import { SituationIndex } from "./SituationIndex";

export function BuildSituationGuide() {
  return (
    <div className={styles.guide}>
      <div className={styles.guideHeader}>
        <div className="datum-bar">
          <span className="datum-crosshair">+</span>
          <span>A PRACTICAL STARTING POINT</span>
        </div>
        <h2 className={styles.guideTitle}>What are you trying to build?</h2>
        <p className={styles.guideIntro}>
          Different products need different starting points. Pick the situation closest to yours.
        </p>
      </div>

      <div className={styles.guideGrid}>
        <SituationIndex situations={buildSituations} />
        <div className={styles.briefs}>
          {buildSituations.map((situation) => (
            <SituationBrief key={situation.id} situation={situation} />
          ))}
        </div>
      </div>
    </div>
  );
}

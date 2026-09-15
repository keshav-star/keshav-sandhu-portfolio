import React from "react";
import styles from "./BuildSituationGuide.module.css";
import { DatumLabel } from "./DatumLabel";
import { EditorialLink } from "./EditorialLink";
import type { BuildSituation, ContributionArea } from "@/content/buildSituations";

const contributionAreas: ContributionArea[] = [
  "Interface",
  "Application",
  "API",
  "Data",
  "AI",
  "Infrastructure",
];

interface SituationBriefProps {
  situation: BuildSituation;
}

export function SituationBrief({ situation }: SituationBriefProps) {
  const evidenceContent = (
    <span className={styles.evidenceCopy}>
      <span className={styles.evidenceLabel}>{situation.evidence.label}</span>
      <span className={styles.evidenceDetail}>{situation.evidence.detail}</span>
    </span>
  );

  return (
    <article
      id={`situation-${situation.id}`}
      className={styles.brief}
      aria-labelledby={`situation-title-${situation.id}`}
    >
      <div className={styles.briefHeader}>
        <DatumLabel label={`SITUATION ${situation.index}`} variant="accent" />
        <h3
          id={`situation-title-${situation.id}`}
          className={styles.briefTitle}
          tabIndex={-1}
        >
          {situation.title}
        </h3>
        <p className={styles.briefRecognition}>{situation.recognition}</p>
      </div>

      <div className={styles.briefDetails}>
        <div className={styles.thoughtsBlock}>
          <span className={styles.detailLabel}>WHAT I&apos;D THINK ABOUT FIRST</span>
          <ul className={styles.thoughtsList}>
            {situation.firstThoughts.map((thought) => (
              <li key={thought}>{thought}</li>
            ))}
          </ul>
        </div>

        <div className={styles.contributionBlock}>
          <span className={styles.detailLabel}>WHERE I CAN CONTRIBUTE</span>
          <div className={styles.areaList} aria-label="Relevant product and system areas">
            {contributionAreas.map((area) => {
              const isRelevant = situation.contributionAreas.includes(area);

              return (
                <span
                  key={area}
                  className={`${styles.area} ${isRelevant ? styles.areaRelevant : ""}`}
                >
                  {area}
                </span>
              );
            })}
          </div>
          <p className={styles.contribution}>{situation.contribution}</p>
        </div>
      </div>

      <div className={`${styles.evidence} ${styles[`evidence${situation.evidence.kind}`]}`}>
        {situation.evidence.href ? (
          <EditorialLink href={situation.evidence.href} arrow className={styles.evidenceLink}>
            {evidenceContent}
          </EditorialLink>
        ) : (
          evidenceContent
        )}
      </div>
    </article>
  );
}

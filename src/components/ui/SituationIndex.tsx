"use client";

import { useEffect, useState } from "react";
import styles from "./BuildSituationGuide.module.css";
import type { BuildSituation } from "@/content/buildSituations";

interface SituationIndexProps {
  situations: BuildSituation[];
}

export function SituationIndex({ situations }: SituationIndexProps) {
  const [activeId, setActiveId] = useState(situations[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const visibleId = visibleEntries[0]?.target.id.replace("situation-", "");
        if (visibleId) {
          setActiveId(visibleId as BuildSituation["id"]);
        }
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0.1, 0.35, 0.6] },
    );

    situations.forEach((situation) => {
      const brief = document.getElementById(`situation-${situation.id}`);
      if (brief) observer.observe(brief);
    });

    return () => observer.disconnect();
  }, [situations]);

  useEffect(() => {
    const focusHashTarget = () => {
      const situationId = window.location.hash.replace("#situation-", "");
      const situation = situations.find(({ id }) => id === situationId);

      if (!situation) return;

      setActiveId(situation.id);
      window.setTimeout(() => {
        document
          .getElementById(`situation-title-${situation.id}`)
          ?.focus({ preventScroll: true });
      }, 0);
    };

    window.addEventListener("hashchange", focusHashTarget);
    return () => window.removeEventListener("hashchange", focusHashTarget);
  }, [situations]);

  return (
    <nav className={styles.index} aria-label="Choose a product situation">
      <span className={styles.indexLabel}>STARTING POINTS</span>
      <ol className={styles.indexList}>
        {situations.map((situation) => {
          const isActive = activeId === situation.id;

          return (
            <li key={situation.id} className={styles.indexItem}>
              <a
                href={`#situation-${situation.id}`}
                className={`${styles.indexLink} ${isActive ? styles.indexLinkActive : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => {
                  setActiveId(situation.id);
                }}
              >
                <span className={styles.indexMarker} aria-hidden="true" />
                <span className={styles.indexNumber}>{situation.index}</span>
                <span className={styles.indexCopy}>
                  <span className={styles.indexTitle}>{situation.title}</span>
                  <span className={styles.indexRecognition}>{situation.recognition}</span>
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

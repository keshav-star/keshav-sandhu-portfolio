"use client";

import React, { useState, useEffect, useCallback } from "react";
import styles from "./BuildSituationGuide.module.css";
import { buildSituations, type BuildSituation } from "@/content/buildSituations";
import { SituationBrief } from "./SituationBrief";
import { SituationIndex } from "./SituationIndex";

export function BuildSituationGuide() {
  const [activeId, setActiveId] = useState<BuildSituation["id"]>("idea");

  // Read URL hash on initial mount or change
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.replace("#situation-", "");
      if (hash && buildSituations.some((s) => s.id === hash)) {
        setActiveId(hash as BuildSituation["id"]);
      }
    };
    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  // Keyboard shortcut listener (1 to 4)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "1") setActiveId("idea");
      else if (e.key === "2") setActiveId("product");
      else if (e.key === "3") setActiveId("ai");
      else if (e.key === "4") setActiveId("scale");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const currentIndex = buildSituations.findIndex((s) => s.id === activeId);
  const safeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentSituation = buildSituations[safeIndex] || buildSituations[0];

  const handleSelect = useCallback((id: BuildSituation["id"]) => {
    setActiveId(id);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#situation-${id}`);
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (safeIndex > 0) {
      handleSelect(buildSituations[safeIndex - 1].id);
    }
  }, [safeIndex, handleSelect]);

  const handleNext = useCallback(() => {
    if (safeIndex < buildSituations.length - 1) {
      handleSelect(buildSituations[safeIndex + 1].id);
    }
  }, [safeIndex, handleSelect]);

  return (
    <div className={styles.guide}>
      <div className={styles.guideHeader}>
        <div className="datum-bar">
          <span className="datum-crosshair">+</span>
          <span>COLLABORATION BLUEPRINTS</span>
          <span className={styles.headerStatusDot} aria-hidden="true" />
          <span className={styles.headerStatusText}>ROADMAP EXPLORER</span>
        </div>
        <h2 className={styles.guideTitle}>Where does your product stand today?</h2>
      </div>

      <div className={styles.guideGrid}>
        <SituationIndex
          situations={buildSituations}
          activeId={activeId}
          onSelect={handleSelect}
        />
        <div className={styles.briefs}>
          <SituationBrief
            key={currentSituation.id}
            situation={currentSituation}
            allSituations={buildSituations}
            currentIndex={safeIndex}
            totalCount={buildSituations.length}
            onSelectPrev={handlePrev}
            onSelectNext={handleNext}
            onSelectId={handleSelect}
          />
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import styles from "./BuildSituationGuide.module.css";
import type { BuildSituation } from "@/content/buildSituations";
import {
  IconRocket,
  IconSparkle,
  IconCpu,
  IconServer,
} from "./BuildSituationIcons";

interface SituationIndexProps {
  situations: BuildSituation[];
  activeId: BuildSituation["id"];
  onSelect: (id: BuildSituation["id"]) => void;
}

function renderNavIcon(id: BuildSituation["id"], isActive: boolean) {
  const className = `${styles.navIconSvg} ${isActive ? styles.navIconSvgActive : ""}`;
  switch (id) {
    case "idea":
      return <IconRocket size={17} className={className} />;
    case "product":
      return <IconSparkle size={17} className={className} />;
    case "ai":
      return <IconCpu size={17} className={className} />;
    case "scale":
      return <IconServer size={17} className={className} />;
    default:
      return <IconRocket size={17} className={className} />;
  }
}

export function SituationIndex({
  situations,
  activeId,
  onSelect,
}: SituationIndexProps) {
  const activeIndex = situations.findIndex((s) => s.id === activeId);
  const currentNum = activeIndex >= 0 ? activeIndex + 1 : 1;
  const progressPercent = (currentNum / situations.length) * 100;

  return (
    <nav className={styles.index} aria-label="Product milestone navigator">
      <div className={styles.indexHeader}>
        <div className={styles.indexHeaderLabelWrap}>
          <span className={styles.indexPulseDot} aria-hidden="true" />
          <span className={styles.indexLabel}>MILESTONE NAVIGATOR</span>
        </div>
        <span className={styles.indexKeyHint} aria-label="Keyboard navigation shortcut: Press 1 to 4">
          <span className={styles.keyBadge}>1</span>
          <span className={styles.keyDivider}>–</span>
          <span className={styles.keyBadge}>4</span>
        </span>
      </div>

      <div className={styles.indexList} role="tablist" aria-orientation="vertical">
        {situations.map((situation, idx) => {
          const isActive = activeId === situation.id;
          const shortcutKey = idx + 1;

          return (
            <button
              key={situation.id}
              type="button"
              role="tab"
              id={`tab-${situation.id}`}
              aria-controls={`blueprint-panel-${situation.id}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.indexCard} ${isActive ? styles.indexCardActive : ""}`}
              onClick={() => onSelect(situation.id)}
            >
              {/* Active accent edge indicator */}
              <span className={styles.activeEdgeIndicator} aria-hidden="true" />

              {/* Icon plate */}
              <div className={`${styles.navIconPlate} ${isActive ? styles.navIconPlateActive : ""}`}>
                {renderNavIcon(situation.id, isActive)}
              </div>

              {/* Central text content */}
              <div className={styles.indexMeta}>
                <div className={styles.indexTopRow}>
                  <span className={styles.indexNumber}>0{shortcutKey}</span>
                  <span className={`${styles.indexBadge} ${isActive ? styles.indexBadgeActive : ""}`}>
                    {situation.badge}
                  </span>
                </div>
                <span className={styles.indexTitle}>{situation.shortTitle}</span>
                <span className={styles.indexTag}>{situation.shortTag}</span>
              </div>

              {/* Interactive signal indicator */}
              <div className={styles.indexIndicatorWrap} aria-hidden="true">
                {isActive ? (
                  <span className={styles.activeBeaconRing}>
                    <span className={styles.activeBeaconDot} />
                  </span>
                ) : (
                  <span className={styles.inactiveDot} />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Progress & Quick Telemetry Footer */}
      <div className={styles.indexFooter}>
        <div className={styles.progressRow}>
          <span className={styles.progressLabel}>
            STAGE {currentNum} OF {situations.length}
          </span>
          <span className={styles.progressValue}>{situations[activeIndex]?.badge}</span>
        </div>
        <div className={styles.progressBarTrack}>
          <div
            className={styles.progressBarFill}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </nav>
  );
}

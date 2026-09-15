"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./PortfolioArrival.module.css";

const ARRIVAL_KEY = "keshav-sandhu-portfolio-arrival-v1";

export function PortfolioArrival() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const continueButton = useRef<HTMLButtonElement>(null);

  const leaveStudio = useCallback(() => {
    setIsLeaving(true);
    window.localStorage.setItem(ARRIVAL_KEY, "seen");
    window.setTimeout(() => setIsVisible(false), 260);
  }, []);

  useEffect(() => {
    if (window.localStorage.getItem(ARRIVAL_KEY) === "seen") {
      const hideImmediately = window.setTimeout(() => setIsVisible(false), 0);
      return () => window.clearTimeout(hideImmediately);
    }

    continueButton.current?.focus();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionLeave = window.setTimeout(leaveStudio, 0);
      return () => window.clearTimeout(reducedMotionLeave);
    }

    const timer = window.setTimeout(leaveStudio, 2100);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") leaveStudio();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [leaveStudio]);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.arrival} ${isLeaving ? styles.isLeaving : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="arrival-title"
    >
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>KESHAV SANDHU // ENGINEERING PRACTICE</p>
        <h2 id="arrival-title" className={styles.title}>
          Building the path from idea to <em>working product.</em>
        </h2>
        <div className={styles.path} aria-label="Idea, interface, system, working product">
          <span>IDEA</span>
          <i />
          <span>INTERFACE</span>
          <i />
          <span>SYSTEM</span>
          <i />
          <span>WORKING PRODUCT</span>
        </div>
        <div className={styles.progress} aria-hidden="true">
          <span />
        </div>
        <button ref={continueButton} type="button" className={styles.enter} onClick={leaveStudio}>
          Enter the studio <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}

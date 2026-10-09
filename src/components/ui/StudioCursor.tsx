"use client";

import { useEffect, useRef } from "react";
import styles from "./StudioCursor.module.css";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[tabindex]:not([tabindex='-1'])",
  "[data-cursor='interactive']",
].join(",");

export function StudioCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) return;

    const cursor = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!cursor || !dot || !ring) return;

    const pageRoot = document.documentElement;
    pageRoot.classList.add("studio-cursor-enabled");

    const setVisibility = (visible: boolean) => {
      cursor.dataset.visible = String(visible);
    };

    const setInteractive = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      cursor.dataset.interactive = String(Boolean(element?.closest(INTERACTIVE_SELECTOR)));
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const x = `${event.clientX}px`;
      const y = `${event.clientY}px`;
      dot.style.setProperty("--cursor-x", x);
      dot.style.setProperty("--cursor-y", y);
      ring.style.setProperty("--cursor-x", x);
      ring.style.setProperty("--cursor-y", y);
      setInteractive(event.target);
      setVisibility(true);
    };

    const handlePointerDown = () => {
      cursor.dataset.pressed = "true";
    };

    const handlePointerUp = () => {
      cursor.dataset.pressed = "false";
    };

    const hideCursor = () => setVisibility(false);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("blur", hideCursor);
    document.documentElement.addEventListener("mouseleave", hideCursor);

    return () => {
      pageRoot.classList.remove("studio-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("blur", hideCursor);
      document.documentElement.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.cursor} data-visible="false" aria-hidden="true">
      <span ref={ringRef} className={styles.ring} />
      <span ref={dotRef} className={styles.dot} />
    </div>
  );
}

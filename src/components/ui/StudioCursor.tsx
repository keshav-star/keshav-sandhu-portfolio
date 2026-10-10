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
  const pointerRef = useRef<HTMLSpanElement>(null);
  const locatorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    if (!finePointer.matches) return;

    const cursor = rootRef.current;
    const pointer = pointerRef.current;
    const locator = locatorRef.current;

    if (!cursor || !pointer || !locator) return;

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
      cursor.style.setProperty("--cursor-x", x);
      cursor.style.setProperty("--cursor-y", y);
      pointer.style.setProperty("--cursor-x", x);
      pointer.style.setProperty("--cursor-y", y);
      locator.style.setProperty("--cursor-x", x);
      locator.style.setProperty("--cursor-y", y);
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
      <span className={styles.focusField} />
      <span ref={locatorRef} className={styles.locator} />
      <span ref={pointerRef} className={styles.pointer}>
        <svg viewBox="0 0 22 26" aria-hidden="true">
          <path d="M2 2.2v19.2l5.15-4.45 3.65 7.1 3.55-1.8-3.55-6.82h7.16L2 2.2Z" />
        </svg>
      </span>
    </div>
  );
}

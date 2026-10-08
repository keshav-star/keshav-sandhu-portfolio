"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import type { ProjectDossierProps } from "./ProjectDossierCard";
import styles from "./ProjectDeckSection.module.css";

interface ProjectDeckSectionProps {
  projects: ProjectDossierProps[];
}

const projectHooks: Record<string, string> = {
  "sokrate-pmo": "Compliance, without the chase.",
  "twin-protocol": "Talk to documents. Get context.",
  trystyle: "Virtual try-on, built to scale.",
};

function ProjectVisual({ project }: { project: ProjectDossierProps }) {
  if (!project.media) {
    return <div className={styles.visualFallback}>PROJECT // {project.index}</div>;
  }

  return (
    <Image
      src={project.media.src}
      alt={project.media.alt || `${project.title} interface`}
      fill
      sizes="(max-width: 800px) 82vw, 44vw"
      className={styles.projectImage}
    />
  );
}

export function ProjectDeckSection({ projects }: ProjectDeckSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  const next = () => setActiveIndex((current) => (current + 1) % projects.length);
  const previous = () =>
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          root.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={styles.deckShell}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") next();
        if (event.key === "ArrowLeft") previous();
      }}
    >
      <div className={styles.deckIntro}>
        <span>THREE BUILDS / ONE DECK</span>
        <h3>
          Work that moved
          <br />
          <em>real numbers.</em>
        </h3>
        <p>Tap the front card or use the arrows to move through the work.</p>

        <div className={styles.deckControls}>
          <button type="button" onClick={previous} aria-label="Previous project">
            ←
          </button>
          <span>
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <button type="button" onClick={next} aria-label="Next project">
            →
          </button>
        </div>
      </div>

      <div className={styles.deck} aria-live="polite">
        {projects.map((project, index) => {
          const position = (index - activeIndex + projects.length) % projects.length;

          return (
            <button
              type="button"
              key={project.slug}
              className={styles.deckCard}
              data-position={position}
              onClick={() => (position === 0 ? next() : setActiveIndex(index))}
              aria-label={`${project.title}. ${position === 0 ? "Show next project" : "Bring project forward"}`}
              aria-hidden={position > 2}
              tabIndex={position === 0 ? 0 : -1}
            >
              <div className={styles.deckImage}>
                <ProjectVisual project={project} />
                <span>{project.index}</span>
              </div>

              <div className={styles.deckCaption}>
                <span>{project.classification}</span>
                <h4>{project.title}</h4>
                <p>{projectHooks[project.slug] ?? project.summary}</p>
                <div>
                  <strong>{project.metrics[0]?.value}</strong>
                  <span>{project.metrics[0]?.label}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

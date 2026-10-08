"use client";

import React from "react";
import styles from "./TechCrossStrips.module.css";

/* ─────────────────────────────────────────────────────────────
   AUTHENTIC SVG LOGOS FOR MAJOR TECHNOLOGIES
   ───────────────────────────────────────────────────────────── */

function LogoNextJs() {
  return (
    <svg width="20" height="20" viewBox="0 0 180 180" fill="none" aria-hidden="true">
      <circle cx="90" cy="90" r="90" fill="currentColor" />
      <path
        d="M149.508 157.085L69.3179 54H54V125.962H66.9037V70.4283L139.398 163.535C142.923 161.597 146.297 159.439 149.508 157.085Z"
        fill="var(--bg-canvas, #131211)"
      />
      <rect x="115" y="54" width="13" height="72" fill="var(--bg-canvas, #131211)" />
    </svg>
  );
}

function LogoReact() {
  return (
    <svg width="22" height="22" viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}

function LogoTypeScript() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="currentColor" />
      <path
        d="M11.5 8H5.5V10.2H7.2V17.5H9.8V10.2H11.5V8ZM18.5 10.3C18.1 9.9 17.5 9.7 16.7 9.7C15.8 9.7 15.1 10 14.7 10.5C14.3 11 14.1 11.6 14.1 12.4C14.1 13.2 14.4 13.9 14.9 14.4C15.4 14.9 16.2 15.3 17.2 15.6C17.7 15.8 18 16 18.2 16.2C18.4 16.4 18.5 16.7 18.5 17C18.5 17.4 18.3 17.7 18 18C17.6 18.3 17.1 18.4 16.5 18.4C15.8 18.4 15.2 18.2 14.7 17.8C14.2 17.4 13.9 16.8 13.8 16.1H11.8C12 17.4 12.6 18.4 13.5 19.1C14.4 19.8 15.4 20.1 16.7 20.1C17.8 20.1 18.7 19.8 19.5 19.2C20.3 18.6 20.7 17.8 20.7 16.8C20.7 15.9 20.4 15.2 19.8 14.7C19.2 14.2 18.3 13.8 17.2 13.4C16.5 13.2 16.1 13 15.9 12.8C15.7 12.6 15.6 12.3 15.6 12C15.6 11.7 15.7 11.4 16 11.2C16.3 11 16.7 10.9 17.1 10.9C17.6 10.9 18 11 18.3 11.3C18.6 11.6 18.8 12 18.9 12.5H20.8C20.7 11.5 20.2 10.8 19.6 10.3H18.5Z"
        fill="var(--bg-canvas, #131211)"
      />
    </svg>
  );
}

function LogoPython() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.922 0C8.598 0 8.797 1.455 8.797 1.455l.007 1.51h3.19v.454H4.37s-2.025.228-2.025 3.633c0 3.407 1.77 3.565 1.77 3.565h1.057v-1.493s-.057-1.782 1.751-1.782h3.047V8.89H6.18s-1.288-.04-1.288-1.258c0-1.218 1.134-1.265 1.134-1.265h5.896s1.173.08 1.173-1.144c0-1.226-1.173-1.226-1.173-1.226H11.922zm-1.71 1.054a.69.69 0 1 1 0 1.38.69.69 0 0 1 0-1.38z" />
      <path d="M12.078 24c3.324 0 3.125-1.455 3.125-1.455l-.007-1.51h-3.19v-.454h7.624s2.025-.228 2.025-3.633c0-3.407-1.77-3.565-1.77-3.565h-1.057v1.493s.057 1.782-1.751 1.782h-3.047v-1.548h3.79s1.288.04 1.288 1.258c0 1.218-1.134 1.265-1.134 1.265h-5.896s-1.173-.08-1.173 1.144c0 1.226 1.173 1.226 1.173 1.226h.067zm1.71-1.054a.69.69 0 1 1 0-1.38.69.69 0 0 1 0 1.38z" />
    </svg>
  );
}

function LogoNodeJs() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 2 8 4.6v9.2L12 22l-8-4.6V6.6L12 2z" />
      <path d="M12 12 4 7.4" />
      <path d="M12 12v10" />
      <path d="m12 12 8-4.6" />
    </svg>
  );
}

function LogoPostgreSql() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function LogoRedis() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m12 2 9 4.5-9 4.5-9-4.5L12 2z" />
      <path d="m3 11.5 9 4.5 9-4.5" />
      <path d="m3 16.5 9 4.5 9-4.5" />
    </svg>
  );
}

function LogoLangChain() {
  return (
    <svg width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="12" r="3" />
      <path d="M9 12h6" />
      <path d="M6 9a6 6 0 0 1 6-6" strokeDasharray="2 2" />
      <path d="M18 15a6 6 0 0 1-6 6" strokeDasharray="2 2" />
    </svg>
  );
}

function LogoDocker() {
  return (
    <svg width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12h2v2H4zM7 12h2v2H7zM10 12h2v2h-2zM7 9h2v2H7zM10 9h2v2h-2zM13 9h2v2h-2z" fill="currentColor" fillOpacity="0.4" />
      <path d="M2 13c1.5 0 3 .5 4 2 1.5-1.5 3.5-2 5.5-2 2.5 0 4.5 1.5 5.5 3 2.5-.5 4.5-2 5-4-.5 4-4.5 7-10 7-5.5 0-8.5-3-10-6z" />
    </svg>
  );
}

function LogoTailwind() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

function LogoSupabase() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.35 22.84c-.75.98-2.35.45-2.35-.8V13.8H3.37c-1.12 0-1.74-1.3-.98-2.12L13.14.86c.75-.82 2.12-.29 2.12.83v8.71h7.74c1.15 0 1.74 1.33.95 2.15L13.35 22.84z" />
    </svg>
  );
}

function LogoAws() {
  return (
    <svg width="22" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 14c3.5 3 12.5 3 16 0" />
      <path d="M17.5 13.5L20 14l-1.5 2.5" />
      <path d="M6 10l2-6 2 6M7 8.5h2" />
      <path d="M14 4v6M17 4l1 6 1-6" />
    </svg>
  );
}

function LogoGraphQL() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="3" r="1.5" fill="currentColor" />
      <circle cx="19.79" cy="7.5" r="1.5" fill="currentColor" />
      <circle cx="19.79" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="21" r="1.5" fill="currentColor" />
      <circle cx="4.21" cy="16.5" r="1.5" fill="currentColor" />
      <circle cx="4.21" cy="7.5" r="1.5" fill="currentColor" />
      <path d="M12 3l7.79 4.5v9L12 21l-7.79-4.5v-9L12 3z" />
      <path d="M12 3v18M4.21 7.5l15.58 9M4.21 16.5l15.58-9" />
    </svg>
  );
}

function LogoPyTorch() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 4a8 8 0 1 0 5.6 13.7L18 16" />
      <circle cx="16.5" cy="5.5" r="1.5" fill="currentColor" />
      <path d="M12 12l2.5-2.5" />
    </svg>
  );
}

function LogoPrisma() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3.5 19.5 11 3l9.5 13-7 4.5-10-1z" />
      <path d="M11 3v17.5" />
    </svg>
  );
}

function LogoGemini() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2c.4 5.3 4.7 9.6 10 10-5.3.4-9.6 4.7-10 10-.4-5.3-4.7-9.6-10-10 5.3-.4 9.6-4.7 10-10z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   DATA SETS FOR DUAL TICKER TAPES
   ───────────────────────────────────────────────────────────── */

interface TechItem {
  name: string;
  category: string;
  logo: React.ReactNode;
}

const TECH_LOGOS: TechItem[] = [
  { name: "Next.js 16", category: "Full-Stack", logo: <LogoNextJs /> },
  { name: "React 19", category: "UI Library", logo: <LogoReact /> },
  { name: "TypeScript", category: "Language", logo: <LogoTypeScript /> },
  { name: "Python", category: "AI / Backend", logo: <LogoPython /> },
  { name: "PostgreSQL", category: "Database", logo: <LogoPostgreSql /> },
  { name: "Node.js", category: "Runtime", logo: <LogoNodeJs /> },
  { name: "Redis", category: "In-Memory", logo: <LogoRedis /> },
  { name: "LangChain", category: "LLM Framework", logo: <LogoLangChain /> },
  { name: "Docker", category: "Containers", logo: <LogoDocker /> },
  { name: "Tailwind CSS", category: "Styling", logo: <LogoTailwind /> },
  { name: "Supabase", category: "Postgres BaaS", logo: <LogoSupabase /> },
  { name: "AWS", category: "Cloud Infra", logo: <LogoAws /> },
  { name: "GraphQL", category: "Data API", logo: <LogoGraphQL /> },
  { name: "PyTorch", category: "Deep Learning", logo: <LogoPyTorch /> },
  { name: "Prisma ORM", category: "Data Layer", logo: <LogoPrisma /> },
  { name: "Gemini AI", category: "LLM Models", logo: <LogoGemini /> },
];

const DOMAIN_PHRASES = [
  { phrase: "GENAI & AUTONOMOUS AGENTS", tag: "AI" },
  { phrase: "VECTOR EMBEDDINGS (RAG)", tag: "DATA" },
  { phrase: "HIGH-THROUGHPUT SYSTEM ARCHITECTURE", tag: "PERF" },
  { phrase: "NEXT.JS APP ROUTER & RSC", tag: "WEB" },
  { phrase: "DISTRIBUTED REDIS CACHING", tag: "CACHE" },
  { phrase: "MULTI-TENANT SAAS PLATFORMS", tag: "SCALE" },
  { phrase: "SUB-100MS OPTIMISTIC UI", tag: "UX" },
  { phrase: "PGVECTOR & SEMANTIC SEARCH", tag: "DB" },
  { phrase: "LANGCHAIN SERVICES & GUARDRAILS", tag: "LLM" },
  { phrase: "P99 LATENCY AUDITS & INDEXING", tag: "CORE" },
  { phrase: "ZERO-DOWNTIME CI/CD DEPLOYMENTS", tag: "OPS" },
  { phrase: "REAL-TIME TELEMETRY & OBSERVABILITY", tag: "METRICS" },
  { phrase: "DOCUMENT CONVERSATION ENGINES", tag: "NLP" },
  { phrase: "ROLE-BASED ACCESS CONTROL (RBAC)", tag: "SEC" },
];

export function TechCrossStrips() {
  return (
    <section className={styles.stripsSection} aria-label="Core technologies and engineering domains">
      <div className={styles.stripsContainer}>
        {/* Subtle Vignette Edge Masks for Smooth Infinite Flow */}
        <div className={styles.fadeMaskLeft} aria-hidden="true" />
        <div className={styles.fadeMaskRight} aria-hidden="true" />

        {/* ── Non-overlapping Slanted Stage holding both ribbons ── */}
        <div className={styles.stripsStage}>
          {/* ── STRIP 1: Slanted Tech Logos Ribbon (Continuous Left Scroll) ── */}
          <div className={styles.stripLogosWrapper}>
            <div className={styles.stripLogosTrack}>
              {/* Set A */}
              <div className={styles.stripLogosSequence} aria-hidden="true">
                {TECH_LOGOS.map((tech) => (
                  <div key={tech.name} className={styles.logoItem}>
                    <div className={styles.logoSvgWrap}>{tech.logo}</div>
                    <span className={styles.logoName}>{tech.name}</span>
                    <span className={styles.logoCategory}>{tech.category}</span>
                  </div>
                ))}
              </div>

              {/* Set B (Seamless Clone for Infinite Marquee) */}
              <div className={styles.stripLogosSequence}>
                {TECH_LOGOS.map((tech) => (
                  <div key={`${tech.name}-clone`} className={styles.logoItem}>
                    <div className={styles.logoSvgWrap}>{tech.logo}</div>
                    <span className={styles.logoName}>{tech.name}</span>
                    <span className={styles.logoCategory}>{tech.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STRIP 2: Domain Titles & Phrases Ribbon (Continuous Right Scroll) ── */}
          <div className={styles.stripPhrasesWrapper}>
            <div className={styles.stripPhrasesTrack}>
              {/* Set A */}
              <div className={styles.stripPhrasesSequence} aria-hidden="true">
                {DOMAIN_PHRASES.map((item, idx) => (
                  <div key={idx} className={styles.phraseItem}>
                    <span className={styles.phraseTag}>{item.tag}</span>
                    <span className={styles.phraseText}>{item.phrase}</span>
                    <span className={styles.phraseCrosshair} aria-hidden="true">+</span>
                  </div>
                ))}
              </div>

              {/* Set B (Seamless Clone for Infinite Marquee) */}
              <div className={styles.stripPhrasesSequence}>
                {DOMAIN_PHRASES.map((item, idx) => (
                  <div key={`phrase-clone-${idx}`} className={styles.phraseItem}>
                    <span className={styles.phraseTag}>{item.tag}</span>
                    <span className={styles.phraseText}>{item.phrase}</span>
                    <span className={styles.phraseCrosshair} aria-hidden="true">+</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./page.module.css";
import { StudioHeader } from "@/components/layout/StudioHeader";
import { StudioFooter } from "@/components/layout/StudioFooter";
import { DatumLabel } from "@/components/ui/DatumLabel";
import { StudioButton } from "@/components/ui/StudioButton";
import { PersonalPortrait } from "@/components/ui/PersonalPortrait";
import { PersonalIntro } from "@/components/ui/PersonalIntro";
import { ProjectDossierCard } from "@/components/ui/ProjectDossierCard";
import { BuildSituationGuide } from "@/components/ui/BuildSituationGuide";

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <StudioHeader />

      <main id="main-content">
        {/* ==================================================================
            HERO: 5-SECOND HUMAN-CENTERED OPENING EXPERIENCE
            WHO: Keshav Sandhu | WHAT: Product Engineer / Builder
            THESIS: "From idea to working product."
            ================================================================== */}
        <section
          id="overview"
          className={styles.heroSection}
          aria-label="Keshav Sandhu — Hero Overview"
        >
          <div className="container">
            <div className={styles.heroGrid}>
              {/* Left Column: Personal Narrative, Proof & Actions */}
              <div className={styles.heroNarrativeCol}>
                {/* 1. Identity & Availability Metadata */}
                <div className={`${styles.heroDatumRow} ${styles.animateFadeIn}`}>
                  <DatumLabel
                    prefix="BUILDER //"
                    label="KESHAV SANDHU"
                    variant="standard"
                  />
                  <span className={styles.datumDivider}>{"//"}</span>
                  <DatumLabel
                    label="PRODUCT ENGINEER"
                    variant="bordered"
                  />
                  <span className={styles.datumDivider}>{"//"}</span>
                  <span className={styles.availabilityMetadata}>
                    AVAILABLE FOR SELECT ENGAGEMENTS
                  </span>
                </div>

                {/* 2. Core Brand Thesis Headline */}
                <h1 className={`${styles.heroStatement} ${styles.animateFadeIn} ${styles.delay1}`}>
                  From idea to <span className="font-serif-italic">working product.</span>
                </h1>

                {/* 3. Human-Readable Supporting Statement */}
                <p className={`${styles.heroDescriptor} ${styles.animateFadeIn} ${styles.delay2}`}>
                  I design and build digital products end-to-end — from the interface
                  people use to the systems that make it run.
                </p>

                {/* 4. Primary Actions (Ordered for mobile & desktop) */}
                <div className={`${styles.heroActionRow} ${styles.animateFadeIn} ${styles.delay3}`}>
                  <StudioButton href="#work" variant="primary" size="md">
                    Explore Selected Work
                  </StudioButton>
                  <StudioButton
                    href="mailto:keshavsandhu.me@gmail.com"
                    variant="secondary"
                    size="md"
                    arrow={false}
                  >
                    Let&apos;s Work Together
                  </StudioButton>
                  <StudioButton href="#build" variant="ghost" size="md">
                    Find your starting point
                  </StudioButton>
                </div>

                {/* 5. Proof Strip (Evidence of real production systems) */}
                <div className={`${styles.heroMetricsGrid} ${styles.animateFadeIn} ${styles.delay4}`}>
                  <div className={styles.heroMetricItem}>
                    <span className={styles.heroMetricNumber}>50+</span>
                    <span className={styles.heroMetricLabel}>
                      Organizations supported in production
                    </span>
                  </div>
                  <div className={styles.heroMetricItem}>
                    <span className={styles.heroMetricNumber}>100K+</span>
                    <span className={styles.heroMetricLabel}>
                      Compliance records managed
                    </span>
                  </div>
                  <div className={styles.heroMetricItem}>
                    <span className={styles.heroMetricNumber}>~60%</span>
                    <span className={styles.heroMetricLabel}>
                      Manual follow-up reduction
                    </span>
                  </div>
                  <div className={styles.heroMetricItem}>
                    <span className={styles.heroMetricNumber}>~40%</span>
                    <span className={styles.heroMetricLabel}>
                      API response latency improvement
                    </span>
                  </div>
                </div>
              </div>

              <div className={`${styles.heroPortraitCol} ${styles.animateFadeIn} ${styles.delay5}`}>
                <PersonalPortrait
                  src="/images/keshav-sandhu-editorial-portrait.png"
                  caption="KESHAV SANDHU // EDITORIAL PORTRAIT [PRODUCT ENGINEERING PRACTICE]"
                  objectPosition="center center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="build" className={styles.buildGuideSection} aria-label="Build-path field guide">
          <div className="container">
            <BuildSituationGuide />
          </div>
        </section>

        {/* ==================================================================
            FEATURED PROJECT DOSSIER: DUAL-LAYER DEMONSTRATION
            Human Story (Primary) + Engineering Depth (Supporting)
            ================================================================== */}
        <section id="work" className={styles.dossierSection} aria-label="Selected Engineering Work">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className="datum-bar">
                <span className="datum-crosshair">+</span>
                <span>SELECTED WORK // PRODUCTION DOSSIER</span>
              </div>
              <h2 className={styles.sectionTitle}>
                SOKRATE PMO — Compliance & Operations Platform
              </h2>
              <p className={styles.sectionSubtitle}>
                Every project supports two reading depths: a human/product story for founders
                and recruiters, and an engineering breakdown for technical leads.
              </p>
            </div>

            {/* SOKRATE PMO Dossier with real resume data and dual layers */}
            <ProjectDossierCard
              index="01"
              classification="COMPLIANCE & OPERATIONS PLATFORM"
              title="SOKRATE PMO"
              role="Lead Architecture & Full-Stack Systems"
              outcomeHeadline="Multi-tenant operations platform supporting 50+ organizations and 100K+ compliance records with ~60% reduction in manual follow-ups."
              summary="Architected a multi-tenant platform with strict data isolation, granular RBAC across 5 user personas, and automated quotation-to-invoice workflows. Refactored queries and caching to cut latency by ~40%."
              metrics={[
                { value: "50+", label: "Organizations" },
                { value: "100K+", label: "Records Managed" },
                { value: "~60%", label: "Manual Drop" },
                { value: "~40%", label: "Latency Reduction" },
              ]}
              techStack={["Next.js", "PostgreSQL", "Prisma", "Node.js", "AWS", "Vitest"]}
              humanStory={{
                problem:
                  "Managing compliance across dozens of client organizations required constant manual follow-ups, fragmented spreadsheets, and error-prone quotation-to-invoice handoffs.",
                product:
                  "Built a unified, multi-tenant compliance and operations platform where organizations self-manage renewal cycles, audits, medical visits, and invoicing in real time.",
                contribution:
                  "Engineered the multi-tenant architecture, designed the 5-persona RBAC model, built automated reminders and renewal workflows, and optimized all database queries.",
                outcome:
                  "Now running across 50+ organizations managing 100K+ active records, achieving a ~60% drop in manual operational follow-ups and ~40% faster response times.",
              }}
              engineeringLayers={{
                architecture: "Multi-tenant tenant-isolated schema with workspace provisioning and centralized governance.",
                frontend: "Next.js App Router with accessible audit dashboards, status trackers, and dynamic quotation pipelines.",
                backend: "Node.js REST API with granular RBAC authorization middleware spanning 5 distinct user roles.",
                data: "PostgreSQL with Prisma ORM, refactored indexes for multi-tenant query isolation, and Redis query caching.",
                performance: "Cut average API response times by ~40% under peak multi-organization load.",
                infrastructure: "AWS deployment with automated Vitest test coverage for regulatory audit trails.",
              }}
              placeholderLabel="[PROJECT INTERFACE // SOKRATE PMO COMPLIANCE CONSOLE]"
            />
          </div>
        </section>

        <section id="about" className={styles.introSection} aria-label="About Keshav Sandhu">
          <div className="container">
            <PersonalIntro />
          </div>
        </section>
      </main>

      <StudioFooter />
    </div>
  );
}

import React from "react";
import styles from "./page.module.css";
import { StudioHeader } from "@/components/layout/StudioHeader";
import { StudioFooter } from "@/components/layout/StudioFooter";
import { StudioButton } from "@/components/ui/StudioButton";
import { PersonalPortrait } from "@/components/ui/PersonalPortrait";
import { PersonalIntro } from "@/components/ui/PersonalIntro";
import { ProjectDeckSection } from "@/components/ui/ProjectDeckSection";
import { BuildSituationGuide } from "@/components/ui/BuildSituationGuide";
import { CapabilityStrip, TechnologyStrip } from "@/components/ui/TechCrossStrips";
import { EngineeringLab } from "@/components/ui/EngineeringLab";
import { EngagementGateway } from "@/components/ui/EngagementGateway";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { HeroScatteredProps } from "@/components/ui/HeroAccoladeProps";
import { featuredProjects } from "@/content/projects";

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
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
          aria-label="Keshav Sandhu - Hero Overview"
        >
          <div className="container">
            <div className={styles.heroGrid}>
              {/* Left Column: Personal Narrative & Actions */}
              <div className={styles.heroNarrativeCol}>
                <div className={`${styles.heroDatumRow} ${styles.animateFadeIn}`}>
                  <StatusBadge
                    statusText="AVAILABLE FOR SELECT CONTRACTS & ROLES"
                    location="NOIDA, IN [UTC+5:30]"
                  />
                </div>

                <h1 className={`${styles.heroStatement} ${styles.animateFadeIn}`}>
                  Product systems that <span className="font-serif-italic">perform in practice.</span>
                </h1>

                <p className={`${styles.heroDescriptor} ${styles.animateFadeIn} ${styles.delay1}`}>
                  I build resilient software products and scalable architectures, translating complex problems into seamless user experiences.
                </p>

                <div className={`${styles.heroActionRow} ${styles.animateFadeIn} ${styles.delay2}`}>
                  <StudioButton href="#work" variant="primary" size="md">
                    Explore Selected Work
                  </StudioButton>
                  <StudioButton
                    href="/resume-keshav-sandhu.docx"
                    variant="secondary"
                    size="md"
                    arrow={false}
                  >
                    Download résumé
                  </StudioButton>
                </div>

                {/* Desktop: scattered signals. Tablet/mobile: an inline proof dock. */}
                <HeroScatteredProps />
              </div>

              {/* Right Column: Portrait */}
              <div className={`${styles.heroPortraitCol} ${styles.animateFadeIn} ${styles.delay3}`}>
                <PersonalPortrait
                  src="/images/keshav-sandhu-editorial-portrait.png"
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

        {/* Production toolkit transition: collaboration approach → shipped work. */}
        <TechnologyStrip />

        {/* Selected work presented as a tactile case-study deck. */}
        <section id="work" className={styles.dossierSection} aria-label="Selected Engineering Work">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className="datum-bar">
                <span className="datum-crosshair">+</span>
                <span>SELECTED WORK // PRODUCTION SYSTEMS</span>
              </div>
              <h2 className={styles.sectionTitle}>Selected systems, measurable impact.</h2>
              <p className={styles.sectionSubtitle}>
                Three products shaped from architecture through operation.
              </p>
            </div>

            <ProjectDeckSection projects={featuredProjects} />
          </div>
        </section>

        <section id="about" className={styles.introSection} aria-label="About Keshav Sandhu">
          <div className="container">
            <PersonalIntro />
          </div>
        </section>

        {/* Capability transition: personal practice → engineering lab. */}
        <CapabilityStrip />

        <EngineeringLab />

        <EngagementGateway />
      </main>

      <StudioFooter />
    </div>
  );
}

import React from "react";
import styles from "./page.module.css";
import { StudioHeader } from "@/components/layout/StudioHeader";
import { StudioFooter } from "@/components/layout/StudioFooter";
import { StudioButton } from "@/components/ui/StudioButton";
import { PersonalPortrait } from "@/components/ui/PersonalPortrait";
import { PersonalIntro } from "@/components/ui/PersonalIntro";
import { ProjectDossierCard } from "@/components/ui/ProjectDossierCard";
import { BuildSituationGuide } from "@/components/ui/BuildSituationGuide";
import { CalBookingButton } from "@/components/ui/CalBookingButton";
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
              {/* Left Column: Personal Narrative, Proof & Actions */}
              <div className={styles.heroNarrativeCol}>
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

              </div>

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
              <h2 className={styles.sectionTitle}>Selected systems, built in production.</h2>
              <p className={styles.sectionSubtitle}>
              Product context, implementation decisions, and measurable outcomes.
              </p>
            </div>

            {featuredProjects.map((project) => (
              <ProjectDossierCard key={project.index} {...project} />
            ))}
          </div>
        </section>

        <section id="about" className={styles.introSection} aria-label="About Keshav Sandhu">
          <div className="container">
            <PersonalIntro />
          </div>
        </section>

        <section id="lab" className={styles.labSection} aria-labelledby="lab-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <div className="datum-bar">
                <span className="datum-crosshair">+</span>
                <span>ENGINEERING LAB // PRACTICE AREAS</span>
              </div>
              <h2 id="lab-title" className={styles.sectionTitle}>
                Useful systems, examined at the seams.
              </h2>
              <p className={styles.sectionSubtitle}>
                The practice combines product interface work with the systems behind it - where
                context, permissions, performance, and operational workflows need to hold up.
              </p>
            </div>

            <div className={styles.labGrid}>
              <article className={styles.labItem}>
                <span className={styles.labIndex}>01 // AI & CONTEXT</span>
                <h3 className={styles.labTitle}>Document-aware conversations</h3>
                <p>
                  Conversational interfaces, contextual PDF responses, LangChain services, and
                  vector-backed retrieval shaped through Twin Protocol work.
                </p>
              </article>
              <article className={styles.labItem}>
                <span className={styles.labIndex}>02 // OPERATIONS</span>
                <h3 className={styles.labTitle}>Multi-tenant systems</h3>
                <p>
                  Tenant isolation, RBAC, configuration workflows, and operational dashboards
                  developed across compliance and retailer administration platforms.
                </p>
              </article>
              <article className={styles.labItem}>
                <span className={styles.labIndex}>03 // PERFORMANCE</span>
                <h3 className={styles.labTitle}>Clearer paths under load</h3>
                <p>
                  Query refactoring, caching, indexing, and API optimization applied where
                  responsiveness depends on the whole system rather than a single screen.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection} aria-labelledby="contact-title">
          <div className="container">
            <div className={styles.contactLayout}>
              <div>
                <div className="datum-bar">
                  <span className="datum-crosshair">+</span>
                  <span>SELECT ENGAGEMENTS</span>
                </div>
                <h2 id="contact-title" className={styles.contactTitle}>
                  Have a product or system that needs a clearer path forward?
                </h2>
              </div>
              <div className={styles.contactAction}>
                <p>
                  I work across product interfaces, backend systems, and applied AI - from the
                  first useful version through the operational details that make it dependable.
                </p>
                <StudioButton href="mailto:keshavsandhu.me@gmail.com" variant="primary" size="md">
                  Start a conversation
                </StudioButton>
                <CalBookingButton />
              </div>
            </div>
          </div>
        </section>
      </main>

      <StudioFooter />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import styles from "./StudioHeader.module.css";
import { Logo } from "../ui/Logo";

export function StudioHeader() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial preference or stored theme
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = isDark ? "dark" : "light";
    queueMicrotask(() => setTheme(initialTheme));
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.headerInner}`}>
        {/* Left: Identity Lockup */}
        <div className={styles.identityCol}>
          <a href="#overview" aria-label="Keshav Sandhu — Home">
            <Logo variant="full" size="md" />
          </a>
        </div>

        {/* Center: Minimal Personal Studio Navigation */}
        <nav className={styles.navMenu} aria-label="Studio navigation">
          <ul className={styles.navList}>
            <li>
              <a href="#work" className={styles.navLink}>
                WORK
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navLink}>
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#lab"
                className={`${styles.navLink} ${styles.navLinkMuted}`}
                title="Engineering Lab & Experiments (In development)"
              >
                LAB <span className={styles.upcomingPill}>EXP</span>
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/keshavsandhu"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.navLink}
              >
                RESUME ↗
              </a>
            </li>
          </ul>
        </nav>

        {/* Right: Availability, Contact Action, and Theme Toggle */}
        <div className={styles.controlsCol}>
          {/* Subtle Studio Availability Status */}
          <div className={styles.availabilityTag} title="Studio Availability">
            <span className={styles.statusPip} aria-hidden="true" />
            <span className={styles.statusText}>AVAILABLE</span>
          </div>

          {/* Restrained Contact Action */}
          <a
            href="mailto:keshavsandhu.me@gmail.com"
            className={styles.contactBtn}
            aria-label="Send email to Keshav Sandhu"
          >
            LET&apos;S WORK TOGETHER
          </a>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === "light" ? "Dark Studio" : "Warm Light"} mode`}
            title="Toggle theme"
          >
            <span className={styles.modeActive}>
              {theme === "light" ? "LIGHT" : "DARK"}
            </span>
            <span className={styles.themeIcon} aria-hidden="true">
              {theme === "light" ? "◐" : "◑"}
            </span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={styles.mobileToggle}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.mobileToggleBar} />
            <span className={styles.mobileToggleBar} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={`container ${styles.mobileDrawerInner}`}>
            <nav aria-label="Mobile navigation">
              <ul className={styles.mobileNavList}>
                <li>
                  <a
                    href="#work"
                    onClick={() => setMobileMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    WORK
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#lab"
                    onClick={() => setMobileMenuOpen(false)}
                    className={styles.mobileNavLink}
                  >
                    LAB (EXPERIMENTS)
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/keshavsandhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mobileNavLink}
                  >
                    RESUME ↗
                  </a>
                </li>
                <li className={styles.mobileContactItem}>
                  <a
                    href="mailto:keshavsandhu.me@gmail.com"
                    className={styles.mobileContactBtn}
                  >
                    LET&apos;S WORK TOGETHER →
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

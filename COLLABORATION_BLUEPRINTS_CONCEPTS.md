# Collaboration Blueprints — Alternative Design Concepts Archive

This document preserves the architecture, interactive design patterns, and code implementations for the **Alternative Concepts** explored for the **Collaboration Blueprints / Roadmap Explorer** portfolio section (*"Where does your product stand today?"*).

---

## Overview of Explored Concepts

| Concept | Name | Primary Interaction Model | Key Strength |
| :--- | :--- | :--- | :--- |
| **Concept 01** | **Tactile Stage Scrubber & Sprint Capsule** | Horizontal connected milestone rail with dynamic progress line | -75% text reduction, kinetic progress track, 4-phase micro-step strip |
| **Concept 02** | **Founder Diagnostic Bento** | 4-column problem-first cards written in founder's voice | Immediate self-identification, active prescription drawer below |
| **Concept 03** | **Stepper + Live Interactive Sandbox** *(Selected for Production)* | 50/50 split with vertical stage tabs & live interactive sandbox | Demonstrates real Design Engineering craft with live toggles & simulations |
| **Concept 04** | **Range Slider & Metric Radar** | Drag-to-scrub range track with dynamic metric gauges | Ultra-compact (<300px height), playful, minimal text |

---

## Concept 01: Tactile Stage Scrubber & Sprint Capsule

### Design Philosophy
A Linear / modern hardware inspired milestone rail. Instead of reading large paragraphs and expanding nested accordions, the user interacts with a connected progress track. Scrubbing or clicking nodes animates an illuminated progress bar and updates an adaptive stage capsule.

### Key Components
- **Connected Track:** 4 milestone nodes (`01 Launch`, `02 Revamp`, `03 Applied AI`, `04 Scale`) connected by a track with animated width fill (`0%` → `33%` → `66%` → `100%`).
- **Capsule Meta:** Stage badge (`0 → 1 Launch`), Target turnaround (`⚡ 2–4 WEEK ENGAGEMENT`), Stage Title, and 1-line problem recognition.
- **4-Step Pipeline Strip:** 4 horizontal micro-cards showing phases (`01 Discovery`, `02 Prototype`, `03 Full-Stack`, `04 Telemetry`) with icon and hover highlights.
- **Velocity Metrics:** 3 prominent metric chips (`3-4 Wks MVP`, `100% TypeScript Fidelity`, `0 Early Tech Debt`) + primary CTA button.

### Implementation Reference
- Component: `src/components/ui/collaboration-blueprints/Concept1ScrubberCapsule.tsx`
- Styles: `.scrubberCard`, `.scrubberTrackWrap`, `.scrubberNodeList`, `.capsuleBody`, `.capsulePipeline`, `.capsuleMetricsRow` in `BlueprintConcepts.module.css`.

---

## Concept 02: Founder Diagnostic Bento ("Pick Your Problem")

### Design Philosophy
A Stripe / modern SaaS bento-box pattern centered on **empathy and problem identification**. Instead of presenting technical stages, it presents the friction the visitor is feeling in their own voice.

### Key Components
- **4 Bento Diagnostic Cards:**
  1. `01 Greenfield Launch`: *"I have a validated market thesis, but need a production-grade MVP shipped fast without tech debt."* (`3–4 Wks to Live`)
  2. `02 Product Evolution & UX`: *"We have paying users, but usability friction, UI inconsistency, or legacy code is draining velocity."* (`2–3 Wk Sprint`)
  3. `03 Applied AI Workflows`: *"We need grounded LLM/RAG workflows and streaming UI that don't hallucinate or inflate costs."* (`2–4 Wk Rollout`)
  4. `04 High-Scale Hardening`: *"Traffic is accelerating, and sluggish database queries or API timeouts are degrading user trust."* (`3–5 Wk Hardening`)
- **Active Prescription Drawer:** Selecting any card highlights it with an accent glow and opens a prescription panel below with core deliverables chips, target turnaround, and a direct deployment CTA.

### Implementation Reference
- Component: `src/components/ui/collaboration-blueprints/Concept2DiagnosticBento.tsx`
- Styles: `.bentoGrid`, `.bentoCard`, `.bentoDrawer`, `.deliverablesChips`, `.deliverableChip` in `BlueprintConcepts.module.css`.

---

## Concept 04: Range Slider & Metric Radar

### Design Philosophy
An Apple product configurator / minimal range controller. Perfect for ultra-compact vertical spaces (<300px total height).

### Key Components
- **Tactile Range Track:** An HTML5 range slider (`min=0 max=3 step=1`) with styled accent thumb and 4 clickable label buttons.
- **Metric Radar / Gauges:** 3 animated progress bars displaying:
  - *Sprint Velocity* (e.g. `96%` or `3.2x`)
  - *Engineering Rigor* (`100% Fidelity` or `<100ms Perceived Latency`)
  - *Tech Debt Risk* (`0% Regressions`)
- **Footer Strip:** Core shipment tags and a direct blueprint deployment button.

### Implementation Reference
- Component: `src/components/ui/collaboration-blueprints/Concept4RangeRadar.tsx`
- Styles: `.radarCard`, `.rangeSliderWrap`, `.rangeTrackBar`, `.radarGaugesGrid`, `.radarGaugeBar` in `BlueprintConcepts.module.css`.

---

## How to Reactivate Any Concept
To swap back to or experiment with any of these concepts in the future:
1. Import the desired component into `src/components/ui/BuildSituationGuide.tsx`:
   ```tsx
   import { Concept1ScrubberCapsule } from "./collaboration-blueprints/Concept1ScrubberCapsule";
   // or
   import { Concept2DiagnosticBento } from "./collaboration-blueprints/Concept2DiagnosticBento";
   // or
   import { Concept4RangeRadar } from "./collaboration-blueprints/Concept4RangeRadar";
   ```
2. Render `<Concept1ScrubberCapsule />` within the section wrapper.

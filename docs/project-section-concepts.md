# Project section concept reference

The portfolio currently uses **The Case Study Deck**. It was selected because it keeps the section compact, makes the work feel tactile, and puts a measurable outcome on every card without requiring long case-study copy.

The four earlier directions are recorded here so they can be revisited without keeping unused production components in the application bundle.

## 01 — The Focus Stage

**Core idea:** A vertical project selector controls one large editorial stage. Hovering, focusing, or clicking a project swaps the headline, metrics, technology tags, and product screenshot.

**Visual character:** Quiet, premium, and portfolio-like. One project dominates while the other titles recede into a narrow rail.

**Signature interaction:** The active screenshot reveals from left to right and responds to pointer movement with a restrained 3D tilt.

**Best when:** Each project eventually has a dedicated case study and the section should encourage deliberate exploration.

**Restore with:** A client-side `activeProject` index, a three-item tab rail, one shared content panel, and pointer-position CSS variables for the media tilt.

## 02 — The Kinetic Film Rail

**Core idea:** Projects appear as oversized case-study covers in a horizontal, scroll-snapping reel.

**Visual character:** Cinematic and image-led. It feels like browsing a film strip or editorial lookbook.

**Signature interaction:** Drag, swipe, trackpad-scroll, or use previous/next controls to move between project frames. Images scale slightly on hover.

**Best when:** Project screenshots are visually strong and the portfolio should feel more expressive than informational.

**Restore with:** A horizontal flex track using `overflow-x: auto`, `scroll-snap-type: x mandatory`, large 16:9 covers, and arrow controls calling `scrollBy`.

## 03 — The Expanding Index

**Core idea:** A compact list of project titles expands one row at a time into a screenshot, outcome, and small technology line.

**Visual character:** Editorial, structured, and space-efficient. It resembles an index in an architecture or design publication.

**Signature interaction:** Hovering or clicking a row smoothly opens its detail area while the previous row collapses.

**Best when:** The site needs to expose several projects without making the page initially feel long or card-heavy.

**Restore with:** An `activeProject` index, semantic disclosure buttons, animated `max-height` detail panels, and a two-column image/detail reveal.

## 04 — The Impact Signal Board

**Core idea:** Each project opens with one oversized result, followed by a short product statement and cropped interface view.

**Visual character:** High-contrast, technical, and performance-focused. The dark grid and animated signal bars evoke an operations console.

**Signature interaction:** Project tabs switch the primary metric, headline, technology chips, and screenshot with staggered entrance motion.

**Best when:** Quantified results are the strongest part of the portfolio story and need to register immediately.

**Restore with:** A dark contained panel, project tab row, one large monospace metric, decorative CSS signal bars, and keyed content transitions.

## Current direction — The Case Study Deck

**Component:** `src/components/ui/ProjectDeckSection.tsx`

**Styles:** `src/components/ui/ProjectDeckSection.module.css`

The front card advances on click; the visible cards can also be selected directly. Previous and next buttons provide explicit navigation, and left/right arrow keys work when focus is inside the section. Motion is disabled for users who prefer reduced motion.

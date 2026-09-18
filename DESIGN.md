---
name: Leno Creative Portfolio
version: 1.0.0
colors:
  background: "#141414"
  surface: "#1f1f1f"
  surface-hover: "#2a2a2a"
  text-primary: "#f8f8f8"
  text-secondary: "#a3a3a3"
  text-muted: "#737373"
  border: "#333333"
  border-light: "rgba(255, 255, 255, 0.15)"
  accent: "#d4b185"
  overlay: "rgba(20, 20, 20, 0.75)"
typography:
  display-script:
    fontFamily: Kaushan Script, cursive
    fontSize: 80px
    fontWeight: 400
    lineHeight: 1.1
  heading-stencil:
    fontFamily: Sirin Stencil, sans-serif
    fontSize: 32px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0.05em
  body:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  label-uppercase:
    fontFamily: system-ui, -apple-system, sans-serif
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.1em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  xxl: 80px
components:
  nav-drawer:
    backgroundColor: "{colors.background}"
    textColor: "{colors.text-primary}"
    padding: 24px
  project-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    border: "{colors.border}"
  action-button:
    backgroundColor: "{colors.text-primary}"
    textColor: "{colors.background}"
    rounded: "{rounded.full}"
    padding: 14px
---

# Leno Creative Portfolio Design Specification

## Overview
A high-end editorial and kinetic portfolio designed for a creative developer / creative technologist. The visual identity merges bold editorial typography (script + stencil) with modern minimalist brutalism, high-contrast monochrome tones, and smooth spatial transitions powered by Lenis and GSAP.

## Colors
- **Background (`#141414`)**: Deep obsidian canvas giving maximum prominence to imagery, video, and typography.
- **Surface (`#1f1f1f`)**: Subtle elevated cards for projects and interactive panels.
- **Text Primary (`#f8f8f8`)**: High-contrast near-white for headings and titles.
- **Text Secondary (`#a3a3a3`)**: Balanced neutral tone for narrative copy and descriptions.
- **Accent (`#d4b185`)**: Refined warm champagne tone for subtle highlights and hover states. No generic saturated purple.

## Typography
- **Display Script**: "Kaushan Script" reserved for dramatic expressive titles, logo branding, and section hero statements.
- **Heading Stencil**: "Sirin Stencil" for section subheadings, taglines, and category tags.
- **Body & Labels**: Clean system sans-serif for optimal readability in project descriptions, metadata, and navigation.

## Layout
- **Single Page Continuous Flow**: Seamless vertical journey managed by Lenis smooth scrolling.
- **Horizontal Gallery**: Pinning transition for showcase projects on desktop, adapting gracefully to touch interaction on mobile.
- **Curtain Masking Frame**: Fixed visual viewport frame that reveals scrolling milestone cards underneath.

## Elevation & Depth
- Minimal drop shadows. Depth is communicated through parallax scroll speeds, dark translucent overlays (`rgba(20, 20, 20, 0.75)`), and stark contrast layers.

## Shapes
- Crisp architectural lines (`rounded: 0px` for imagery and cards).
- Organic clip-path polygons for interactive drawers and buttons.

## Components
- **Gesture Navigation Drawer**: Pull-down header with angled polygon tab and Lenis smooth-to-target links.
- **Project Showcase Card**: High-contrast image card with grayscale-to-color viewport transitions and tech stack badges.
- **Timeline Milestone Card**: Structured chronological item with year, role, and achievement narrative.

## Do's and Don'ts
- **DO**: Maintain generous negative space and let typography breathe.
- **DO**: Provide smooth touch-friendly mobile fallbacks for pinned scroll sections.
- **DON'T**: Introduce loud neon gradients or generic SaaS purple.
- **DON'T**: Block touch scroll gestures on mobile devices.

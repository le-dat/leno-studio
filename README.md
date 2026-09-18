# ✦ Leno Studio — Creative Developer Portfolio

> A high-end kinetic portfolio web experience engineered with **React 19, Lenis Smooth Scroll, GSAP 3 ScrollTrigger, Framer Motion, and Styled-Components**.

---

## 🌟 Highlights & Architecture

- **100% Data-Driven**: Everything (personal bio, philosophy, projects, milestones, skills ticker, CTA, media) is managed in a single file: `src/data/portfolioData.js`.
- **Modern Smooth Scroll Engine**: Powered by **[Lenis](https://github.com/darkroomengineering/lenis)**, providing native trackpad feel, zero lag, full mobile accessibility, and seamless synchronization with GSAP ScrollTrigger via `gsap.ticker`.
- **Horizontal Scroll Pinning**: Desktop section "Works" pins and translates horizontally across projects with interactive grayscale-to-color transitions.
- **Dynamic Multi-Plane Parallax**: Section "About" features sticky bio text and multi-speed floating images (reproducing the dramatic $5\times$ velocity effect natively via GSAP).
- **Curtain Mask Frame Reveal**: Section "Timeline" presents milestones sliding behind an architectural viewport frame.
- **Design Tokens**: Structured in `DESIGN.md` and synchronized with `src/styles/Themes.js` and `src/styles/GlobalStyles.js`.

---

## 🚀 Quick Start

### 1. Install & Run Locally

```bash
bun install
bun run dev      # start dev server
bun run build    # build for production
bun run preview  # preview production build
```

### 2. Customizing Your Information

Open `src/data/portfolioData.js`:
- **Personal Info**: Update `name`, `brandName`, `title`, `bio`, `philosophy`, and `socials`.
- **Media**: Update `heroMedia` (video showreel & poster) or `aboutImages`.
- **Projects**: Edit or add new items in the `projects` array.
- **Timeline**: Update career milestones in the `milestones` array.
- **Skills Ticker**: Customize marquee phrases in `marqueeData`.
- **Navigation & Sections**: Labels and descriptions are in `navLinks` and `sectionContent`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Package Manager**: Bun
- **Smooth Scroll**: Lenis (`lenis`)
- **Animation**: GSAP 3 (`gsap`, `ScrollTrigger`) + Framer Motion 12
- **Styling**: Styled-Components 6
- **Typography**: `@fontsource/kaushan-script`, `@fontsource/sirin-stencil`

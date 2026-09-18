// =========================================================================
// 🌟 PORTFOLIO DATA LAYER — SINGLE SOURCE OF TRUTH
// =========================================================================
// Sửa thông tin cá nhân, nội dung các section, hình ảnh và video tại đây.
// Toàn bộ website sẽ tự động cập nhật đồng bộ!

import mainVideo from '../assets/Walking Girl.mp4';
import heroPoster from '../assets/Images/1.webp';

import aboutImgMain from '../assets/Images/1.webp';
import aboutImgFloat1 from '../assets/Images/2.webp';
import aboutImgFloat2 from '../assets/Images/7.webp';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';

import img11 from '../assets/Images/11.webp';
import img12 from '../assets/Images/12.webp';
import img13 from '../assets/Images/13.webp';
import img14 from '../assets/Images/14.webp';

// 1. Metadata trang web
export const siteMetadata = {
  title: "Leno Studio — Creative Technologist & Frontend Architect",
  description: "Portfolio of Le Dat — Leno Studio specializing in kinetic interactions, WebGL, and high-performance web systems.",
  siteUrl: "https://leno.studio",
};

// 2. Menu Điều Hướng (Navigation Links)
export const navLinks = [
  { label: "Home", target: "#home" },
  { label: "About", target: "#about" },
  { label: "Projects", target: "#projects" },
  { label: "Timeline", target: "#timeline" },
  { label: "Contact", target: "#contact" },
];

// 3. Thông tin cá nhân & Giới thiệu
export const personalInfo = {
  name: "Le Dat",
  brandName: "Leno",
  heroSubtitle: "inspire. create. craft",
  title: "Creative Technologist & Frontend Architect",
  location: "Vietnam / Remote Worldwide",
  bio: "Specializing in the intersection of generative motion, editorial typography, and high-performance frontend engineering. Transforming digital ideas into kinetic, sculptural web experiences.",
  philosophy: "crafting digital solutions where structural integrity meets emotive visual rhythm. Every interface is approached as a digital exhibition — engineered for performance and designed for tactile delight.",
  
  heroMedia: {
    video: mainVideo,
    poster: heroPoster,
  },

  aboutImages: {
    main: aboutImgMain,
    float1: aboutImgFloat1,
    float2: aboutImgFloat2,
  },

  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Design Awards", value: "Awwwards HM" },
  ],

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "contact@leno.studio",
  },
};

// 4. Tiêu đề & Nội dung mô tả từng Section
export const sectionContent = {
  about: {
    heading: "About",
  },
  projects: {
    heading: "Works",
    label: "Selected Works",
    title: "Digital Architecture & Creative Code",
    description: "A curated exhibition of kinetic web platforms, interactive shaders, and bespoke brand systems. Each project is architected with meticulous attention to performance, typography, and tactile fluidity.",
  },
  timeline: {
    heading: "Timeline",
    label: "Milestones",
    description: "Key chapters and evolutionary steps in creative engineering, design systems research, and interactive production.",
  },
  contact: {
    heading: "Have an Idea?",
    description: "Available for select commissions, creative collaborations, and senior architectural advisory.",
    ctaButton: "Start a Conversation",
    footerCredit: "Architected with React 19, Lenis & GSAP",
  },
};

// 5. Chữ chạy vô tận (Marquee Ticker)
export const marqueeData = {
  skills: [
    "CREATIVE CODING",
    "GSAP SCROLLTRIGGER",
    "LENIS SMOOTH SCROLL",
    "REACT 19",
    "TYPESCRIPT",
    "SHADERS & GLSL",
    "MICRO-INTERACTIONS",
    "WEB PERFORMANCE",
    "EDITORIAL TYPOGRAPHY",
    "SYSTEM ARCHITECTURE",
  ],
  phrasesScript: [
    "Engineering Tactile Interfaces",
    "Motion Driven Systems",
    "Sculptural Code",
    "Engineering Tactile Interfaces",
    "Motion Driven Systems",
  ],
  phrasesBold: [
    "IMMERSIVE EXPERIENCES",
    "PERFORMANCE ARCHITECTURE",
    "GENERATIVE MOTION",
    "BESPOKE CRAFT",
    "IMMERSIVE EXPERIENCES",
    "PERFORMANCE ARCHITECTURE",
  ],
};

// 6. Danh sách Dự Án (Selected Projects)
export const projects = [
  {
    id: "01",
    title: "Aura Editorial",
    category: "Fashion & Kinetic Web",
    year: "2025",
    description: "An experimental high-fashion lookbook showcasing fluid inertia scrolling and real-time audio reactivity.",
    tech: ["React", "GSAP", "Lenis", "WebGL"],
    image: img3,
    link: "#",
  },
  {
    id: "02",
    title: "Vortex Spatial",
    category: "3D Interactive Experience",
    year: "2025",
    description: "Interactive brand universe engineered with custom GLSL shaders and seamless page transitions.",
    tech: ["Three.js", "GLSL", "GSAP ScrollTrigger"],
    image: img4,
    link: "#",
  },
  {
    id: "03",
    title: "Noir Architecture",
    category: "Brutalist Showcase",
    year: "2024",
    description: "Architectural monograph presenting minimal structures with dynamic lighting simulation.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: img1,
    link: "#",
  },
  {
    id: "04",
    title: "Chronos Monograph",
    category: "Editorial Publication",
    year: "2024",
    description: "Digital archive preserving horological history through custom typography and interactive timelines.",
    tech: ["React", "Styled Components", "Canvas API"],
    image: img2,
    link: "#",
  },
  {
    id: "05",
    title: "Ether Soundscape",
    category: "Audio-Visual Platform",
    year: "2024",
    description: "Generative ambient sound generator with particle physics reacting to user cursor gestures.",
    tech: ["Web Audio API", "Three.js", "TypeScript"],
    image: img5,
    link: "#",
  },
  {
    id: "06",
    title: "Sovereign Atelier",
    category: "Luxury E-Commerce Concept",
    year: "2023",
    description: "Avant-garde apparel flagship with smooth cart orchestration and micro-interactions.",
    tech: ["React", "GSAP", "Framer Motion"],
    image: img6,
    link: "#",
  },
];

// 7. Cột mốc Sự Nghiệp & Kinh Nghiệm (Timeline Milestones)
export const milestones = [
  {
    id: "m1",
    year: "2025 — Present",
    role: "Lead Creative Developer",
    organization: "Independent Studio",
    description: "Crafting bespoke web identities and interactive design systems for global brands and creative agencies.",
    image: img11,
  },
  {
    id: "m2",
    year: "2023 — 2025",
    role: "Senior Frontend Engineer",
    organization: "Vanguard Digital Lab",
    description: "Spearheaded headless e-commerce architectures, cutting page load times by 45% and elevating CWV scores to 98+.",
    image: img12,
  },
  {
    id: "m3",
    year: "2022 — 2023",
    role: "Interactive UI Developer",
    organization: "Studio Kinetix",
    description: "Engineered WebGL particle systems and GSAP scroll experiences awarded Site of the Day accolades.",
    image: img13,
  },
  {
    id: "m4",
    year: "2021 — 2022",
    role: "Design Technologist",
    organization: "Form & Function",
    description: "Researched accessible motion heuristics and developed reusable animation primitives for design tokens.",
    image: img14,
  },
];

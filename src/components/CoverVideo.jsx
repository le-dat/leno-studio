import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 20%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: radial-gradient(
    circle at center,
    rgba(20, 20, 20, 0.45) 0%,
    rgba(20, 20, 20, 0.85) 100%
  );
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.textPrimary};
  pointer-events: none;

  .letters-row {
    display: flex;
    flex-direction: row;
    gap: 0.2rem;
  }

  h1 {
    font-family: 'Kaushan Script', cursive;
    font-size: ${(props) => props.theme.fontBig};
    line-height: 0.9;
    text-shadow: 2px 4px 16px rgba(0, 0, 0, 0.8);

    @media (max-width: 64em) {
      font-size: 7rem;
    }
    @media (max-width: 48em) {
      font-size: 5rem;
    }
    @media (max-width: 30em) {
      font-size: 3.8rem;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'Sirin Stencil', sans-serif;
    font-weight: 400;
    letter-spacing: 0.35em;
    color: ${(props) => props.theme.accent};
    text-shadow: 1px 2px 10px rgba(0, 0, 0, 0.9);
    margin-top: 1rem;
    text-transform: uppercase;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontsm};
      letter-spacing: 0.2em;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const CoverVideo = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    const titleEl = titleRef.current;

    if (!el || !titleEl) return;

    // Subtle parallax effect on scroll
    const anim = gsap.to(titleEl, {
      y: 120,
      opacity: 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      anim.kill();
    };
  }, []);

  const brandLetters = (personalInfo.brandName || "Leno").split('');

  return (
    <VideoContainer ref={containerRef}>
      <DarkOverlay />

      <Title
        ref={titleRef}
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <div className="letters-row">
          {brandLetters.map((char, index) => (
            <motion.h1 key={index} variants={letterVariants}>
              {char}
            </motion.h1>
          ))}
        </div>
        <motion.h2 variants={letterVariants}>
          {personalInfo.heroSubtitle}
        </motion.h2>
      </Title>

      <video
        src={personalInfo.heroMedia.video}
        poster={personalInfo.heroMedia.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
    </VideoContainer>
  );
};

export default CoverVideo;

import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import { milestones, sectionContent } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.background};
  overflow: hidden;

  @media (max-width: 48em) {
    min-height: auto;
    padding: 4rem 1.5rem;
    flex-direction: column;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 32vw;
  height: 85vh;
  box-shadow: 0 0 0 50vw ${(props) => props.theme.background};
  border: 1px solid ${(props) => props.theme.accent};
  z-index: 11;
  pointer-events: none;

  @media (max-width: 70em) {
    width: 42vw;
  }
  @media (max-width: 64em) {
    width: 52vw;
  }
  @media (max-width: 48em) {
    display: none;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 28vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;

  @media (max-width: 70em) {
    width: 38vw;
  }
  @media (max-width: 64em) {
    width: 48vw;
  }
  @media (max-width: 48em) {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    gap: 3rem;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontBig};
  font-family: 'Kaushan Script', cursive;
  font-weight: 300;
  color: ${(props) => props.theme.textPrimary};
  opacity: 0.12;
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 12;
  pointer-events: none;

  @media (max-width: 64em) {
    font-size: 5rem;
  }
  @media (max-width: 48em) {
    position: relative;
    top: auto;
    left: auto;
    font-size: 3.5rem;
    opacity: 0.85;
    margin-bottom: 2rem;
    align-self: flex-start;
  }
`;

const SideNarrative = styled.div`
  width: 22%;
  position: absolute;
  top: 4rem;
  right: 4rem;
  z-index: 12;

  .label {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontxs};
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1rem;
    display: block;
  }

  p {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
  }

  @media (max-width: 64em) {
    width: 28%;
    right: 2rem;
  }

  @media (max-width: 48em) {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const MilestoneItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  padding: 1.5rem;

  .img-box {
    width: 100%;
    height: 22rem;
    overflow: hidden;
    margin-bottom: 1.2rem;
    background-color: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(80%);
      transition: filter 0.4s ease;
    }
  }

  &:hover .img-box img {
    filter: grayscale(0%);
  }

  .year-badge {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontxs};
    letter-spacing: 0.15em;
    color: ${(props) => props.theme.accent};
    margin-bottom: 0.4rem;
  }

  .role-title {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.textPrimary};
    text-align: center;
    margin-bottom: 0.25rem;
  }

  .org-name {
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => props.theme.textMuted};
    margin-bottom: 0.75rem;
  }

  .desc {
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => props.theme.textSecondary};
    text-align: center;
    line-height: 1.6;
  }

  @media (max-width: 48em) {
    margin: 0;

    .img-box {
      height: 18rem;
    }
  }
`;

const NewArrival = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Desktop mask scroll
    mm.add('(min-width: 48.01em)', () => {
      const section = sectionRef.current;
      const scrollingEl = scrollContainerRef.current;

      if (!section || !scrollingEl) return;

      const totalScrollDistance = scrollingEl.scrollHeight - window.innerHeight * 0.8;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalScrollDistance + window.innerHeight}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(scrollingEl, {
        y: () => -(scrollingEl.scrollHeight - window.innerHeight * 0.85),
        ease: 'none',
      });

      return () => {
        tl.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="timeline">
      <Title>{sectionContent.timeline.heading}</Title>

      <SideNarrative>
        <span className="label">{sectionContent.timeline.label}</span>
        <p>{sectionContent.timeline.description}</p>
      </SideNarrative>

      <Overlay />

      <Container ref={scrollContainerRef}>
        {milestones.map((item) => (
          <MilestoneItem key={item.id}>
            <div className="img-box">
              <img src={item.image} alt={item.role} loading="lazy" />
            </div>
            <span className="year-badge">{item.year}</span>
            <h4 className="role-title">{item.role}</h4>
            <span className="org-name">{item.organization}</span>
            <p className="desc">{item.description}</p>
          </MilestoneItem>
        ))}
      </Container>
    </Section>
  );
};

export default NewArrival;

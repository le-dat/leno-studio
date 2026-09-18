import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { projects, sectionContent } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 48em) {
    flex-direction: column;
    overflow: visible;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script", cursive;
  font-weight: 300;
  color: ${(props) => props.theme.textPrimary};
  opacity: 0.12;
  position: absolute;
  top: 1rem;
  left: 2%;
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;

  @media (max-width: 64em) {
    font-size: 6rem;
  }
  @media (max-width: 48em) {
    position: relative;
    font-size: 4rem;
    opacity: 0.85;
    padding: 2rem 1.5rem 0;
  }
`;

const Left = styled.div`
  width: 32%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  min-height: 100vh;
  z-index: 10;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;
  border-right: 1px solid ${(props) => props.theme.border};

  .section-label {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontxs};
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${(props) => props.theme.accent};
    margin-bottom: 1rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontxxl};
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 300;
    line-height: 1.7;
    color: ${(props) => props.theme.textSecondary};
  }

  @media (max-width: 64em) {
    width: 38%;
    padding: 0 2rem;
  }

  @media (max-width: 48em) {
    position: relative;
    width: 100%;
    min-height: auto;
    padding: 1.5rem;
    border-right: none;
    border-bottom: 1px solid ${(props) => props.theme.border};

    h3 {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5vw;
  padding-right: 15vw;
  min-height: 100vh;

  @media (max-width: 48em) {
    flex-direction: column;
    padding: 2rem 1.5rem;
    min-height: auto;
    width: 100%;
    gap: 3rem;
  }
`;

const Card = styled(motion.div)`
  display: inline-block;
  width: 25rem;
  margin-right: 6rem;
  background-color: ${(props) => props.theme.surface};
  border: 1px solid ${(props) => props.theme.border};
  position: relative;
  transition: transform 0.4s ease, border-color 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: ${(props) => props.theme.accent};
  }

  .img-wrapper {
    width: 100%;
    height: 30rem;
    overflow: hidden;
    position: relative;
    background-color: #000;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.5s ease, transform 0.7s ease;
      filter: grayscale(80%) contrast(110%);
    }
  }

  &:hover .img-wrapper img {
    filter: grayscale(0%) contrast(100%);
    transform: scale(1.04);
  }

  .card-body {
    padding: 1.5rem;
  }

  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .card-id {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.accent};
    letter-spacing: 0.1em;
  }

  .card-category {
    font-size: ${(props) => props.theme.fontxs};
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.textMuted};
  }

  .card-title {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 0.75rem;
  }

  .card-desc {
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .tag {
    font-size: 0.68rem;
    padding: 0.2rem 0.6rem;
    background-color: ${(props) => props.theme.surfaceHover};
    border: 1px solid ${(props) => props.theme.borderLight};
    color: ${(props) => props.theme.textPrimary};
    letter-spacing: 0.05em;
  }

  @media (max-width: 64em) {
    width: 21rem;
    margin-right: 4rem;

    .img-wrapper {
      height: 25rem;
    }
  }

  @media (max-width: 48em) {
    width: 100%;
    margin-right: 0;

    .img-wrapper {
      height: 22rem;
    }
  }
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="img-wrapper">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span className="card-id">{project.id}</span>
          <span className="card-category">{project.category}</span>
        </div>
        <h4 className="card-title">{project.title}</h4>
        <p className="card-desc">{project.description}</p>
        <div className="card-tags">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

const Shop = () => {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    // Only apply GSAP horizontal pinning on desktop screens (> 768px)
    const mm = gsap.matchMedia();

    mm.add("(min-width: 48.01em)", () => {
      const section = sectionRef.current;
      const horizontal = horizontalRef.current;

      if (!section || !horizontal) return;

      const totalScroll = horizontal.scrollWidth - window.innerWidth + window.innerWidth * 0.35;

      const tween = gsap.to(horizontal, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${totalScroll}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="projects">
      <Title>{sectionContent.projects.heading}</Title>
      <Left>
        <span className="section-label">{sectionContent.projects.label}</span>
        <h3>{sectionContent.projects.title}</h3>
        <p>{sectionContent.projects.description}</p>
      </Left>

      <Right ref={horizontalRef}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Right>
    </Section>
  );
};

export default Shop;

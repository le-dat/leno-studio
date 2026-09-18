import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { personalInfo, sectionContent } from "../data/portfolioData";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 130vh;
  width: 85vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 8rem 0 6rem;

  @media (max-width: 64em) {
    width: 90vw;
    flex-direction: column;
    padding: 4rem 0;
    min-height: auto;
  }
`;

const Left = styled.div`
  width: 48%;
  position: sticky;
  top: 15vh;
  align-self: flex-start;
  z-index: 10;
  padding-right: 3.5rem;

  .bio-intro {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    line-height: 1.7;
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 2rem;
  }

  .bio-philosophy {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => props.theme.textSecondary};
    line-height: 1.7;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    margin-top: 3rem;
    border-top: 1px solid ${(props) => props.theme.border};
    padding-top: 2rem;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontxl};
    color: ${(props) => props.theme.accent};
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: ${(props) => props.theme.fontxs};
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${(props) => props.theme.textSecondary};
  }

  @media (max-width: 64em) {
    position: relative;
    top: auto;
    width: 100%;
    padding-right: 0;
    margin-top: 2rem;

    .bio-intro {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 30em) {
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1.2rem;
    }
  }
`;

const Right = styled.div`
  width: 52%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 110vh;

  .main-img {
    width: 72%;
    height: auto;
    border: 1px solid ${(props) => props.theme.border};
    filter: contrast(105%);
    z-index: 2;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  .floating-img-1 {
    width: 38%;
    position: absolute;
    left: -12%;
    bottom: -10%;
    border: 1px solid ${(props) => props.theme.borderLight};
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.75);
    z-index: 5;
  }

  .floating-img-2 {
    width: 36%;
    position: absolute;
    right: -8%;
    top: -5%;
    border: 1px solid ${(props) => props.theme.borderLight};
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.75);
    z-index: 1;
  }

  @media (max-width: 64em) {
    width: 100%;
    min-height: auto;
    margin-top: 5rem;
    padding-bottom: 4rem;

    .main-img {
      width: 80%;
    }

    .floating-img-1 {
      width: 42%;
      left: 0%;
      bottom: -10%;
    }

    .floating-img-2 {
      width: 38%;
      right: 0%;
      top: -8%;
    }
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
  left: 0;
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;

  @media (max-width: 64em) {
    font-size: 5rem;
    position: relative;
    top: 0;
    margin-bottom: 1.5rem;
    opacity: 0.85;
  }
  @media (max-width: 30em) {
    font-size: 3.5rem;
  }
`;

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const floatImg1Ref = useRef(null);
  const floatImg2Ref = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const mm = gsap.matchMedia();

    // Desktop high-velocity parallax
    mm.add("(min-width: 48.01em)", () => {
      const titleTween = gsap.fromTo(
        titleRef.current,
        { x: 100 },
        {
          x: -320,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      const img1Tween = gsap.fromTo(
        floatImg1Ref.current,
        { y: 240 },
        {
          y: -360,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      const img2Tween = gsap.fromTo(
        floatImg2Ref.current,
        { y: -180 },
        {
          y: 260,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );

      return () => {
        titleTween.kill();
        img1Tween.kill();
        img2Tween.kill();
      };
    });

    // Mobile gentle parallax
    mm.add("(max-width: 48em)", () => {
      const img1Mobile = gsap.fromTo(
        floatImg1Ref.current,
        { y: 60 },
        {
          y: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      const img2Mobile = gsap.fromTo(
        floatImg2Ref.current,
        { y: -40 },
        {
          y: 70,
          ease: "none",
          scrollTrigger: {
            trigger: sec,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      return () => {
        img1Mobile.kill();
        img2Mobile.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <Section ref={sectionRef} id="about">
      <Title ref={titleRef}>{sectionContent.about.heading}</Title>

      <Left>
        <p className="bio-intro">{personalInfo.bio}</p>
        <p className="bio-philosophy">
          Based in {personalInfo.location}, {personalInfo.philosophy}
        </p>

        <div className="stats-grid">
          {personalInfo.stats.map((item, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </Left>

      <Right>
        <img
          className="main-img"
          width="400"
          height="600"
          src={personalInfo.aboutImages.main}
          alt={personalInfo.name}
          loading="lazy"
        />
        <img
          ref={floatImg1Ref}
          className="floating-img-1"
          width="300"
          height="450"
          src={personalInfo.aboutImages.float1}
          alt="Creative focus"
          loading="lazy"
        />
        <img
          ref={floatImg2Ref}
          className="floating-img-2"
          width="300"
          height="450"
          src={personalInfo.aboutImages.float2}
          alt="Visual design"
          loading="lazy"
        />
      </Right>
    </Section>
  );
};

export default About;

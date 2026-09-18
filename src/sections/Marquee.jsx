import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { marqueeData } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  min-height: 80vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: ${(props) => props.theme.background};
  padding: 4rem 0;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
`;

const MarqueeRow = styled.div`
  width: 100%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  user-select: none;
`;

const BannerText = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-family: 'Sirin Stencil', sans-serif;
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${(props) => props.theme.textPrimary};
  will-change: transform;

  .star-symbol {
    color: ${(props) => props.theme.accent};
    font-size: 1.5rem;
  }

  &.script-style {
    font-family: 'Kaushan Script', cursive;
    color: ${(props) => props.theme.accent};
    font-size: ${(props) => props.theme.fontxxxl};
    letter-spacing: 0.05em;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    gap: 2rem;

    &.script-style {
      font-size: ${(props) => props.theme.fontxxl};
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    gap: 1.5rem;

    &.script-style {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const Marquee = () => {
  const sectionRef = useRef(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;

    const t1 = gsap.to(row1Ref.current, {
      x: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    const t2 = gsap.to(row2Ref.current, {
      x: 180,
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    const t3 = gsap.to(row3Ref.current, {
      x: -160,
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    return () => {
      t1.kill();
      t2.kill();
      t3.kill();
    };
  }, []);

  const marqueeGroup1 = [...marqueeData.skills, ...marqueeData.skills];
  const marqueeGroup2 = [...marqueeData.phrasesBold, ...marqueeData.phrasesBold];
  const marqueeGroupScript = [...marqueeData.phrasesScript, ...marqueeData.phrasesScript];

  return (
    <Section ref={sectionRef}>
      <Container>
        <MarqueeRow>
          <BannerText ref={row1Ref}>
            {marqueeGroup1.slice(0, 8).map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <span className="star-symbol">✦</span>
              </React.Fragment>
            ))}
          </BannerText>
        </MarqueeRow>

        <MarqueeRow>
          <BannerText ref={row2Ref} className="script-style">
            {marqueeGroupScript.slice(0, 6).map((phrase, idx) => (
              <React.Fragment key={idx}>
                <span>{phrase}</span>
                <span className="star-symbol">✦</span>
              </React.Fragment>
            ))}
          </BannerText>
        </MarqueeRow>

        <MarqueeRow>
          <BannerText ref={row3Ref}>
            {marqueeGroup2.slice(0, 6).map((item, idx) => (
              <React.Fragment key={idx}>
                <span>{item}</span>
                <span className="star-symbol">✦</span>
              </React.Fragment>
            ))}
          </BannerText>
        </MarqueeRow>
      </Container>
    </Section>
  );
};

export default Marquee;

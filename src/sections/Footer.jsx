import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { personalInfo, sectionContent, navLinks } from "../data/portfolioData";
import { useSmoothScroll } from "../components/SmoothScrollContext";
import LogoImg from "../assets/Svgs/star_white_48dp.svg";

const Section = styled.section`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  position: relative;
  padding: 5rem 0 3rem;
  border-top: 1px solid ${(props) => props.theme.border};
`;

const ContactHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;

  .star-icon {
    width: 3.5rem;
    height: auto;
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 12px ${(props) => props.theme.accent});
  }

  .cta-title {
    font-family: 'Kaushan Script', cursive;
    font-size: ${(props) => props.theme.fontxxxl};
    color: ${(props) => props.theme.textPrimary};
    margin-bottom: 1rem;
    line-height: 1.1;

    @media (max-width: 48em) {
      font-size: 3.5rem;
    }
  }

  .cta-sub {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.textSecondary};
    max-width: 500px;
    margin-bottom: 2rem;
    line-height: 1.6;
    padding: 0 1rem;
  }

  .email-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    background-color: ${(props) => props.theme.textPrimary};
    color: ${(props) => props.theme.background};
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontsm};
    letter-spacing: 0.15em;
    padding: 1rem 2.5rem;
    border-radius: 9999px;
    text-transform: uppercase;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.accent};
      color: #000;
      transform: scale(1.05);
    }
  }
`;

const NavLinks = styled(motion.footer)`
  width: 85vw;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem 0;
    border-top: 1px solid ${(props) => props.theme.borderLight};
    border-bottom: 1px solid ${(props) => props.theme.borderLight};
    gap: 1.5rem;

    @media (max-width: 48em) {
      justify-content: center;
      gap: 1rem;
    }
  }

  li {
    font-family: 'Sirin Stencil', sans-serif;
    font-size: ${(props) => props.theme.fontsm};
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) => props.theme.textSecondary};
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: ${(props) => props.theme.accent};
      transform: translateY(-2px);
    }

    a {
      color: inherit;
    }
  }
`;

const Bottom = styled.div`
  width: 85vw;
  padding-top: 2rem;
  font-size: ${(props) => props.theme.fontxs};
  color: ${(props) => props.theme.textMuted};
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: 0.05em;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 0.8rem;
    text-align: center;
  }
`;

const Footer = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <Section id="contact">
      <ContactHero>
        <img className="star-icon" src={LogoImg} alt="Star Icon" />
        <h3 className="cta-title">{sectionContent.contact.heading}</h3>
        <p className="cta-sub">{sectionContent.contact.description}</p>
        <a className="email-btn" href={`mailto:${personalInfo.socials.email}`}>
          <span>{sectionContent.contact.ctaButton}</span>
          <span>→</span>
        </a>
      </ContactHero>

      <NavLinks
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.target} onClick={() => scrollTo(link.target)}>
              {link.label}
            </li>
          ))}
          {personalInfo.socials.github && (
            <li>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
          )}
          {personalInfo.socials.linkedin && (
            <li>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          )}
          {personalInfo.socials.twitter && (
            <li>
              <a href={personalInfo.socials.twitter} target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
          )}
        </ul>

        <Bottom>
          <span>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
          <span>
            {sectionContent.contact.footerCredit}
          </span>
        </Bottom>
      </NavLinks>
    </Section>
  );
};

export default Footer;

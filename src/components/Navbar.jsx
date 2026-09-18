import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSmoothScroll } from './SmoothScrollContext';
import { navLinks } from '../data/portfolioData';

const NavContainer = styled(motion.div)`
  position: fixed;
  top: ${(props) => (props.$click ? '0' : `-${props.theme.navHeight}`)};
  transition: top 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 50;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.$click ? '0' : `calc(-55vh - 3rem)`)};
  }
`;

const MenuBtn = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  border: 1px solid ${(props) => props.theme.borderLight};
  border-top: none;
  width: 13rem;
  height: 2.6rem;
  outline: none;
  clip-path: polygon(0 0, 100% 0, 82% 100%, 18% 100%);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Sirin Stencil', sans-serif;
  font-size: ${(props) => props.theme.fontsm};
  letter-spacing: 0.15em;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

  &:hover {
    color: ${(props) => props.theme.accent};
    background-color: ${(props) => props.theme.surface};
  }

  @media (max-width: 40em) {
    width: 9rem;
    height: 2.2rem;
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.borderLight};
  color: ${(props) => props.theme.textPrimary};
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0 2rem;
  backdrop-filter: blur(12px);

  @media (max-width: 40em) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2.5rem 0;
    height: 55vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  font-family: 'Sirin Stencil', sans-serif;
  font-size: ${(props) => props.theme.fontsm};
  letter-spacing: 0.15em;
  color: ${(props) => props.theme.textPrimary};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const handleScroll = (id) => {
    setClick(false);
    scrollTo(id);
  };

  return (
    <NavContainer
      $click={click}
      initial={{ y: `-100%` }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 60 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)} aria-label="Toggle Navigation Menu">
          <span>{click ? 'CLOSE' : 'NAVIGATION'}</span>
        </MenuBtn>

        {navLinks.map((link) => (
          <Item
            key={link.target}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScroll(link.target)}
          >
            {link.label}
          </Item>
        ))}
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;

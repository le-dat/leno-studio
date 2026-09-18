import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { personalInfo } from '../data/portfolioData';

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background};

  svg {
    width: 80px;
    height: 80px;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    @media (max-width: 48em) {
      width: 60px;
      height: 60px;
    }

    g path {
      stroke: ${(props) => props.theme.accent};
      stroke-width: 1.5;
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.8,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

const Text = styled(motion.span)`
  font-family: 'Sirin Stencil', sans-serif;
  font-size: ${(props) => props.theme.fontlg};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: ${(props) => props.theme.textPrimary};
  padding-top: 1.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const SubText = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxs};
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: ${(props) => props.theme.textMuted};
  padding-top: 0.5rem;
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg>
      <Text variants={textVariants} initial="hidden" animate="visible">
        {personalInfo.brandName}
      </Text>
      <SubText variants={textVariants} initial="hidden" animate="visible">
        {personalInfo.title}
      </SubText>
    </Container>
  );
};

export default Loader;

import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { personalInfo } from '../data/portfolioData';
import { useSmoothScroll } from './SmoothScrollContext';

const Container = styled.div`
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 40;
  width: fit-content;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0;
  }

  svg {
    width: 2.2rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g path {
      stroke: ${(props) => props.theme.accent};
      stroke-width: 1.5;
    }
  }

  @media (max-width: 48em) {
    top: 1.2rem;
    left: 1.2rem;

    svg {
      width: 1.8rem;
    }
  }
`;

const Text = styled(motion.span)`
  font-family: 'Sirin Stencil', sans-serif;
  font-size: ${(props) => props.theme.fontmd};
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(props) => props.theme.textPrimary};
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.accent};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
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
      duration: 1.5,
      delay: 0.8,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      delay: 1,
      ease: 'easeOut',
    },
  },
};

const Logo = () => {
  const { scrollTo } = useSmoothScroll();

  return (
    <Container>
      <button onClick={() => scrollTo('#home')} aria-label="Return to top">
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
      </button>
    </Container>
  );
};

export default Logo;

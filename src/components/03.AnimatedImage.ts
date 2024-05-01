import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedLogo = styled.img`
  animation: ${rotateAnimation} infinite 9s linear;
`;

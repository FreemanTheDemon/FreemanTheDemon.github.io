import styled, { keyframes, createGlobalStyle } from 'styled-components';

// Sunset gradient animation with more 8-bit color steps
const sunsetGlow = keyframes`
  0% { background-position: 0% 50%; }
  25% { background-position: 25% 25%; }
  50% { background-position: 100% 50%; }
  75% { background-position: 75% 75%; }
  100% { background-position: 0% 50%; }
`;

// 8-bit style glitch effect
const pixelGlitch = keyframes`
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-2px, -1px); }
  20% { transform: translate(1px, 2px); }
  30% { transform: translate(-1px, -2px); }
  40% { transform: translate(2px, 1px); }
  50% { transform: translate(-2px, 2px); }
  60% { transform: translate(1px, -1px); }
  70% { transform: translate(-1px, 1px); }
  80% { transform: translate(2px, -2px); }
  90% { transform: translate(-2px, -1px); }
`;

// Global styles for pixel explosion animation
export const GlobalPixelStyles = createGlobalStyle`
  @keyframes pixelExplode {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 1;
    }
    20% {
      transform: translate(calc(var(--end-x) * 0.2), calc(var(--end-y) * 0.2)) scale(1.2);
      opacity: 1;
    }
    100% {
      transform: translate(var(--end-x), var(--end-y)) scale(0.3);
      opacity: 0;
    }
  }

  .pixel-particle {
    position: fixed;
    width: 4px;
    height: 4px;
    pointer-events: none;
    z-index: 9999;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
`;

export const ContactContainer = styled.div`
  background: linear-gradient(-45deg, #ff4757, #ff6348, #ff3838, #c44569, #f39801, #ffb142, #ff7675, #e84393);
  background-size: 400% 400%;
  animation: ${sunsetGlow} 12s ease infinite;
  color: #5a4fcf;
  font-family: 'Courier New', 'Pixel', monospace;
  font-size: 16px;
  line-height: 1.6;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 13px;
  }
`;

export const SunsetHeader = styled.header`
  margin-bottom: 40px;
  border-bottom: 4px solid #5a4fcf;
  border-image: linear-gradient(90deg, #ff4757, #ff6348, #f39801) 1;
  background: linear-gradient(90deg, #ff4757, #ff6348, #f39801, #ffc048);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 20px;
  position: relative;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 8px rgba(90, 79, 207, 0.3);

  /* Decorative border enhancement */
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff4757, #ff6348, #f39801, #ffc048);
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
    padding-bottom: 15px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const LeftContent = styled.div`
  flex: 1;
`;

export const LoginInfo = styled.div`
  color: #5a4fcf;
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.9;
  font-weight: bold;
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 0.5);

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const UserPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const UserName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #5a4fcf;
  text-shadow: 2px 2px 0px #ffc048, 4px 4px 0px #ff6348;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const PageIndicator = styled.div`
  position: absolute;
  right: 20px;
  bottom: 45px;
  font-size: 16px;
  color: #ffc048;
  font-family: 'Courier New', monospace;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.95;
  font-weight: bold;
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.7), 0 0 4px #ffc048;

  @media (max-width: 768px) {
    position: static;
    margin-top: 5px;
    margin-bottom: 10px;
    text-align: left;
    font-size: 14px;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  right: 0;
  bottom: -21px;
  z-index: 10;

  @media (max-width: 768px) {
    position: static;
    margin-top: 10px;
    bottom: auto;
    right: auto;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const NavButton = styled.button`
  background: #5a4fcf;
  color: #ffc048 !important;
  border: 3px solid #ffc048;
  padding: 12px 24px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 3px 3px 0px #ff6348;
  position: relative;
  vertical-align: middle;
  -webkit-text-fill-color: #ffc048;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  &:hover {
    background: #ffc048;
    color: #5a4fcf !important;
    -webkit-text-fill-color: #5a4fcf;
    border-color: #5a4fcf;
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px #ff6348;
    animation: ${pixelGlitch} 0.3s ease-in-out;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px #ff6348;
  }

  @media (max-width: 480px) {
    padding: 10px 18px;
    font-size: 12px;
  }
`;

export const Section = styled.section`
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const SectionTitle = styled.h2`
  color: #5a4fcf;
  font-size: 28px;
  font-weight: bold;
  margin: 0 0 30px 0;
  text-shadow: 2px 2px 0px #ffc048, 4px 4px 0px #ff6348;
  border-bottom: 4px solid #5a4fcf;
  border-image: linear-gradient(90deg, #ff4757, #ff6348, #f39801) 1;
  padding-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 25px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ContactCard = styled.div`
  background: rgba(90, 79, 207, 0.85);
  border: 4px solid #ffc048;
  padding: 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 4px 4px 0px #ff6348;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0px #ff6348;
    background: rgba(90, 79, 207, 0.95);
    animation: ${pixelGlitch} 0.5s ease-in-out;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 3px 3px 0px #ff6348;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ContactIcon = styled.div`
  font-size: 52px;
  margin-bottom: 15px;
  filter: drop-shadow(2px 2px 0px #ffc048) drop-shadow(4px 4px 0px #ff6348);
  text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 42px;
    margin-bottom: 12px;
  }
`;

export const ContactTitle = styled.h3`
  color: #ffc048;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 12px 0;
  text-shadow: 2px 2px 0px #5a4fcf;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ContactDescription = styled.p`
  color: #ffffff;
  font-size: 14px;
  margin: 0;
  opacity: 0.95;
  line-height: 1.6;
  text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ContactSection = styled.div`
  max-width: 650px;
  margin: 0 auto;
  background: rgba(90, 79, 207, 0.9);
  border: 4px solid #ffc048;
  padding: 35px;
  box-shadow: 6px 6px 0px #ff6348;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff4757, #ff6348, #f39801, #ffc048);
    z-index: -1;
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    box-shadow: 4px 4px 0px #ff6348;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    color: #ffc048;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
    text-shadow: 1px 1px 0px #5a4fcf;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    background: rgba(255, 255, 255, 0.9);
    border: 3px solid #5a4fcf;
    padding: 12px;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    color: #5a4fcf;
    font-weight: bold;
    box-shadow: 2px 2px 0px #ffc048;
    
    &:focus {
      outline: none;
      border-color: #ffc048;
      background: rgba(255, 255, 255, 1);
      box-shadow: 3px 3px 0px #ff6348;
      transform: translate(-1px, -1px);
    }

    &::placeholder {
      color: rgba(90, 79, 207, 0.6);
      font-style: italic;
    }
  }

  textarea {
    resize: vertical;
    min-height: 130px;
    font-family: 'Courier New', monospace;
    line-height: 1.5;
  }

  button[type="submit"] {
    background: #ffc048;
    color: #5a4fcf;
    border: 4px solid #5a4fcf;
    padding: 15px 30px;
    font-family: 'Courier New', monospace;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease;
    text-transform: uppercase;
    letter-spacing: 2px;
    box-shadow: 4px 4px 0px #ff6348;
    
    &:hover {
      background: #ff6348;
      color: #ffffff;
      border-color: #ffffff;
      transform: translate(-2px, -2px);
      box-shadow: 6px 6px 0px #5a4fcf;
      animation: ${pixelGlitch} 0.3s ease-in-out;
    }

    &:active {
      transform: translate(1px, 1px);
      box-shadow: 3px 3px 0px #ff6348;
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 4px solid #ffc048;
  border-image: linear-gradient(90deg, #ff4757, #ff6348, #f39801) 1;
  text-align: center;
  background: rgba(90, 79, 207, 0.9);
  box-shadow: 0 -4px 8px rgba(90, 79, 207, 0.3);

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FooterText = styled.p`
  color: #ffc048;
  margin: 0 0 12px 0;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 2px 2px 0px #5a4fcf;
  text-transform: uppercase;
  letter-spacing: 1px;

  & + p {
    color: #ffffff;
    margin: 0;
    opacity: 0.9;
    font-size: 14px;
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.5);
  }
`;

// Placeholder component (not actually used in DOM, but needed for import)
export const PixelParticle = styled.div`
  position: fixed;
  width: 4px;
  height: 4px;
  pointer-events: none;
  z-index: 9999;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
`; 
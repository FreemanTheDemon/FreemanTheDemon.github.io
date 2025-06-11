import styled, { keyframes, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

// Candlelight flickering animation (keeping this for subtle effects)
const candleFlicker = keyframes`
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 204, 102, 0.8), 0 0 40px rgba(255, 153, 51, 0.6);
    opacity: 1;
  }
  25% { 
    box-shadow: 0 0 25px rgba(255, 204, 102, 0.9), 0 0 50px rgba(255, 153, 51, 0.7);
    opacity: 0.95;
  }
  50% { 
    box-shadow: 0 0 15px rgba(255, 204, 102, 0.7), 0 0 30px rgba(255, 153, 51, 0.5);
    opacity: 0.9;
  }
  75% { 
    box-shadow: 0 0 30px rgba(255, 204, 102, 1), 0 0 60px rgba(255, 153, 51, 0.8);
    opacity: 1;
  }
`;

// Scroll unfurling animation
const scrollUnfurl = keyframes`
  0% { transform: scaleY(0.1); opacity: 0; }
  50% { transform: scaleY(0.8); opacity: 0.7; }
  100% { transform: scaleY(1); opacity: 1; }
`;

// Global styles for medieval fonts
export const GlobalCandleStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Cinzel+Decorative:wght@700&family=Uncial+Antiqua&display=swap');
`;

export const AboutContainer = styled.div`
  background: linear-gradient(135deg, #2a1f1a 0%, #3d2b1d 25%, #4c3425 50%, #3d2b1d 75%, #2a1f1a 100%);
  color: #faf5e6;
  font-family: 'Cinzel', 'Times New Roman', serif;
  font-size: 16px;
  line-height: 1.8;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  position: relative;

  /* Enhanced parchment texture with light blue accents */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(135, 206, 235, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 204, 102, 0.10) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(173, 216, 230, 0.08) 0%, transparent 70%),
      radial-gradient(circle at 30% 70%, rgba(255, 204, 102, 0.06) 0%, transparent 60%);
    pointer-events: none;
    z-index: 1;
  }

  /* Medieval paper texture with light blue highlights */
  &::after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(173, 216, 230, 0.03) 2px, rgba(173, 216, 230, 0.03) 4px),
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 69, 19, 0.02) 2px, rgba(139, 69, 19, 0.02) 4px);
    pointer-events: none;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 13px;
  }
`;

export const ScrollHeader = styled.header`
  margin-bottom: 40px;
  border-bottom: 4px solid #8b4513;
  padding-bottom: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  /* Decorative illuminated border */
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #d4af37, #87ceeb, #dc2626, #059669);
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
  color: #d4af37;
  font-size: 14px;
  margin-bottom: 15px;
  opacity: 0.9;
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

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
  font-weight: 700;
  background: linear-gradient(45deg, #d4af37, #1e3a8a, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 1px;
  font-family: 'Uncial Antiqua', 'Cinzel Decorative', serif;

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
  color: #87ceeb !important;
  font-family: 'Cinzel', serif !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  opacity: 1 !important;
  font-weight: bold !important;
  background: none !important;
  -webkit-text-fill-color: #87ceeb !important;
  text-shadow: none !important;

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
  background: linear-gradient(145deg, #8b4513, #654321);
  color: #d4af37 !important;
  border: 2px solid #d4af37;
  padding: 12px 24px;
  font-family: 'Cinzel', serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-transform: capitalize;
  letter-spacing: 1px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  position: relative;
  -webkit-text-fill-color: #d4af37;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  animation: none;
  vertical-align: middle;

  &:hover {
    background: linear-gradient(145deg, #d4af37, #b8860b);
    color: #1a0f0a !important;
    -webkit-text-fill-color: #1a0f0a;
    border-color: #1a0f0a;
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
    animation: ${candleFlicker} 2s ease-in-out infinite;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  }

  &:not(:hover) {
    animation: none;
    transform: none;
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    animation: none;
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
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 30px 0;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  border-bottom: 4px solid transparent;
  border-image: linear-gradient(90deg, #d4af37, #87ceeb, #dc2626, #059669) 1;
  padding-bottom: 15px;
  text-transform: capitalize;
  letter-spacing: 2px;
  font-family: 'Uncial Antiqua', serif;

  /* Decorative initial capital styling */
  &::first-letter {
    font-size: 120%;
    color: #87ceeb;
    font-family: 'Uncial Antiqua', serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 15px;
    letter-spacing: 1px;
  }
`;

export const ScrollSection = styled.div`
  background: linear-gradient(145deg, rgba(139, 69, 19, 0.5), rgba(101, 67, 33, 0.4));
  border: 3px solid #8b4513;
  padding: 35px;
  margin: 20px 0;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 0.3),
    inset 0 0 40px rgba(173, 216, 230, 0.1),
    0 6px 12px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(135, 206, 235, 0.15);
  position: relative;
  animation: ${scrollUnfurl} 0.8s ease-out;

  /* Illuminated border decoration with light blue */
  &::before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    background: linear-gradient(45deg, #d4af37, #87ceeb, #1e3a8a, #dc2626, #059669, #7c3aed);
    z-index: -1;
    opacity: 0.7;
  }

  /* Corner decorations with light blue glow */
  &::after {
    content: '✠';
    position: absolute;
    top: 15px;
    right: 20px;
    color: #87ceeb;
    font-size: 24px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 10px rgba(135, 206, 235, 0.8);
  }

  @media (max-width: 768px) {
    padding: 25px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const ScrollText = styled.p`
  color: #faf5e6;
  font-size: 16px;
  line-height: 1.9;
  margin: 0 0 25px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 5px rgba(173, 216, 230, 0.2);
  text-align: justify;
  text-indent: 40px;

  /* Decorative initial capitals with light blue */
  &:first-child::first-letter {
    font-size: 300%;
    float: left;
    line-height: 0.8;
    margin: 8px 8px 0 0;
    color: #87ceeb;
    font-family: 'Uncial Antiqua', serif;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    text-indent: 25px;
  }
`;

export const ScrollQuote = styled.blockquote`
  color: #d4af37;
  font-size: 20px;
  font-style: italic;
  font-weight: 600;
  margin: 40px 0;
  padding: 25px;
  border-left: 6px solid #dc2626;
  border-right: 6px solid #1e3a8a;
  background: linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(30, 58, 138, 0.1));
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  position: relative;
  text-align: center;

  &::before, &::after {
    color: #059669;
    font-size: 64px;
    font-family: 'Uncial Antiqua', serif;
    position: absolute;
    line-height: 1;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
  }

  &::before {
    content: '"';
    top: -15px;
    left: 15px;
  }

  &::after {
    content: '"';
    bottom: -45px;
    right: 15px;
  }

  @media (max-width: 480px) {
    font-size: 17px;
    padding: 20px;
    
    &::before, &::after {
      font-size: 48px;
    }
  }
`;

export const ScrollGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ScrollCard = styled.div`
  background: linear-gradient(145deg, rgba(139, 69, 19, 0.6), rgba(101, 67, 33, 0.5));
  border: 3px solid;
  border-image: linear-gradient(135deg, #d4af37, #87ceeb, #1e3a8a, #dc2626, #059669) 1;
  padding: 30px;
  transition: all 0.3s ease;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4), 0 0 15px rgba(135, 206, 235, 0.1);
  position: relative;
  animation: ${scrollUnfurl} 0.6s ease-out;

  /* Corner symbols with light blue glow */
  &::before {
    content: '❦';
    position: absolute;
    top: 10px;
    left: 15px;
    color: #87ceeb;
    font-size: 18px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(135, 206, 235, 0.6);
  }

  &::after {
    content: '❦';
    position: absolute;
    bottom: 10px;
    right: 15px;
    color: #87ceeb;
    font-size: 18px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7), 0 0 8px rgba(135, 206, 235, 0.6);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6), 0 0 25px rgba(135, 206, 235, 0.3);
    background: linear-gradient(145deg, rgba(139, 69, 19, 0.7), rgba(101, 67, 33, 0.6));
    animation: ${candleFlicker} 3s ease-in-out infinite;
  }

  &:not(:hover) {
    animation: none;
    transform: none;
  }

  @media (max-width: 480px) {
    padding: 25px;
  }
`;

export const ScrollCardTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 18px 0;
  color: #d4af37;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Uncial Antiqua', serif;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ScrollCardText = styled.p`
  color: #faf5e6;
  font-size: 15px;
  line-height: 1.8;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 3px rgba(173, 216, 230, 0.15);
  text-align: justify;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Footer = styled.footer`
  margin-top: 60px;
  padding-top: 35px;
  border-top: 4px solid transparent;
  border-image: linear-gradient(90deg, #d4af37, #5b9bd5, #dc2626, #059669, #7c3aed) 1;
  text-align: center;
  background: rgba(139, 69, 19, 0.4);
  box-shadow: 0 -6px 12px rgba(0, 0, 0, 0.3);
  position: relative;

  /* Cross symbol */
  &::before {
    content: '✠';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: #d4af37;
    font-size: 28px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-top: 25px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FooterText = styled.p`
  margin: 0 0 15px 0;
  font-weight: 600;
  font-size: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  font-family: 'Cinzel', serif;
  letter-spacing: 1px;
  background: linear-gradient(45deg, #d4af37, #5b9bd5, #dc2626);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  & + p {
    color: #d4af37;
    margin: 0;
    opacity: 0.9;
    font-size: 14px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`; 
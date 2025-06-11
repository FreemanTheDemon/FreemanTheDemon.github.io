import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeContainer = styled.div`
  background-color: #0f0f0f;
  color: #e0e0e0;
  min-height: 100vh;
  font-family: 'Courier New', 'Lucida Console', Monaco, monospace;
  font-size: 16px;
  line-height: 1.6;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 13px;
  }
`;

export const TerminalHeader = styled.header`
  margin-bottom: 40px;
  border-bottom: 4px solid #333;
  background: linear-gradient(90deg, #00ff00, #00ffff, #00ff00, #ffff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  /* Decorative border enhancement */
  &::before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00ff00, #00ffff, #00ff00, #ffff00);
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
  color: #888;
  font-size: 14px;
  margin-bottom: 15px;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const UserPrompt = styled.div`
  color: #00ff00;
  font-size: 24px;
  font-family: 'Orbitron', 'Courier New', monospace;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const UserName = styled.span`
  color: #fff;
  font-weight: bold;
  text-shadow: 0 0 5px #00ff00;
`;

export const PageIndicator = styled.div`
  position: absolute;
  right: 20px;
  bottom: 45px;
  font-size: 16px;
  color: #00ffff !important;
  font-family: 'Courier New', monospace !important;
  text-transform: uppercase !important;
  letter-spacing: 1px !important;
  opacity: 1 !important;
  font-weight: bold !important;
  background: none !important;
  -webkit-text-fill-color: #00ffff !important;
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
  background-color: #0f0f0f;
  color: #00ff00 !important;
  border: 1px solid #333;
  padding: 12px 24px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  text-transform: lowercase;
  letter-spacing: 1px;
  vertical-align: middle;
  -webkit-text-fill-color: #00ff00;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);

  &:hover {
    background-color: #00ff00;
    color: #000 !important;
    -webkit-text-fill-color: #000;
    border-color: #00ff00;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
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
  color: #00ffff;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Courier New', monospace;
  border-left: 3px solid #00ffff;
  padding-left: 15px;

  @media (max-width: 480px) {
    font-size: 16px;
    padding-left: 10px;
  }
`;

export const PlaceholderText = styled.div`
  color: #888;
  font-style: italic;
  padding: 20px;
  border: 1px dashed #333;
  background-color: #1a1a1a;
  text-align: center;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ProjectCard = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #333;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-color: #00ff00;
    background-color: #202020;
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 150px;
  background-color: #0a0a0a;
  border: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: #666;
  font-size: 12px;

  @media (max-width: 480px) {
    height: 120px;
  }
`;

export const ProjectTitle = styled.h3`
  color: #00ff00;
  font-size: 16px;
  margin-bottom: 10px;
  font-family: 'Courier New', monospace;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ProjectDescription = styled.p`
  color: #ccc;
  font-size: 14px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ProjectTech = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: #888;

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

export const ProjectLinks = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 8px 12px;
  background-color: #333;
  color: #00ff00;
  text-decoration: none;
  border: 1px solid #555;
  font-size: 12px;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00ff00;
    color: #000;
    border-color: #00ff00;
  }

  &:disabled {
    background-color: #2a2a2a;
    color: #666;
    border-color: #444;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 11px;
    justify-content: center;
  }
`;

export const ProjectStatus = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: bold;
  margin-top: 8px;
  font-family: 'Courier New', monospace;

  &.deployed {
    background-color: #006400;
    color: #00ff00;
  }

  &.github-only {
    background-color: #333;
    color: #ffff00;
  }

  &.in-progress {
    background-color: #ff6600;
    color: #fff;
  }
`;

export const ProjectMetadata = styled.div`
  margin-top: 12px;
  font-size: 11px;
  color: #777;
  font-family: 'Courier New', monospace;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Footer = styled.footer`
  margin-top: 60px;
  padding-top: 30px;
  border-top: 2px solid #333;
  text-align: center;
  color: #888;
  font-size: 14px;

  @media (max-width: 768px) {
    margin-top: 40px;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const FooterText = styled.p`
  margin-bottom: 10px;
  color: #00ff00;
`;

// Remove the BlinkingCursor since the animation already provides it
export const BlinkingCursor = styled.span`
  display: none;
`;

// Hide all the unused components
export const TerminalWindow = styled.div`
  display: none;
`;

export const TerminalButtons = styled.div`
  display: none;
`;

export const TerminalButton = styled.div`
  display: none;
`;

export const TerminalBody = styled.div`
  display: none;
`;

export const WelcomeBanner = styled.div`
  display: none;
`;

export const UserInfo = styled.div`
  display: none;
`;

export const PromptLine = styled.div`
  display: none;
`;

export const CommandOutput = styled.div`
  display: none;
`;

export const ProjectList = styled.ul`
  display: none;
`;

export const ProjectItem = styled.li`
  display: none;
`;

export const SkillGrid = styled.div`
  display: none;
`;

export const SkillItem = styled.div`
  display: none;
`;

export const NavigationSection = styled.div`
  display: none;
`;

export const NavCommand = styled.div`
  display: none;
`;

export const NavLink = styled.a`
  display: none;
`;

export const HomeHeader = styled.header`
  display: none;
`;

export const HomeTitle = styled.h1`
  display: none;
`;

export const HomeNav = styled.nav`
  display: none;
`;

export const HomeNavBtn = styled.button`
  display: none;
`;

export const HomeMain = styled.main`
  padding: 0;
`;

export const HomeProjectsSection = styled.section`
  display: none;
`;

export const HomeFooter = styled.footer`
  display: none;
`;

export const HomeMadeBy = styled.p`
  display: none;
`; 
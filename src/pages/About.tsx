import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAboutAnimation } from '../hooks/useTitleAnimation';
import {
  AboutContainer,
  AboutHeader,
  AboutTitle,
  AboutNav,
  AboutNavBtn,
  AboutMain,
  AboutFooter,
  AboutMadeBy
} from '../styles/AboutStyles';

const About: React.FC = () => {
  const animatedTitle = useAboutAnimation();

  return (
    <AboutContainer>
      <Header
        HeaderContainer={AboutHeader}
        Title={AboutTitle}
        titleText={animatedTitle}
        NavContainer={AboutNav}
        NavButton={AboutNavBtn}
      />

      <AboutMain>
        {/* About content can be added here */}
      </AboutMain>

      <Footer
        FooterContainer={AboutFooter}
        MadeByText={AboutMadeBy}
      />
    </AboutContainer>
  );
};

export default About; 
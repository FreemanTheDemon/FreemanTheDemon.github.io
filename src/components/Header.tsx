import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

interface HeaderProps {
  HeaderContainer: React.ComponentType<any>;
  Title: React.ComponentType<any>;
  titleText: string;
  NavContainer: React.ComponentType<any>;
  NavButton: React.ComponentType<any>;
}

const Header: React.FC<HeaderProps> = ({
  HeaderContainer,
  Title,
  titleText,
  NavContainer,
  NavButton
}) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Title>
          {titleText}
        </Title>
      </Link>
      <Navigation NavContainer={NavContainer} NavButton={NavButton} />
    </HeaderContainer>
  );
};

export default Header; 
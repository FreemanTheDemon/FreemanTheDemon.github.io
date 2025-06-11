import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  NavContainer: React.ComponentType<any>;
  NavButton: React.ComponentType<any>;
}

const Navigation: React.FC<NavigationProps> = ({ NavContainer, NavButton }) => {
  return (
    <NavContainer>
      <Link to="/">
        <NavButton type="button">
          Home
        </NavButton>
      </Link>

      <Link to="/about">
        <NavButton type="button">
          About Me
        </NavButton>
      </Link>

      <Link to="/contact">
        <NavButton type="button">
          Contact
        </NavButton>
      </Link>
    </NavContainer>
  );
};

export default Navigation; 
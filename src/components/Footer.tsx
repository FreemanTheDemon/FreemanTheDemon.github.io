import React from 'react';

interface FooterProps {
  FooterContainer: React.ComponentType<any>;
  MadeByText: React.ComponentType<any>;
}

const Footer: React.FC<FooterProps> = ({ FooterContainer, MadeByText }) => {
  return (
    <FooterContainer>
      <MadeByText>Made by: Freeman</MadeByText>
    </FooterContainer>
  );
};

export default Footer; 
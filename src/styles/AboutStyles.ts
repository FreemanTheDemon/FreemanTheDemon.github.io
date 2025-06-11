import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #9bb6b8;
  min-height: 100vh;
  position: relative;
`;

export const AboutHeader = styled.header`
  background-color: #aab8c7;
  height: 100px;
`;

export const AboutTitle = styled.h1`
  color: #170d24;
  font-size: 88px;
  font-family: 'Stonehenge', cursive;
  position: absolute;
  padding-top: 25px;
`;

export const AboutNav = styled.nav`
  float: right;
  justify-content: space-around;
  align-items: center;
  padding-top: 75px;
`;

export const AboutNavBtn = styled.button`
  height: 55px;
  width: 120px;
  background-color: #aab8c7;
  color: #170d24;
  font-size: 22px;
  border-color: #566b54;

  &:hover {
    background-color: #170d24;
    color: #aab8c7;
  }
`;

export const AboutMain = styled.main`
  padding-top: 120px;
  padding-bottom: 70px;
`;

export const AboutFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #aab8c7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AboutMadeBy = styled.p`
  text-align: center;
  color: #170d24;
`; 
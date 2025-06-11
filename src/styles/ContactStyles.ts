import styled from 'styled-components';

export const ContactContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  position: relative;
`;

export const ContactHeader = styled.header`
  background-color: lightgoldenrodyellow;
  height: 100px;
`;

export const ContactTitle = styled.h1`
  color: black;
  font-size: 88px;
  font-family: 'thryn', 'Times New Roman';
  position: absolute;
  padding-top: 20px;
`;

export const ContactNav = styled.nav`
  float: right;
  justify-content: space-around;
  align-items: center;
  padding-top: 75px;
`;

export const ContactNavBtn = styled.button`
  height: 55px;
  width: 120px;
  background-color: lightgoldenrodyellow;
  color: black;
  font-size: 22px;
  border-color: grey;

  &:hover {
    background-color: black;
    color: lightgoldenrodyellow;
  }
`;

export const ContactMain = styled.main`
  padding-top: 120px;
  padding-bottom: 70px;
`;

export const ContactSection = styled.section`
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: 10px;
  border: 2px solid;
  background-color: lightgoldenrodyellow;

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ContactForm = styled.form`
  label {
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"] {
    margin-bottom: 10px;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    margin-top: 5px;
    margin-bottom: 5px;
    width: 385px;
    resize: vertical;
  }

  input[type="submit"] {
    background-color: black;
    color: lightgoldenrodyellow;
    border: 1px solid grey;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      background-color: grey;
    }
  }
`;

export const ContactFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: lightgoldenrodyellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactMadeBy = styled.p`
  text-align: center;
  color: #170d24;
`; 
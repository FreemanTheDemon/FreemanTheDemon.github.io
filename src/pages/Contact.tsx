import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContactAnimation } from '../hooks/useTitleAnimation';
import {
  ContactContainer,
  ContactHeader,
  ContactTitle,
  ContactNav,
  ContactNavBtn,
  ContactMain,
  ContactSection,
  ContactForm,
  ContactFooter,
  ContactMadeBy
} from '../styles/ContactStyles';

const Contact: React.FC = () => {
  const animatedTitle = useContactAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ContactContainer>
      <Header
        HeaderContainer={ContactHeader}
        Title={ContactTitle}
        titleText={animatedTitle}
        NavContainer={ContactNav}
        NavButton={ContactNavBtn}
      />

      <ContactMain>
        <ContactSection>
          <h2>Contact Me:</h2>
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <textarea
              id="message"
              name="message"
              rows={5}
              cols={46}
              placeholder="Enter message"
              value={formData.message}
              onChange={handleInputChange}
            />

            <input type="submit" value="Submit" />
          </ContactForm>
        </ContactSection>
      </ContactMain>

      <Footer
        FooterContainer={ContactFooter}
        MadeByText={ContactMadeBy}
      />
    </ContactContainer>
  );
};

export default Contact; 
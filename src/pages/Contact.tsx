import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactAnimation } from '../hooks/useTitleAnimation';
import {
  ContactContainer,
  SunsetHeader,
  HeaderContent,
  LeftContent,
  LoginInfo,
  UserPrompt,
  UserName,
  PageIndicator,
  NavigationButtons,
  NavButton,
  Section,
  SectionTitle,
  ContactSection,
  ContactForm,
  ContactGrid,
  ContactCard,
  ContactIcon,
  ContactTitle,
  ContactDescription,
  Footer,
  FooterText,
  GlobalPixelStyles
} from '../styles/ContactStyles';

const Contact: React.FC = () => {
  const animatedTitle = useContactAnimation();
  const currentDate = new Date().toLocaleDateString();
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
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  // Pixel explosion effect
  const createPixelExplosion = (event: React.MouseEvent<HTMLButtonElement | HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const colors = ['#ffc048', '#ff6348', '#ff4757', '#5a4fcf', '#ffffff'];

    // Create 12-16 pixels for explosion
    for (let i = 0; i < 14; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel-particle';

      // Random position within button bounds
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      // Random direction and distance
      const angle = (Math.PI * 2 * i) / 14 + (Math.random() - 0.5) * 0.8;
      const distance = 60 + Math.random() * 40;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;

      pixel.style.position = 'fixed';
      pixel.style.left = `${startX}px`;
      pixel.style.top = `${startY}px`;
      pixel.style.width = '4px';
      pixel.style.height = '4px';
      pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      pixel.style.pointerEvents = 'none';
      pixel.style.zIndex = '9999';
      pixel.style.boxShadow = '0 0 2px rgba(255, 255, 255, 0.8)';

      // Set CSS custom properties for animation
      pixel.style.setProperty('--end-x', `${endX}px`);
      pixel.style.setProperty('--end-y', `${endY}px`);
      pixel.style.animation = 'pixelExplode 0.6s ease-out forwards';

      document.body.appendChild(pixel);

      // Remove pixel after animation
      setTimeout(() => {
        if (pixel.parentNode) {
          pixel.parentNode.removeChild(pixel);
        }
      }, 600);
    }
  };

  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    createPixelExplosion(event);
  };

  const handleCardClick = (event: React.MouseEvent<HTMLDivElement>) => {
    createPixelExplosion(event);
  };

  const contactMethods = [
    {
      title: "LinkedIn",
      description: "Professional networking and career updates",
      icon: "💼"
    },
    {
      title: "GitHub",
      description: "Code repositories and open source contributions",
      icon: "💻"
    }
  ];

  return (
    <ContactContainer>
      <GlobalPixelStyles />
      <SunsetHeader>
        <HeaderContent>
          <LeftContent>
            <LoginInfo>Last login: {currentDate}</LoginInfo>
            <UserPrompt>
              <UserName>{animatedTitle}</UserName>
            </UserPrompt>
          </LeftContent>
          <PageIndicator>Contact</PageIndicator>
          <NavigationButtons>
            <Link to="/">
              <NavButton>home</NavButton>
            </Link>
            <Link to="/about">
              <NavButton>about</NavButton>
            </Link>
          </NavigationButtons>
        </HeaderContent>
      </SunsetHeader>

      <Section>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactGrid>
          {contactMethods.map((method, index) => (
            <ContactCard key={index} onClick={handleCardClick}>
              <ContactIcon>{method.icon}</ContactIcon>
              <ContactTitle>{method.title}</ContactTitle>
              <ContactDescription>{method.description}</ContactDescription>
            </ContactCard>
          ))}
        </ContactGrid>
      </Section>

      <Section>
        <SectionTitle>Send Message</SectionTitle>
        <ContactSection>
          <ContactForm onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <button type="submit" onClick={handleSubmitClick}>Send Message</button>
          </ContactForm>
        </ContactSection>
      </Section>

      <Footer>
        <FooterText>Made by: Benjamin Freeman Bird</FooterText>
        <p>© 2024 Portfolio Sunset Interface</p>
      </Footer>
    </ContactContainer>
  );
};

export default Contact; 
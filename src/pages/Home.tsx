import React from 'react';
import { Link } from 'react-router-dom';
import { useHomeAnimation } from '../hooks/useTitleAnimation';
import {
  HomeContainer,
  TerminalHeader,
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
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  Footer,
  FooterText
} from '../styles/HomeStyles';

const Home: React.FC = () => {
  const animatedTitle = useHomeAnimation();
  const currentDate = new Date().toLocaleDateString();

  const projects = [
    {
      title: "Portfolio Website",
      description: "Interactive terminal-themed portfolio built with React and TypeScript",
      tech: "React, TypeScript, Styled-Components"
    },
    {
      title: "Task Management App",
      description: "Full-stack task manager with real-time updates and team collaboration",
      tech: "Node.js, Express, Socket.IO, MongoDB"
    },
    {
      title: "Weather Dashboard",
      description: "Responsive weather application with geolocation and forecast data",
      tech: "JavaScript, OpenWeather API, Chart.js"
    },
    {
      title: "E-commerce Platform",
      description: "Complete online store with payment integration and inventory management",
      tech: "React, Node.js, Stripe API, PostgreSQL"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with rooms and user authentication",
      tech: "Socket.IO, React, JWT, Redis"
    },
    {
      title: "Data Visualization",
      description: "Interactive charts and analytics dashboard for business intelligence",
      tech: "D3.js, Python, FastAPI, PostgreSQL"
    }
  ];

  return (
    <HomeContainer>
      <TerminalHeader>
        <HeaderContent>
          <LeftContent>
            <LoginInfo>Last login: {currentDate}</LoginInfo>
            <UserPrompt>
              <UserName>{animatedTitle}</UserName>
            </UserPrompt>
          </LeftContent>
          <PageIndicator>Home</PageIndicator>
          <NavigationButtons>
            <Link to="/about">
              <NavButton>about</NavButton>
            </Link>
            <Link to="/contact">
              <NavButton>contact</NavButton>
            </Link>
          </NavigationButtons>
        </HeaderContent>
      </TerminalHeader>

      <Section>
        <SectionTitle>Technical Proficiencies</SectionTitle>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/javascript.svg" alt="JavaScript" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>JavaScript</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/typescript.svg" alt="TypeScript" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>TypeScript</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/nodejs.svg" alt="Node.js" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>Node.js</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/express.svg" alt="Express.js" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>Express.js</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/react.svg" alt="React" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>React</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/redux.svg" alt="Redux" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>Redux</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/html5.svg" alt="HTML5" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>HTML</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/css3.svg" alt="CSS3" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>CSS</div>
          </div>
          <div style={{ color: '#ffff00', padding: '15px', border: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>
              <img src="/resources/icons/mysql.svg" alt="SQL" style={{ width: '32px', height: '32px' }} />
            </div>
            <div>SQL</div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                [Image Placeholder]
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>Tech: {project.tech}</ProjectTech>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Section>

      <Footer>
        <FooterText>Made by: Benjamin Freeman Bird</FooterText>
        <p>© 2024 Portfolio Terminal Interface</p>
      </Footer>
    </HomeContainer>
  );
};

export default Home; 
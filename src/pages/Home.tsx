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
  ProjectLinks,
  ProjectLink,
  ProjectStatus,
  ProjectMetadata,
  Footer,
  FooterText
} from '../styles/HomeStyles';

const Home: React.FC = () => {
  const animatedTitle = useHomeAnimation();
  const currentDate = new Date().toLocaleDateString();

  const projects = [
    {
      title: "Into Egypt",
      description: "An immersive historical adventure game built with vanilla JavaScript, featuring rich storytelling and interactive gameplay mechanics.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/FreemanTheDemon/into-egypt",
      liveUrl: "https://FreemanTheDemon.github.io/into-egypt",
      status: "deployed",
      lastUpdated: "2024",
      type: "Game/Interactive Story"
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
                [Screenshot Coming Soon]
              </ProjectImage>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>Tech Stack: {project.tech.join(', ')}</ProjectTech>
              <ProjectStatus className={project.status}>
                {project.status === 'deployed' ? 'Live Demo Available' :
                  project.status === 'github-only' ? 'Source Code Available' :
                    'In Development'}
              </ProjectStatus>
              <ProjectLinks>
                {project.githubUrl && (
                  <ProjectLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    📂 View Code
                  </ProjectLink>
                )}
                {project.liveUrl && (
                  <ProjectLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    🌐 Live Demo
                  </ProjectLink>
                )}
              </ProjectLinks>
              <ProjectMetadata>
                Type: {project.type} | Last Updated: {project.lastUpdated}
              </ProjectMetadata>
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
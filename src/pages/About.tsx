import React from 'react';
import { Link } from 'react-router-dom';
import { useAboutAnimation } from '../hooks/useTitleAnimation';
import {
  AboutContainer,
  ScrollHeader,
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
  ScrollSection,
  ScrollText,
  ScrollQuote,
  ScrollGrid,
  ScrollCard,
  ScrollCardTitle,
  ScrollCardText,
  Footer,
  FooterText,
  GlobalCandleStyles
} from '../styles/AboutStyles';

const About: React.FC = () => {
  const animatedTitle = useAboutAnimation();

  // Convert current date to medieval format
  const formatMedievalDate = () => {
    const date = new Date();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    // Convert day to ordinal
    const getOrdinal = (n: number) => {
      if (n % 10 === 1 && n % 100 !== 11) return `${n}st`;
      if (n % 10 === 2 && n % 100 !== 12) return `${n}nd`;
      if (n % 10 === 3 && n % 100 !== 13) return `${n}rd`;
      return `${n}th`;
    };

    // Convert year to words
    const numberToWords = (num: number) => {
      const thousands = Math.floor(num / 1000);
      const remainder = num % 1000;
      let result = "";

      if (thousands === 2) result += "Two Thousand";

      if (remainder > 0) {
        if (remainder < 100) {
          if (remainder < 20) {
            const teens = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
            result += " and " + teens[remainder];
          } else {
            const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
            const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
            result += " and " + tens[Math.floor(remainder / 10)];
            if (remainder % 10 > 0) result += " " + ones[remainder % 10];
          }
        }
      }

      return result;
    };

    return `${month} the ${getOrdinal(day)}, ${numberToWords(year)}`;
  };

  const medievalDate = formatMedievalDate();

  const scrollSections = [
    {
      title: "Origins",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
    },
    {
      title: "Journey",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia."
    },
    {
      title: "Wisdom",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint."
    },
    {
      title: "Legacy",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
    }
  ];

  return (
    <AboutContainer>
      <GlobalCandleStyles />
      <ScrollHeader>
        <HeaderContent>
          <LeftContent>
            <LoginInfo>THE YEAR OF OUR LORD, {medievalDate}</LoginInfo>
            <UserPrompt>
              <UserName>{animatedTitle}</UserName>
            </UserPrompt>
          </LeftContent>
          <PageIndicator>About</PageIndicator>
          <NavigationButtons>
            <Link to="/">
              <NavButton>home</NavButton>
            </Link>
            <Link to="/contact">
              <NavButton>contact</NavButton>
            </Link>
          </NavigationButtons>
        </HeaderContent>
      </ScrollHeader>

      <Section>
        <SectionTitle>Ancient Chronicles</SectionTitle>
        <ScrollSection>
          <ScrollText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </ScrollText>

          <ScrollQuote>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium."
          </ScrollQuote>

          <ScrollText>
            Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt.
          </ScrollText>
        </ScrollSection>
      </Section>

      <Section>
        <SectionTitle>Sacred Texts</SectionTitle>
        <ScrollGrid>
          {scrollSections.map((section, index) => (
            <ScrollCard key={index}>
              <ScrollCardTitle>{section.title}</ScrollCardTitle>
              <ScrollCardText>{section.text}</ScrollCardText>
            </ScrollCard>
          ))}
        </ScrollGrid>
      </Section>

      <Section>
        <SectionTitle>Final Words</SectionTitle>
        <ScrollSection>
          <ScrollText>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam.
          </ScrollText>
        </ScrollSection>
      </Section>

      <Footer>
        <FooterText>Scribed by: Benjamin Freeman Bird</FooterText>
        <p>© 2024 Ancient Portfolio Scrolls</p>
      </Footer>
    </AboutContainer>
  );
};

export default About; 
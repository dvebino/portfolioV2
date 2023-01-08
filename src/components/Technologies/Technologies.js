import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>After beginning my journey as a Full Stack Developer, I've worked on a variety of projects and challenged myself to use new frameworks or libraries to solve modern day issues. Throughout this journey, I've worked and collaborated with other software engineers and UI/UX designers to create applications for both business and consumer use.</SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End Experience</ListTitle>
          <ListParagraph>
            React.js<br/>
            HTML<br/>
            CSS<br/>
            Next.js<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End Experience</ListTitle>
          <ListParagraph>
            PostgreSQL<br/>
            MongoDB<br/>
            Django<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListContainer>
            <ListTitle>UI/UX Experience</ListTitle>
            <ListParagraph>
              Figma<br/>
              Adobe XD <br/>
              Canvas <br/>
            </ListParagraph>
          </ListContainer>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

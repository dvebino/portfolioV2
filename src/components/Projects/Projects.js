import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {
        projects.map(({id, image, title, description, tags, source, visit, video}) => (
          <BlogCard key={id}>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TagList>
                {tags.map((tag,idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>GitHub Link</ExternalLinks>
              { 
                visit === '' ? '' : <ExternalLinks href={visit}>Website Link</ExternalLinks>
              }
              {
                video === '' ? '' : <ExternalLinks href={video}>Demo Video</ExternalLinks>
              }
            </UtilityList>
          </BlogCard>
        ))
      }
    </GridContainer>
  </Section>
);

export default Projects;
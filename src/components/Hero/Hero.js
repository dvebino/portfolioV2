import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import { Section, SectionTextHero, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      <TypewriterComponent
        options={{
          loop: true,   
          autoStart:true,
          strings: [`Hi, I'm David!`],
        }}
      />
      Welcome To My Portfolio
      </SectionTitle>
      <SectionTextHero>
      Crafting visually stunning and user-friendly web experiences with passion and precision.
      </SectionTextHero>

      <Button onClick={() => window.location = "https://github.com/dvebino"}>Read More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
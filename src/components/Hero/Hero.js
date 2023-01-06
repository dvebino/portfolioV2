import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm David<br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
      Crafting visually stunning and user-friendly web experiences with passion and precision.
      </SectionText>

      <Button onClick={() => window.location = "https://google.com"}>Read More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
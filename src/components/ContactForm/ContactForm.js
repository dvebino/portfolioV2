import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { FormButton, FormContainer, FormInput, FormLabel, FormTitle } from "./ContactFormStyles";

const ContactForm = () => {
  return (
    <Section>
        <SectionDivider />
        <SectionTitle main>Contact Form</SectionTitle>

        <FormContainer>
            <FormInput />
            <FormButton>Send Message</FormButton>
        </FormContainer>
    </Section>
  );
};

export default ContactForm;

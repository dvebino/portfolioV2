import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";

import Button from "../../styles/GlobalComponents/Button";

import { FormButton, FormContainer, FormInput, FormLabel, FormTitle, FormTextArea, FormSection } from "./ContactFormStyles";

const ContactForm = () => {
  return (
    <Section id="contact">
        <SectionDivider />
        <SectionTitle main>Contact Form</SectionTitle>

        <FormSection>
            <FormContainer>
                <FormLabel>Name:</FormLabel>
                <FormInput />

                <FormLabel>Email:</FormLabel>
                <FormInput />
                
                <FormLabel>Message:</FormLabel>
                <FormTextArea />
                <FormButton>Send Message</FormButton>
            </FormContainer>
        </FormSection>
    </Section>
  );
};

export default ContactForm;

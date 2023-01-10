import React, {useState} from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { useForm } from "@formspree/react";

import { FormButton, FormContainer, FormInput, FormLabel, FormTitle, FormTextArea, FormSection } from "./ContactFormStyles";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("moqbyogq");

  return (
    <Section id="contact">
        <SectionDivider />
        <SectionTitle main>Contact Form</SectionTitle>

        <FormSection onSubmit={handleSubmit}>
            <FormContainer onSubmit={handleSubmit}>
                <FormLabel>Name:</FormLabel>
                <FormInput id="name" name="name"/>

                <FormLabel>Email:</FormLabel>
                <FormInput id="email" type="email" name="email"/>
                
                <FormLabel>Message:</FormLabel>
                <FormTextArea id="message" name="message" />
                <FormButton type="submit">Send Message</FormButton>
            </FormContainer>
        </FormSection>
    </Section>
  );
};

export default ContactForm;

import React, {useState} from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { useForm, ValidationError } from "@formspree/react";

import { FormButton, FormContainer, FormInput, FormLabel, FormTitle, FormTextArea, FormSection } from "./ContactFormStyles";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvonrgnr");

  return (
    <Section id="contact">
        <SectionDivider />
        <SectionTitle main>Contact Form</SectionTitle>
        <FormSection>
          { state.succeeded ? 
            <h1>Message Received!</h1>
            :
            <FormContainer onSubmit={handleSubmit}>
              <FormLabel>Name:</FormLabel>
              <FormInput id="name" name="name"/>

              <FormLabel>Email:</FormLabel>
              <FormInput id="email" type="email" name="email"/>
              <ValidationError prefix="Email" field="email" errors={state.errors}/>

              <FormLabel>Message:</FormLabel>
              <FormTextArea id="message" name="message" />
              <ValidationError prefix="Message" field="message" errors={state.errors}/>

              <FormButton type="submit" disabled={state.submitting}>Send Message</FormButton>
            </FormContainer>
          }
        </FormSection>
    </Section>
  );
};

export default ContactForm;

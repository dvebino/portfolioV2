import React from "react";
import { Section } from "../../styles/GlobalComponents";
import { useForm, ValidationError } from "@formspree/react";
import { FormLabelCenter, FormInput, FormContainer, FormSection, FormButton } from "../ContactForm/ContactFormStyles";

const Access = ({status, setOpen}) => {
    const [state, handleSubmit] = useForm("mrgvkbwa");
    console.log(state)
    if(state.succeeded){
        setOpen(true)
    }

    return (
        <Section>
            <FormSection>
                <FormContainer onSubmit={handleSubmit}>
                    <FormLabelCenter>Enter Email for Site Access!</FormLabelCenter>
                    <FormInput id="email" type="email" name="email"/>
                    <ValidationError prefix="Email" field="email" errors={state.errors}/>

                    <FormButton type="submit" disabled={state.submitting}>Access Site</FormButton>
                </FormContainer>
            </FormSection>
        </Section>
    );
};

export default Access;

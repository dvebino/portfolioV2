import styled from 'styled-components';

export const FormSection = styled.div`
    padding: 80px 0;
    display: flex;
    justify-content:center;
`

export const FormContainer = styled.form`
    display: flex;
    padding: 40px;
	background: white;
	border: 20px;
    flex: 1;
	max-width: 60%;
    justify-content: center;
	border-radius: 20px;
	flex-direction: column;
    
	@media screen and (max-width: 768px) {
		max-width: 100% !important;
		flex-basis: 100%;
	}
`

export const FormButton = styled.button`
    border: none;
    border-radius: 50px;
    color: #fff;
    display: flex;
    width: 50%;
    height: 5rem;
    margin-top: 3rem;
    background: ${({ alt }) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
    opacity: ${({ disabled }) => disabled ? '.5' : '1'};
    font-weight: 400;
    align-self:center;
    align-items: center;
    justify-content: center;
`

export const FormInput = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #cfcfcf;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align:center;
`

export const FormTextArea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
    margin-top:1rem;
`

export const FormLabel = styled.label`
    display: inline-block;
    font-size: 2rem;
    font-weight: 400;
    color: black;
`

export const FormLabelCenter = styled.label`
    display: flex;
    align-self:center;
    font-size: 3rem;
    font-weight: 400;
    color: black;
    margin-bottom: 2rem;
`
import styled from "styled-components";

export const ContactContainer = styled.div`
display: flex;
justify-content: top;
align-items: center;
flex-direction: column;
height: 100vh;
background-color: var(--amarillo);
`
export const ContactTitle = styled.h1`
font-size: 3rem;
@media (max-width: 768px) {
    font-size: 2.5rem;
}
@media (max-width: 480px) {
    font-size: 1.5rem;
}
`
export const ContactInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 200px;
@media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
}
`
export const FormText = styled.h2`
@media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
}
`
export const ContactForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
font-size: 1rem;
`
export const ContactInput = styled.input`
width: 100%;
height: 40px;
text-align: left;
text-indent: 5px;
@media (max-width: 768px) {
    width: 90%;
}
`
export const ContactTextArea = styled.textarea`
width: 100%;
margin-bottom: 10px;
@media (max-width: 768px) {
    width: 90%;
}
`





import styled from "styled-components";

export const AboutUsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 200px;
line-height: 40px;
justify-content: top;
height: 100vh;
@media (max-width: 768px) {
    margin: 70px 10px;
}
@media (max-width: 425px) {
    line-height: 30px;
}
`
export const AboutUsTitle = styled.h2`
font-size: 3rem;
@media (max-width: 425px) {
    font-size: 2rem;
}
`
export const AboutUsText = styled.p`
font-size: 1.5rem;
@media (max-width: 425px) {
    font-size: 1.2rem;
}
`
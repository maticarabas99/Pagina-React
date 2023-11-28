import styled from "styled-components";

export const ProductCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 350px;
width: 280px;
border: 1px solid black;
margin: 20px;
background-color: var(--amarillo);
@media (max-width: 425px) {
    height: 280px;
    width: 200px;
}
`
export const ProductCardImg = styled.img`
width: 100px;
height: 100px;
border-radius: 1rem;
`
export const ProductInfo = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media (max-width: 425px) {
    font-size: 10px;
    margin: 0;
`
export const CardPrice = styled.p`
font-size: 1.5rem;
border: 1px solid black;
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 1rem;
background-color: white;
@media (max-width: 425px) {
    font-size: 16px;
`

import styled from "styled-components";

export const ProductWidgetContainer = styled.div`
display: grid;
place-items: center;
justify-content: center;
grid-template-columns: repeat(auto-fit, 400px);
row-gap: 20px;
justify-content: space-around;
align-items: center;
` 
export const Products = styled.div`
display: flex;
justify-content: center;
`
export const ProductWidgetTitle = styled.h2`
font-size: 3rem;
display: flex;
justify-content: center;
align-items: center;
`

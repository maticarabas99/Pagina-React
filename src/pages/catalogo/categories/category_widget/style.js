import styled from "styled-components";

export const CategoryWidgetContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const CategoryWidgetTitle = styled.h2`
font-size: 4rem;
padding: 40px 0 0;
margin-bottom: 0;
@media (max-width: 425px) {
    font-size: 2.5rem;
}
`
export const CategoryWidgetList = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
@media (max-width: 425px) {
    font-size: 10px;
    gap: 6px;
}
`
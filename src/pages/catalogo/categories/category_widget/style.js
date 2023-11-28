import styled from "styled-components";

export const CategoryWidgetContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
export const CategoryWidgetTitle = styled.h2`
font-size: 3rem;
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
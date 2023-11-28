import styled from "styled-components";
import { NavLink} from 'react-router-dom';

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
background-color: black;
padding: 10px;
  
`
export const LinkContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
@media (max-width: 768px) {
display: block;
right: ${(props) => (props.menuHamburguesa ? "0" : "-100%")};
transition: all 0.5s ease;
position: absolute;
top: 70px;
background-color: black;
height: 70vh;
width: 30vh;
border-radius: 0 0 0 20px;
}
`
export const NavbarList = styled.a`
display: flex;
gap: 40px;
align-items: center;
list-style-type: none;
font-family: 'REM', sans-serif;
margin: 10px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
}
`
export const List = styled(NavLink)`
color: white;`

export const NavbarLogo = styled.img`
height: 50px;
width: 50px;
`
export const NavBtn = styled.a`
padding: 5px;
font-size: 20px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 425px) {
    font-size: 1rem;
}
`
export const NavBtnLink = styled.div`
color: black;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
`
export const NavBarBtn = styled.div`    
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
@media (max-width: 768px) {
    flex-direction: column;
    margin-top: 40px;
    gap: 20px;
}`
export const ToggleMenu = styled.button`
background-color: var(--amarillo);
color: black;
display: none;
@media (max-width: 768px) {
    display: block;
}
`
export const HamburguerMenu = styled.div`
display: none;
font-size: 2.5rem;
color: #fff;
@media (max-width: 1024px) {
display: block;
}
`
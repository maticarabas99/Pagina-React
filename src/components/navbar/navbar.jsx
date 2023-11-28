import React, { useContext } from "react";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import {
  HamburguerMenu,
  LinkContainer,
  List,
  NavBarBtn,
  NavBtn,
  NavBtnLink,
  NavbarContainer,
  NavbarList,
  NavbarLogo,
} from "./style";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MenuHamburguesaContext } from "../context/menu_hamburguesa";

export const Navbar = () => {
  const { menuHamburguesa, toggleMenuHamburguesa  } = useContext(MenuHamburguesaContext);

  return (
    <NavbarContainer>
      <div>
        <NavbarLogo
          src="https://yourfiles.cloud/uploads/67bb9d798b906c5b5f57d66b24d55f9d/logo.png"
          alt=""
        />
      </div>
      <LinkContainer menuHamburguesa={menuHamburguesa}>
        <NavbarList >
          <li onClick={toggleMenuHamburguesa } > 
            <List to="/">Inicio</List>
          </li>
          <li onClick={toggleMenuHamburguesa }>
            <List to="sobre-nosotros">Sobre Nosotros</List>
          </li>
          <li onClick={toggleMenuHamburguesa }>
            <List to="contacto">Contacto</List>
          </li>
          <li onClick={toggleMenuHamburguesa }>
            <List to="productos" class="navbar-link">
              Productos
            </List>
          </li>
        </NavbarList>
        <NavBarBtn>
          <button>
            <NavBtn>
              <NavBtnLink>
                <span>Iniciar Sesión</span>
                <FaUserCircle />
              </NavBtnLink>
            </NavBtn>
          </button>
          <button>
            <NavBtn>
              <NavBtnLink>
                <FaShoppingCart />
              </NavBtnLink>
            </NavBtn>
          </button>
        </NavBarBtn>
      </LinkContainer>
      <HamburguerMenu onClick={toggleMenuHamburguesa }>
        {menuHamburguesa ? <IoClose /> : <RxHamburgerMenu />}
      </HamburguerMenu>
    </NavbarContainer>
  );
};

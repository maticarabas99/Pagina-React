import React from "react";
import { useState, createContext } from "react";

export const MenuHamburguesaContext = createContext();
export const MenuHamburguesaProvider = ({ children }) => {
  const [menuHamburguesa, setMenuHamburguesa] = useState(false);

  const toggleMenuHamburguesa = () => {
    setMenuHamburguesa(!menuHamburguesa);
  };

  return (
    <MenuHamburguesaContext.Provider
      value={{ menuHamburguesa, toggleMenuHamburguesa }}
    >
      {children}
    </MenuHamburguesaContext.Provider>
  );
};

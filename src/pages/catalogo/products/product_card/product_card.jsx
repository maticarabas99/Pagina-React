import React from "react";
import { CardPrice, ProductCardContainer, ProductCardImg, ProductInfo } from "./style";

export const ProductCard = ({ cardImg, nombre, precio }) => {
  return (
    <ProductCardContainer>
      <ProductCardImg src={cardImg} alt="" />
      <ProductInfo>
        <h2>{nombre}</h2>
        <CardPrice>${precio}</CardPrice>
      </ProductInfo>
      <button>Agregar al Carrito</button>
    </ProductCardContainer>
  );
};

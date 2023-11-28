import React from 'react'
import { ProductCard } from '../product_card/product_card'
import { productos } from '../../../../data/products'
import { ProductWidgetContainer, ProductWidgetTitle, Products } from './style'


export const ProductWidget = () => {
  return (
<div>
    <ProductWidgetTitle>Productos</ProductWidgetTitle>
    <ProductWidgetContainer>
        {
            productos.map((product) => <ProductCard key={product.id} {...product} />)
        }
    </ProductWidgetContainer>
    <Products>
        <button>Ver Mas</button>
    </Products>
</div>
  )
}

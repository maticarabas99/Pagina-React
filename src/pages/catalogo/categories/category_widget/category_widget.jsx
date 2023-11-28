import React from 'react'
import { CategoryCard } from '../category_card/category_card'
import { categorias } from '../../../../data/categories'
import { CategoryWidgetContainer, CategoryWidgetList, CategoryWidgetTitle } from './style'

export const CategoryWidget = () => {
  return (
    <CategoryWidgetContainer>
        <CategoryWidgetTitle>Productos</CategoryWidgetTitle>
        <CategoryWidgetList>
            {
                categorias.map((item) => <CategoryCard key={item.id} {...item} /> )
            }
        </CategoryWidgetList>
    </CategoryWidgetContainer>
  )
}

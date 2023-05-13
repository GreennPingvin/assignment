import React, { useContext } from 'react'

import ShopItem from './ShopItem'
import Subtitle from './Subtitle'
import './shopItemsList.scss'
import { CartContext } from '../contexts/CartContext'

const ShopItemsList = ({ title, items, ...props }) => {
  const cartContext = useContext(CartContext)

  function addShopItemToCart(id) {
    cartContext.cartItems.set(id, cartContext.cartItems.get(id) + 1 || 1)
    cartContext.setCartItems(new Map(cartContext.cartItems))
  }

  return (
    <div className="shop-items-list" {...props}>
      <Subtitle>{title}</Subtitle>
      <div className="shop-items-list__items">
        {items.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            onClick={() => addShopItemToCart(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ShopItemsList

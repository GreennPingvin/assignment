import React from 'react'

import Subtitle from '../components/Subtitle'
import CartItem from '../components/CartItem'
import HEADPHONES from '../assets/data/headphones'

const CartPage = () => {
  return (
    <div>
      <Subtitle style={{ color: '#1C1C27', marginBottom: 13 }}>
        Корзина
      </Subtitle>
      <CartItem item={HEADPHONES[0]} />
    </div>
  )
}

export default CartPage

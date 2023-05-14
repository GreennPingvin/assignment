import React, { useContext } from 'react'

import './cartPage.scss'
import Subtitle from '../components/Subtitle'
import CartItem from '../components/CartItem'
import HEADPHONES from '../assets/data/headphones'
import Button from '../components/UI/Button'
import { CartContext } from '../contexts/CartContext'

const CartPage = () => {
  const cartContext = useContext(CartContext)
  console.log(cartContext)

  return (
    <div className="cart-page">
      <Subtitle style={{ color: '#1C1C27', marginBottom: 13 }}>
        Корзина
      </Subtitle>
      <div className="cart-page__wrapper">
        <div className="cart-page__cart-items">
          {[...cartContext.cartItems].map(([k, v]) => (
            <CartItem key={k} item={HEADPHONES[k - 1]} quantity={v} />
          ))}
        </div>
        {cartContext.cartItems.size ? (
          <div className="total">
            <div className="total__description">
              <div className="total__text">ИТОГО</div>
              <div className="total__price">
                ₽{' '}
                {[...cartContext.cartItems.values()].reduce(
                  (acc, n) => acc + n,
                )}
              </div>
            </div>
            <Button className="total__btn">Перейти к оформлению</Button>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default CartPage

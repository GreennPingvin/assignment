import React, { useContext } from 'react'

import './cartItem.scss'
import removeBtn from '../assets/icons/remove.svg'
import increaseBtn from '../assets/icons/increase.svg'
import decreaseBtn from '../assets/icons/decrease.svg'

import Button from '../components/UI/Button.jsx'
import { CartContext } from '../contexts/CartContext'

const CartItem = ({ item, quantity }) => {
  const cartContext = useContext(CartContext)

  function removeCartItemFromCart(id) {
    cartContext.cartItems.delete(id)
    cartContext.setCartItems(new Map(cartContext.cartItems))
  }

  function increaseAmount() {
    cartContext.cartItems.set(item.id, cartContext.cartItems.get(item.id) + 1)
    cartContext.setCartItems(new Map(cartContext.cartItems))
  }

  function decreaseAmount() {
    if (cartContext.cartItems.get(item.id) === 0) {
      return
    }
    cartContext.cartItems.set(item.id, cartContext.cartItems.get(item.id) - 1)
    cartContext.setCartItems(new Map(cartContext.cartItems))
  }

  return (
    <div className="cart-item">
      <img className="cart-item__img" src={item.img} alt="" />
      <div className="cart-item__desc">
        <div className="cart-item__title">{item.title}</div>
        <div className="cart-item__price">{item.price} ₽</div>
      </div>
      <Button
        className="cart-item__remove"
        onClick={() => removeCartItemFromCart(item.id)}
      >
        <img src={removeBtn} alt="Удалить из корзины" />
      </Button>
      <div className="cart-item__controls">
        <Button className="cart-item__decrease" onClick={decreaseAmount}>
          <img src={decreaseBtn} alt="Уменьшить количество" />
        </Button>
        <span className="cart-item__count">{quantity}</span>
        <Button className="cart-item__increase" onClick={increaseAmount}>
          <img src={increaseBtn} alt="Увеличить количество" />
        </Button>
      </div>
      <div className="cart-item__total">{quantity * item.price} ₽</div>
    </div>
  )
}

export default CartItem

import React from 'react'

import './cartItem.scss'
import removeBtn from '../assets/icons/remove.svg'
import increaseBtn from '../assets/icons/increase.svg'
import decreaseBtn from '../assets/icons/decrease.svg'

import Button from '../components/UI/Button.jsx'

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img className="cart-item__img" src={item.img} alt="" />
      <div className="cart-item__desc">
        <div className="cart-item__title">{item.title}</div>
        <div className="cart-item__price">{item.price} ₽</div>
      </div>
      <Button className="cart-item__remove">
        <img src={removeBtn} alt="Удалить из корзины" />
      </Button>
      <div className="cart-item__controls">
        <Button className="cart-item__decrease">
          <img src={decreaseBtn} alt="Уменьшить количество" />
        </Button>
        <span className="cart-item__count">1</span>
        <Button className="cart-item__increase">
          <img src={increaseBtn} alt="Увеличить количество" />
        </Button>
      </div>
      <div className="cart-item__total">2987 ₽</div>
    </div>
  )
}

export default CartItem

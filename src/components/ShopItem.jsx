import React from 'react'

import './shopItem.scss'
import rate from '../assets/icons/rate.svg'
import Button from './UI/Button'

const ShopItem = ({ item, ...props }) => {
  return (
    <div className="shop-item" {...props}>
      <div className="shop-item__top">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="shop-item__bottom">
        <div className="shop-item__title">{item.name}</div>
        <div className="shop-item__price">{item.price} ₽</div>
        <div className="shop-item__rate">
          <img
            src={rate}
            alt="rate of shop item"
            className="shop-item__rate-icon"
          />
          <div className="shop-item__rate-text">{item.rate}</div>
        </div>
        <Button className="shop-item__buy-btn">Купить</Button>
      </div>
    </div>
  )
}

export default ShopItem

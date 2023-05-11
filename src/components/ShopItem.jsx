import React from 'react'

import './shopItem.scss'

const ShopItem = ({ item }) => {
  return (
    <div className="shop-item">
      <img src={item.img} alt="" />
      <div className="shop-item__info">
        <div className="shop-item__title">{item.name}</div>
        <div className="shop-item__price"></div>
        
      </div>
    </div>
  )
}

export default ShopItem

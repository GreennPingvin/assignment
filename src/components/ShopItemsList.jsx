import React from 'react'

import ShopItem from './ShopItem'
import Subtitle from './Subtitle'
import './shopItemsList.scss'

const ShopItemsList = ({ title, items, ...props }) => {
  return (
    <div className="shop-items-list" {...props}>
      <Subtitle>{title}</Subtitle>
      <div className="shop-items-list__items">
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default ShopItemsList

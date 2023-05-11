import React from 'react'

import Title from '../components/Subtitle'
import ShopItem from '../components/ShopItem'
import headphones from '../assets/data/headphones'

const HomePage = () => {
  return (
    <div className="home-page">
      <Title text="Наушники" />
      <ShopItem item={headphones[0]} />
    </div>
  )
}

export default HomePage

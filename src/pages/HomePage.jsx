import React from 'react'

import HEADPHONES from '../assets/data/headphones'
import WIRELESS_HEADPHONES from '../assets/data/wireless_headphones'
import ShopItemsList from '../components/ShopItemsList'

const HomePage = () => {
  return (
    <div className="home-page">
      <ShopItemsList
        title="Наушники"
        items={HEADPHONES}
        style={{ marginBottom: 28 }}
      />
      <ShopItemsList
        title="Беспроводные наушники"
        items={WIRELESS_HEADPHONES}
        style={{ marginBottom: 28 }}
      />
    </div>
  )
}

export default HomePage

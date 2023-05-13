import React, { useContext } from 'react'
import favorites from '../../../assets/icons/favorites.svg'
import cart from '../../../assets/icons/cart.svg'
import './header.scss'
import Logo from '../Logo'
import InfoIconLink from '../../InfoIconLink'
import { CartContext } from '../../../contexts/CartContext'

const Header = ({ ...props }) => {
  const cartContext = useContext(CartContext)
  return (
    <header className="header" {...props}>
      <Logo />
      <div className="header__icons">
        <InfoIconLink src={favorites} to="/" alt="Избранное" quantity={2} />
        <InfoIconLink
          src={cart}
          to="/cart"
          alt="Корзина"
          quantity={[...cartContext.cartItems.values()].reduce(
            (acc, n) => acc + n,
            0,
          )}
        />
      </div>
    </header>
  )
}

export default Header

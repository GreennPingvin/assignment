import React from 'react'
import { Link } from 'react-router-dom'
import favorites from '../../assets/icons/favorites.svg'
import cart from '../../assets/icons/cart.svg'
import './header.scss'
import Logo from '../Logo'


const Header = ({ ...props }) => {
  return (
    <header className="header" {...props}>
      <Logo />
      <div className="header__icons">
        <Link>
          <img src={favorites} alt="" />
        </Link>
        <Link to="/cart">
          <img src={cart} alt="" />
        </Link>
      </div>
    </header>
  )
}

export default Header

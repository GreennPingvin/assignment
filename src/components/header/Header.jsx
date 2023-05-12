import React from 'react'
import logo from '../../assets/icons/logo.svg'
import favorites from '../../assets/icons/favorites.svg'
import cart from '../../assets/icons/cart.svg'
import './header.scss'
import { Link } from 'react-router-dom'

const Header = ({ ...props }) => {
  return (
    <header className="header" {...props}>
      <img src={logo} alt="Логотип сайта" />
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

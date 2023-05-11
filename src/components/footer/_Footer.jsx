import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import Socials from './Socials'
import './_footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Логотип сайта" />
      <nav className="footer__nav">
        <ul className="footer__links">
          <li>
            <Link className="footer__link">Избранное</Link>
          </li>
          <li>
            <Link className="footer__link">Корзина</Link>
          </li>
          <li>
            <Link className="footer__link">Контакты</Link>
          </li>
          <li>
            <Link className="footer__link">Условия сервиса</Link>
          </li>
        </ul>
      </nav>
      <Socials />
    </footer>
  )
}

export default Footer

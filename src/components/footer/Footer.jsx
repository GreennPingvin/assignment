import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/icons/logo.svg'
import langsIcon from '../../assets/icons/lang.svg'
import Socials from './Socials'
import './footer.scss'

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
          <div className="footer__langs">
            <img
              className="footer__langs-icon"
              src={langsIcon}
              alt="Иконка языков"
            />
            <Link className="footer__langs-item footer__langs-item--active">
              Рус
            </Link>
            <Link className="footer__langs-item">Eng</Link>
          </div>
        </ul>
      </nav>
      <Socials style={{ justifySelf: 'end' }} />
    </footer>
  )
}

export default Footer

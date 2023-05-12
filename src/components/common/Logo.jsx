import React from 'react'

import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Логотип сайта" />
    </Link>
  )
}

export default Logo

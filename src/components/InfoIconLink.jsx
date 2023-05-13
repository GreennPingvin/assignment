import React from 'react'

import './infoIconLink.scss'
import { Link } from 'react-router-dom'

const InfoIconLink = ({ quantity = 0, to, className, ...props }) => {
  return (
    <Link to={to} className="info-icon-link">
      {quantity > 0 ? (
        <span className="info-icon-link__quantity">{quantity}</span>
      ) : (
        ''
      )}
      <img {...props} />
    </Link>
  )
}

export default InfoIconLink

import React from 'react'
import { Link } from 'react-router-dom'

import './socials.scss'
import vk_icon from '../assets/icons/vk.svg'
import telegram_icon from '../assets/icons/telegram.svg'
import whatsup_icon from '../assets/icons/whatsapp.svg'

const Socials = ({ ...props }) => {
  return (
    <div className="socials" {...props}>
      <Link>
        <img src={vk_icon} alt="иконка vk" />
      </Link>
      <Link>
        <img src={telegram_icon} alt="иконка telegram" />
      </Link>
      <Link>
        <img src={whatsup_icon} alt="иконка whatsUp" />
      </Link>
    </div>
  )
}

export default Socials

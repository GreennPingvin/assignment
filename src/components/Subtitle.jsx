import React from 'react'
import './subtitle.scss'

const Subtitle = ({ children, ...props }) => {
  return (
    <h2 className="subtitle" {...props}>
      {children}
    </h2>
  )
}

export default Subtitle

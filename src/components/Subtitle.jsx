import React from 'react'
import './subtitle.scss'

const Title = ({ text, ...props }) => {
  return (
    <h2 className="subtitle" {...props}>
      {text}
    </h2>
  )
}

export default Title

import React from 'react'
import "./LanguageDisplay.css"


export default function LanguageDisplay(props) {

  const { name, image_url } = props

  return (
    <div className="language-display">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}
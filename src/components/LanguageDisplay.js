import React from 'react'
import { Link } from 'react-router-dom'
import "./LanguageDisplay.css"

export default function LanguageDisplay(props) {

  const { name, image_url } = props

  return (
    <Link to={`/${name.toLowerCase()}`} className="language-display">
      <img src={image_url} alt={name} />
      <h3>{name}</h3>
    </Link>
  )
}
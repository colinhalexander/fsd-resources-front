import React from 'react'
import "./LanguageSidebar.css"
import { NavLink } from 'react-router-dom'

export default function LanguageSidebar({ languages }) {

  const languagesList = () => languages.map((language, index) => {
    return (
      <NavLink
        key={index}
        className="sidebar-link"
        to={`/${language.name.toLowerCase()}`}
        activeStyle={{fontWeight: "bold"}}
      >
        {language.name}
      </NavLink>
    )
  })
  return (
    <section className="language-sidebar">
      {languagesList()}
    </section>
  )
}
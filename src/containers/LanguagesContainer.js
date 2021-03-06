import React, { Component } from 'react'
import "./LanguagesContainer.css"
import LanguageDisplay from '../components/LanguageDisplay'

export default class LanguagesContainer extends Component {

  displayLanguages = () => this.props.languages.map((language, index) => {
    return <LanguageDisplay key={index} {...language} />
  })

  render() {
    return (
      <>
        <h2>Select A Language To Get Started</h2>
        <section className="languages-container">
          {this.displayLanguages()}
        </section>
      </>
    )
  }
}
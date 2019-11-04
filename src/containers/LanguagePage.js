import React, { Component } from 'react'
import "./LanguagePage.css"
import LanguageSidebar from '../components/LanguageSidebar'

export default class LanguagePage extends Component {

  state = {
    activeLanguage: this.props.match.params.language
  }

  render() {
    return (
      <section className="language-page">
        <LanguageSidebar languages={this.props.languages} />
      </section>
    )
  }
}
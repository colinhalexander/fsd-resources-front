import React, { Component } from 'react'
import LanguageSidebar from '../components/LanguageSidebar'

export default class LanguagePage extends Component {

  render() {
    return (
      <section className="language-page">
        <LanguageSidebar languages={this.props.languages} />
      </section>
    )
  }
}
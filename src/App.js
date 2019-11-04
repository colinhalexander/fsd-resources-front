import React, { Component } from 'react';
import './App.css';
import LanguagesContainer from './containers/LanguagesContainer'

export default class App extends Component {
  
  state = {
    languages: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/languages")
      .then(response => response.json())
      .then(languages => {
        this.setState({ languages })
      })
  }

  render() {
    return (
      <div className="App">
        <LanguagesContainer languages={this.state.languages} />
      </div>
    );
  }
}

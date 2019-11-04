import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import LanguagesContainer from './containers/LanguagesContainer'

export default class App extends Component {
  
  state = {
    languages: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/languages")
      .then(response => response.json())
      .then(languages => this.setState({ languages }))
  }

  render() {
    return (
      <div className="App">
        <Router>
          <header>

          </header>
          <main>
            <Route 
              exact path="/" 
              render={() => <LanguagesContainer languages={this.state.languages} />} 
            />
          </main>
        </Router>
      </div>
    );
  }
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import LanguagesContainer from './containers/LanguagesContainer'
import LanguagePage from './containers/LanguagePage'

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
            <Link to="/">FSD Resources</Link>
          </header>
          <main>
            <Route 
              exact path="/" 
              render={() => <LanguagesContainer languages={this.state.languages} />} 
            />
            <Route 
              exact path="/:language" 
              render={(props) => <LanguagePage {...props} languages={this.state.languages} />} 
            />
          </main>
        </Router>
      </div>
    );
  }
}

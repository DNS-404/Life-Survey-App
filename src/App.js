import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Survey from './Survey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Life Survey</h1>
        </header>
        <footer>
          Made by Divyanshu N Singh in ReactJS.
        </footer>
      </div>
    );
  }
}

export default App;

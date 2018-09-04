import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/rant.txt'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my website!</h1>
        </header>
        <header className="New-header">
          <h1 className="Big-title">
            Currently a computer science student attending the University of Waterloo!
          </h1>
        </header>
      </div>
    );
  }
}

export default App;

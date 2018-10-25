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
        <img className="App-image" src="http://costcocouple.com/wp-content/uploads/2013/08/Kirkland-Signature-Organic-Vanilla-Soy-Milk-Costco-1.jpg"/>
        <header className="New-header">
        
          <h1 className="Big-title">
            This is so sad!! WEB DESIGN IS RETARDED.
          </h1>
        </header>
        <header>
          
        </header>
  
      </div>
    );
  }
}

export default App;

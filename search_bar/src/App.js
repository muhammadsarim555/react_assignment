import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Component1 from './component1/work/index';
// import index from './component1/work/index';

class App extends Component {
  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> Search... </h2>
        </header>
        <Component1/>
      </div>
    );
  }
}

export default App;

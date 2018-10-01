import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kit from './Screen/Kit/Kit';
import Teacher from './Screen/Teacher/Teacher';
import Judge from './Screen/Judge/Judge';


class App extends Component {
  constructor() {
    super();

    this.state = {
      volume: 0,
      furtherState: [],
      
    }

    this.applaud = this.applaud.bind(this)
    // this.updateApplaude = this.updateApplaude.bind(this)

  }

  static getDerivedStateFromProps() {
    return { volume: 5 }
  }

  updateSteps(furtherSteps) {
    this.setState({ furtherSteps })
  }

  // shouldComponentUpdate(){
  //   this.updateApplaude()
  //   return true
  // }
  

  applaud() {
    this.setState({
      applaud: 'Happy',
    })
  }
  render() {
    const { volume, furtherSteps, applaud } = this.state;
    console.log("I AM RENDER FROM PARENT")
    return (
      <div >
        <h1> LifeCycle Hooks. </h1>
        <hr />
        <br />
        <Kit dressColor="yellow" furtherSteps={furtherSteps} applaud={applaud} />

        <hr />
        <Teacher updateSteps={this.updateSteps} />
        <Judge giveApplaud={this.applaud} />


      </div>
    );
  }
}

export default App;

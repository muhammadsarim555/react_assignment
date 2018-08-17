import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = "Hello World";
    const obj = {name: "Hello World Object"};
    const data = ['We', 'are', 'United'] //Show these in seperate tags
    return (
      <div className="App">
        <ul> 
          <li> {name} </li>
           </ul>
            <hr/>

        <ul> 
          <li>
            {obj.name}
            </li>
        </ul>
        <hr/>
        <ol>
          
            {data.map((v ,i)=>{
              // console.log(v);
              return <li>{v}</li>
            })}
          </ol>

      </div>
    );
  }
}

export default App;

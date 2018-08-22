import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
  
    var a = localStorage.getItem("todovalue");
    this.state = {
      userInput : "",
      list : [],
      ls : a,
    }
console.log(this.state.ls)
  }

  
changeUserInput(input){
  this.setState({
      userInput: input,
      
    }
    // , ( ) => console.log(input)
  );
  }
addToList(p){
  let listArray = this.state.list;
  if(p == "" ){
    // input == "" ?
     alert("Please Write Something")
}
// : 
else{
listArray.push(p)
localStorage.setItem("todovalue" , listArray) 

  this.setState({
    list : listArray,
    userInput: ""
  },()=> console.log(this.state.list))
  }
}

renderHeader(){
  return(<div className="App">
  <h4 className="h4"> To Do List With React</h4>  
  <div className="form-group">
 <input type="text" onChange={(e) => this.changeUserInput(e.target.value)} value={this.state.userInput} className="form-control" id="title" placeholder="Title"/>
 <button id="addbtn" type="button" onClick={()=> this.addToList(this.state.userInput)} className="btn btn-elegant">Add </button>
 
</div>

</div>);
}

getValue(){
  var b = localStorage.getItem("todovalue");
  return(
    
<ul style={{ textAlign: 'center' }}>
<span>
          {
            this.state.list.map((val) =>  <li className="list-group-item">{val}</li> ) }
      </span>     
           </ul>
  )
}
  
  render() {
    return (
      // console.log(this),
<div className="content" >
      {this.renderHeader()} 
      {this.getValue()}
  
      </div>
      );
  }
}

export default App;

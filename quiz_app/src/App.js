import React, { Component } from 'react';
import './App.css';
import QuizList from './Component/QuizList/QuizList';
import QuizInfo from './Component/QuizInfo/QuizInfo';
import Login from './Component/Authentication/Login';
import SignUp from './Component/Authentication/SignUp';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // quizzes : [
      //   {name: "HTML" , questions : 10, },
      //   {name: "CSS" , questions : 10, },
      //   {name: "JavaScript" , questions : 10, },
      //   {name: "React" , questions : 10, },
      // ],
      // quizInfo : null,
      // boolean: false,
      signUpEmail: 'sarim',
      signUpPassword: '',
      signUpUser: false,
      currentUser: true,
      
    };
    this.buttonIndex = this.buttonIndex.bind(this)
  }

  buttonIndex(index) {
    const { quizzes } = this.state;
    console.log(this.state.quizzes)
    this.setState({ quizInfo: quizzes[index], boolean: true })
    console.log(this.state.quizInfo, "qiox info");
  }

  back() {
    this.setState({
      boolean: false,
    })
  }

  // for signup component
  updateEmailPassword(u) {

    this.setState({
         signUpEmail : u,
         signUpPassword : u,
      }
    )
  }

  renderHeader(){
    return (
      <div className="nav">
        <h1> {this.state.signUpEmail} </h1>
        <h2> {this.state.signUpPassword} </h2>
        
      </div>
    )
  }

  render() {
    // const boolean = {this.state};
    // console.log(this.state.signUpEmail)

    return (
      <div className="App">
        {this.renderHeader()}
        <SignUp getEmailPassword={this.updateEmailPassword.bind(this)} />
        {/* {!this.state.boolean && <QuizList quizzes={this.state.quizzes} buttonIndex={this.buttonIndex}  />}
        {this.state.boolean && <QuizInfo quizInfo={this.state.quizInfo}  backButton={this.back.bind(this)}  />}
         */}
      </div>
    );
  }
}

export default App;
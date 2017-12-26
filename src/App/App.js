import React, { Component } from 'react';
import logo from '../logo.svg';
import Window from "../Window/Window";
import './App.scss'
import SignIn from "../Registration/SignIn";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignedIn: false
    };
  }
  signIn = () => {
        this.setState({isSignedIn: true});
    };

  render() {
    return (
      <div className="App">
          {/*{this.state.isSignedIn ? <Window/> : <SignIn signIn={this.signIn}/>}*/}
        <Window/>
      </div>
    );
  }
}

export default App;

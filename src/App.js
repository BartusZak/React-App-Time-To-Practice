import React, { Component } from 'react';
import UserOutPut from './UserOutPut/UserOutPut';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    accounts: [
      { username: "BartusZak"},
      { username: "Noziak"},
      { username: "TurasPeKa"}
    ]
  };
   manipulateStateHandler = () => {
    
   };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <UserOutPut username={this.state.accounts[0].username}/>
        <UserOutPut username={this.state.accounts[1].username}/>
        <UserOutPut username={this.state.accounts[2].username}/>
      </div>
    );
  }
}

export default App;

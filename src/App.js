import React, { Component } from 'react';
import UserOutPut from './UserOutPut/UserOutPut';
import UserInPut from './UserInPut/UserInPut';
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
   manipulateStateHandler = (event) => {
    this.setState({
      accounts: [
        { username: event.target.value},
        { username: "Noziak"},
        { username: "TurasPeKa"}
      ]
   })
  };
  render() {
    const style ={
      color: 'red'
    };
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
        <UserInPut style={style} change={this.manipulateStateHandler} username={this.state.accounts[0].username} />

        <UserOutPut username={this.state.accounts[1].username} />
        <UserInPut username={this.state.accounts[1].username} />

        <UserOutPut username={this.state.accounts[2].username}/>
        <UserInPut username={this.state.accounts[2].username} />

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Sam"
    }
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <UserInput
          hello="this is it"
          changeUsername={this.changeUsername}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        <UserOutput />

       
      </div>
    );
  }
}

export default App;

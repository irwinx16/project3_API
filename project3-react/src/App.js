import React, { Component } from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import EmployerContainer from './EmployerContainer';
import ShiftContainer from './ShiftContainer';
import LoginRegister from './LoginRegister';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      loginError: ''
    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="App">
        <EmployeeContainer />
        <EmployerContainer />
        <ShiftContainer />
        <LoginRegister />
      </div>
    );
  }
}

export default App;

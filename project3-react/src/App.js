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
      employees: [],
      loggedIn: false,
      loginError: ''
    }
  }
  componentDidMount() {

  }
  getEmployees = async () => {
    const employeesJson = await fetch('http://localhost:9292/employees', {
      credentials: 'include'
    });
    const employees = await employeesJson.json();
    return employees;
  }
  doLogin = async (username, password) => {
    console.log("you're trying to login");
    const response = await fetch('http://localhost:9292/employers/login', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const parsedLoginResponse = await response.json();
    console.log("here's what we have now:");
    console.log(parsedLoginResponse);
    if (parsedLoginResponse.success) {
      this.getEmployees()
      .then((response) => {
        console.log(response.employees, " this is the employees as a result of get employees in doLogin");
        this.setState({
          employees: response.employees,
          loggedIn: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      this.setState({
        loginError: parsedLoginResponse.message
      });
    }
  }
  doRegister = async (username, password) => {
    console.log("you're trying to register");
    const response = await fetch('http://localhost:9292/employers/register', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const parsedRegisterResponse = await response.json();
    console.log("here's what we have now:");
    console.log(parsedRegisterResponse);
    if (parsedRegisterResponse.success) {
      this.getEmployees()
      .then((response) => {
        this.setState({
          employees: response.employees,
          loggedIn: true
        })
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      this.setState({
        loginError: parsedRegisterResponse.message
      });
    }
  }
  render() {
    console.log(this.state.employees, " this should be a list of the employees.");
    return (
      <div className="App">
        {this.state.loggedIn ?
          <div> 
            <EmployeeContainer employees={this.state.employees} />
            <EmployerContainer />
            <ShiftContainer />
          </div>
        : <LoginRegister doLogin={this.doLogin} doRegister={this.doRegister} loginError={this.state.loginError} />
        }
      </div>
    );
  }
}

export default App;

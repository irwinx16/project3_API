import React, { Component } from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import LoginRegister from './LoginRegister';
import EmployeeProfile from './EmployeeProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      whosWorking: [],
      shifts: [],
      loggedIn: false,
      loginError: '',
      showingEmployee: false,
      employeeId: '',
      message: ''
    }
  }
  getEmployees = async () => {
    const employeesJson = await fetch('http://localhost:9292/employees', {
      credentials: 'include'
    });
    const employees = await employeesJson.json();
    return employees;
  }
  getWhosWorking = async () => {
    const whosWorkingJson = await fetch('http://localhost:9292/employees/whosworking', {
      credentials: 'include'
    });
    const whosWorking = await whosWorkingJson.json();
    return whosWorking;
  }
  getShifts = async () => {
    const shiftsJson = await fetch('http://localhost:9292/shifts', {
      credentials: 'include'
    });
    const shifts = await shiftsJson.json();
    return shifts;
  }
  getEmployers = async () => {
    const employersJson = await fetch('http://localhost:9292/employers', {
      credentials: 'include'
    });
    const employers = await employersJson.json();
    return employers;
  }
  doLogout = async () => {
    const logoutJson = await fetch('http://localhost:9292/employers/logout', {
      credentials: 'include' // you MUST include in ALL ajax requests
    })
    const loggedOut = await logoutJson.json();
    if (loggedOut.success) {
      this.setState({
        loggedIn: false,
        message: loggedOut.message
      })
    }     
    return loggedOut;
  }
  doLogin = async (username, password) => {
    const loginJson = await fetch('http://localhost:9292/employers/login', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const loggedIn = await loginJson.json();
    if (loggedIn.success) {
      this.setState({
        loggedIn: true,
        message: `Welcome back, ${username}!`
      })
      this.getEmployees()
      .then((response) => {
        this.setState({
          employees: response.employees
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getEmployers()
      .then((response) => {
        this.setState({
          employers: response.employers
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getShifts()
      .then((response) => {
        this.setState({
          shifts: response.shifts
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getWhosWorking()
      .then((response) => {
        this.setState({
          whosWorking: response.whosworking
        })
      })
      .catch((err) => {
        console.log(err);
      })

    } else {
      this.setState({
        loginError: loggedIn.message,
        message: "We're sorry, there was an error. Please try again."
      });
    }
  }
  doRegister = async (username, password) => {
    const registerJson = await fetch('http://localhost:9292/employers/register', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const parsedRegisterResponse = await registerJson.json();
    if (parsedRegisterResponse.success) {

      this.setState({
        loggedIn: true,
        message: `Welcome to the site, ${username}!`
      })

      this.getEmployees()
      .then((response) => {
        this.setState({
          employees: response.employees
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getEmployers()
      .then((response) => {
        this.setState({
          employers: response.employers
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getShifts()
      .then((response) => {
        this.setState({
          shifts: response.shifts
        })
      })
      .catch((err) => {
        console.log(err);
      })

      this.getWhosWorking()
      .then((response) => {
        this.setState({
          whosWorking: response.whosworking
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
  showEmployeeProfile = (e) => {
    const id = e.currentTarget.parentNode.id;
    this.setState({
      showingEmployee: true,
      employeeId: id
    })
  }
  returnToMainPage = () => {
    this.setState({
      showingEmployee: false
    })
  }
  hireEmployee = async (employee, e) => {
      e.preventDefault();
      const employeesJson = await fetch ('http://localhost:9292/employees', {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(employee)
      });
      const employeesParsed = await employeesJson.json();
      this.setState({
        employees: [...this.state.employees, employeesParsed.new_employee]
      })
  }
  deleteEmployee = async (e) => {
    const id = e.currentTarget.parentNode.id;
    const employees = await fetch (`http://localhost:9292/employees/${id}`, {
      credentials: 'include',
      method: 'DELETE'
    });

    this.setState({
      employees: this.state.employees.filter((employee) => employee.id != id)
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.loggedIn ?
          <div> 
          {this.state.showingEmployee ?
            <EmployeeProfile employees={this.state.employees} employeeId={this.state.employeeId} returnToMainPage={this.returnToMainPage} shifts={this.state.shifts} doLogout={this.doLogout}/>
          : <div>
              <EmployeeContainer employees={this.state.employees} whosWorking={this.state.whosWorking} showEmployeeProfile={this.showEmployeeProfile} hireEmployee={this.hireEmployee} getEmployees={this.getEmployees} deleteEmployee={this.deleteEmployee} doLogout={this.doLogout} message={this.state.message}/>
            </div>
          }
          </div>
        : <LoginRegister doLogin={this.doLogin} doRegister={this.doRegister} loginError={this.state.loginError} message={this.state.message} />
        }
      </div>
    );
  }
}

export default App;

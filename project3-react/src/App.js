import React, { Component } from 'react';
import './App.css';
import EmployeeContainer from './EmployeeContainer';
import ShiftContainer from './ShiftContainer';
import LoginRegister from './LoginRegister';
import EmployeeProfile from './EmployeeProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      whosWorking: [],
      loggedIn: false,
      loginError: '',
      showingEmployee: false,
      employeeId: ''
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

  doLogin = async (username, password) => {
    const response = await fetch('http://localhost:9292/employers/login', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const parsedLoginResponse = await response.json();
    if (parsedLoginResponse.success) {
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
        loginError: parsedLoginResponse.message
      });
    }
  }
  doRegister = async (username, password) => {
    const response = await fetch('http://localhost:9292/employers/register', {
      method: 'POST',
      credentials: 'include', // you MUST include in ALL ajax requests
      body: JSON.stringify({
        username: username,
        password: password
      }) 
    })
    const parsedRegisterResponse = await response.json();
    if (parsedRegisterResponse.success) {

      this.setState({loggedIn: true})

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
    console.log(id);
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
            <EmployeeProfile employees={this.state.employees} employeeId={this.state.employeeId} returnToMainPage={this.returnToMainPage}/>
          : <div>
              <EmployeeContainer employees={this.state.employees} whosWorking={this.state.whosWorking} showEmployeeProfile={this.showEmployeeProfile} hireEmployee={this.hireEmployee} getEmployees={this.getEmployees} deleteEmployee={this.deleteEmployee}/>
            </div>
          }
          </div>
        : <LoginRegister doLogin={this.doLogin} doRegister={this.doRegister} loginError={this.state.loginError} />
        }
      </div>
    );
  }
}

export default App;

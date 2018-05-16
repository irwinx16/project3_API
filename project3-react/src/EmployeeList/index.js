import React from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './style.css';

const EmployeeList = ({employees, showEmployeeProfile, showWorkingEmployees, showHireEmployeeModal, deleteEmployee, doLogout, message}) => {
	const employeeList = employees.map((employee, i) => {
		return (
      <div className="container" key={employee.id}>
        <div className="wrapper">
          <div className="box id">ID</div>
          <div className="box name">Name</div>
          <div className="box position">Position</div>
        </div>
        <div className="row" id={employee.id}>
          <div className="box id">
            <span key={employee.id} onClick={deleteEmployee}>Delete</span>{employee.id}
          </div>
            <div className="box name" onClick={showEmployeeProfile}>{employee.name}
            </div>
            <div className="box position">{employee.position}</div>
        </div>
      </div>
        )
	})

	return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a>EMS</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem onClick={showHireEmployeeModal}>
              Hire New Employee
            </NavItem>
            <NavItem onClick={showWorkingEmployees}>
              Show Present Employees
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem onClick={doLogout}>
              Log Out
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <h3> {message} </h3>
			<h4> Here are all the employees: </h4>
				{employeeList}
		</div>
	);
}

export default EmployeeList;

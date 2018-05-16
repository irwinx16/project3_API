import React from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './style.css';

const EmployeeList = ({employees, showEmployeeProfile, showWorkingEmployees, showHireEmployeeModal, deleteEmployee, doLogout, message}) => {
	const employeeList = employees.map((employee, i) => {
		return (
            <li key={employee.id} id={employee.id}>
                <b>Name:</b> <span onClick={showEmployeeProfile}>{employee.name}</span> <b>Position:</b> {employee.position}
                <button key={employee.id} onClick={deleteEmployee}>Delete</button>
            </li>
        )
	})

	return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">EMS</a>
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
			<ul>
				{employeeList}
			</ul>
		</div>
	);
}

export default EmployeeList;

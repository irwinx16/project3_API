import React from 'react';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './style.css';

const WhosWorkingList = ({whosWorking, showEmployeeProfile, showEmployeeList, doLogout}) => {
	const WhosWorkingList = whosWorking.map((employee, i) => {
		return (
			<li key={employee.id} id={employee.id}>
				<b>Name:</b> <span onClick={showEmployeeProfile}>{employee.name}</span> <b>Position:</b> {employee.position}
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
		            <NavItem onClick={showEmployeeList}>
		            	Show All Employees
		            </NavItem>
		          </Nav>
		          <Nav pullRight>
		            <NavItem onClick={doLogout}>
		            	Log Out
		            </NavItem>
		          </Nav>
		        </Navbar.Collapse>
		    </Navbar>
			<h2> Present Employees: </h2>
			<ul>
				{WhosWorkingList}
			</ul>
		</div>
	);
}

export default WhosWorkingList;
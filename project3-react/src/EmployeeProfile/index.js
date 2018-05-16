import React from 'react';
import EditModal from '../EditModal';
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import './style.css';

const EmployeeProfile = ({employees, employeeId, returnToMainPage, shifts, doLogout, openEditModal, openCreateShiftModal, deleteShift}) => {

	const returnEmployee = employees.filter(employee => employee.id == employeeId);
	const shownEmployee = returnEmployee[0];

	const employeeShifts = shifts.filter(shift => shift.employee_id == employeeId);
	const shiftList = employeeShifts.map((shift, i) => {
		return (
            <li key={shift.id} id={shift.id}>
                <b>Name:</b> {shift.name} <br/>
                <b>Start of Shift:</b> {shift.start_shift} <br/>
                <b>End of Shift:</b> {shift.end_shift} <br/>
                <b>Notes:</b> {shift.notes} <br/>
                <button key={shift.id} onClick={deleteShift}>Delete</button>
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
		            <NavItem onClick={returnToMainPage}>
		            	Show All Employees
		            </NavItem>
		            <NavItem onClick={openEditModal}>
		            	Edit {shownEmployee.name}'s Profile
		            </NavItem>
		            <NavItem onClick={openCreateShiftModal}>
		            	Assign {shownEmployee.name} a New Shift
		            </NavItem>
		          </Nav>
		          <Nav pullRight>
		            <NavItem onClick={doLogout}>
		              Log Out
		            </NavItem>
		          </Nav>
		        </Navbar.Collapse>
		    </Navbar>
			
			<h1> {shownEmployee.name}'s Profile: </h1>
			<p>
				<b> Name: </b> {shownEmployee.name} <br/>
				<b> Position: </b> {shownEmployee.position} <br/>
				<b> Notes: </b> {shownEmployee.notes} <br/>
				<b> Availability: </b> {shownEmployee.availability}
			</p>

			<h3>{shownEmployee.name} has {shiftList.length} shifts scheduled.</h3>
			
			<ul>
				{shiftList}
			</ul>

		</div>
	);
}

export default EmployeeProfile;

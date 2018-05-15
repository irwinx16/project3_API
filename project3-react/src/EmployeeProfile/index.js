import React from 'react';
import EditModal from '../EditModal';
import './style.css';

const EmployeeProfile = ({employees, employeeId, returnToMainPage, value}) => {
	const returnEmployee = employees.filter(employee => employee.id == employeeId);
	const shownEmployee = returnEmployee[0];

	return (
		<div>
			<h1> {shownEmployee.name}'s Profile: </h1>
			<p>
				<b> Name: </b> {shownEmployee.name} <br/>
				<b> Position: </b> {shownEmployee.position} <br/>
				<b> Notes: </b> {shownEmployee.notes} <br/>
				<b> Availability: </b> {shownEmployee.availability}
			</p>
			<button onClick={returnToMainPage}>Return to Main Page</button>
			<button onClick={value}>Button</button>
		</div>
	);
}

export default EmployeeProfile;

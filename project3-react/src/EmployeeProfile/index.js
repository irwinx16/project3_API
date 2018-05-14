import React from 'react';
import './style.css';

const EmployeeProfile = ({employees, employeeId}) => {
	const returnEmployee = employees.filter(employee => employee.id == employeeId);
	const shownEmployee = returnEmployee[0];
	return (
		<div>
			<h1> Here's the employee we selected: </h1>
			<p>
				<b> Name: </b> {shownEmployee.name} <br/>
				<b> Position: </b> {shownEmployee.position} <br/>
				<b> Notes: </b> {shownEmployee.notes} <br/>
				<b> Availability: </b> {shownEmployee.availability}
			</p>
			<button>Return to Main Page</button>
		</div>
	);
}

export default EmployeeProfile;
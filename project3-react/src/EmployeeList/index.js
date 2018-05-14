import React from 'react';
import './style.css';

const EmployeeList = ({employees, showEmployee}) => {
	const employeeList = employees.map((employee, i) => {
		return (
			<li key={employee.id} id={employee.id} onClick={showEmployee}>
				<b>Name:</b> {employee.name} <b>Position:</b> {employee.position}
				ID: {employee.id}
			</li>
		)
	})

	return (
		<div>
			<h1> Here are all the employees: </h1>
			<ul>
				{employeeList}
			</ul>
		</div>
	);
}

export default EmployeeList;
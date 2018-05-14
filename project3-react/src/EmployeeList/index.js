import React from 'react';
import './style.css';

const EmployeeList = ({employees}) => {
	const employeeList = employees.map((employee, i) => {
		return (
			<li key={i}>
				<b>Name:</b> {employee.name} <b>Position:</b> {employee.position}
			</li>
		)
	})
	return (
		<ul>
			{employeeList}
		</ul>
	);
}

export default EmployeeList;
import React from 'react';
import './style.css';

const EmployeeList = ({employees}) => {
	console.log(employees, " this is employees prop in EmployeeList");
	const employeeList = employees.map((employee, i) => {
		return (
			<li key={i}><b>Name:</b> {employee.name} </li>
		)
	})
	return (
		<ul>
			{employeeList}
		</ul>
	);
}

export default EmployeeList;
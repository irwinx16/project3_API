import React from 'react';
import './style.css';

const EmployeeList = ({employees, showEmployeeProfile, showWorkingEmployees, showHireEmployeeModal}) => {
	const employeeList = employees.map((employee, i) => {
		return (
			<li key={employee.id} id={employee.id} onClick={showEmployeeProfile}>
				<b>Name:</b> {employee.name} <b>Position:</b> {employee.position}
			</li>
		)
	})

	return (
		<div>
			<h1> Here are all the employees: </h1>
			<button onClick={showHireEmployeeModal}> Hire New Employee </button> <br/>
			<button onClick={showWorkingEmployees}> Show Present Employees</button>
			<ul>
				{employeeList}
			</ul>
		</div>
	);
}

export default EmployeeList;
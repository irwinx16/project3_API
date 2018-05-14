import React from 'react';
import './style.css';

const EmployeeList = ({employees, showEmployeeProfile, showWorkingEmployees, showHireEmployeeModal, deleteEmployee}) => {
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
import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

const EmployeeList = ({employees, showEmployeeProfile, showWorkingEmployees, showHireEmployeeModal, deleteEmployee, doLogout}) => {
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
			<button onClick={doLogout}>Log Out</button>
			<h1> Here are all the employees: </h1>
			<Button bsStyle="danger" onClick={showHireEmployeeModal}> Hire New Employee </Button> <br/>
			<button bsstyle="danger" onClick={showWorkingEmployees}> Show Present Employees</button>
			<ul>
				{employeeList}
			</ul>
		</div>
	);
}

export default EmployeeList;

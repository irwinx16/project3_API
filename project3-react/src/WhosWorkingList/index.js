import React from 'react';

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
			<button onClick={doLogout}>Log Out</button>
			<h2> Present Employees: </h2>
			<ul>
				{WhosWorkingList}
			</ul>
			<button onClick={showEmployeeList}>Show All Employees</button>
		</div>
	);
}

export default WhosWorkingList;
import React from 'react';

const WhosWorkingList = ({whosWorking, showEmployeeProfile, showEmployeeList}) => {
	const WhosWorkingList = whosWorking.map((employee, i) => {
		return (
			<li key={employee.id} id={employee.id} onClick={showEmployeeProfile}>
				<b>Name:</b> {employee.name} <b>Position:</b> {employee.position}
			</li>
		)
	})
	return (
		<div>
			<h2> Present Employees: </h2>
			<ul>
				{WhosWorkingList}
			</ul>
			<button onClick={showEmployeeList}>Show All Employees</button>
		</div>
	);
}

export default WhosWorkingList;
import React from 'react';

const WhosWorkingList = ({whosWorking}) => {
	const WhosWorkingList = whosWorking.map((employee, i) => {
		return (
			<li key={i}>
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
		</div>
	);
}

export default WhosWorkingList;
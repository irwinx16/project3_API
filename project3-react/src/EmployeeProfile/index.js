import React from 'react';
import EditModal from '../EditModal';
import './style.css';

const EmployeeProfile = ({employees, employeeId, returnToMainPage, shifts, doLogout, modalOpen}) => {
	const returnEmployee = employees.filter(employee => employee.id == employeeId);
	const shownEmployee = returnEmployee[0];

	const employeeShifts = shifts.filter(shift => shift.employee_id == employeeId);
	const shiftList = employeeShifts.map((shift, i) => {
		return (
            <li key={shift.id} id={shift.id}>
                <b>Name:</b> {shift.name} <br/>
                <b>Start of Shift:</b> {shift.start_shift} <br/>
                <b>End of Shift:</b> {shift.end_shift} <br/>
                <b>Notes:</b> {shift.notes}
            </li>
        )
	})

	return (
		<div>
			<button onClick={doLogout}>Log Out</button>
			<h1> {shownEmployee.name}'s Profile: </h1>
			<p>
				<b> Name: </b> {shownEmployee.name} <br/>
				<b> Position: </b> {shownEmployee.position} <br/>
				<b> Notes: </b> {shownEmployee.notes} <br/>
				<b> Availability: </b> {shownEmployee.availability}
			</p>
			<h3>{shownEmployee.name} has {shiftList.length} shifts scheduled.</h3>
			<ul>
				{shiftList}
			</ul>
      <button onClick={modalOpen}>Edit Employee</button>
			<button onClick={returnToMainPage}>Return to Main Page</button>
		</div>
	);
}

export default EmployeeProfile;

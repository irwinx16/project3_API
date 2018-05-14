import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import './style.css';

class EmployeeContainer extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			showEdit: false,
			editedEmployee: ''
		}
	}
	// componentWillReceiveProps(nextProps){
	// 	console.log(nextProps, " this is nextProps from employee container");
	// 	this.setState({employees: nextProps.employees});
	// }
	componentDidMount() {
		this.setState({employees: this.props.employees})
	}
	// showEdit = (e) => {
	// 	const employeeId = parseInt(e.target.nextSibling.id);
	// 	const editedEmployee = this.state.employees.find((employee) => {
	// 		return employee.id === employeeId;
	// 	})
	// 	this.setState({
	// 		showEdit: true,
	// 		editedEmployee: editedEmployee
	// 	})
	// }
	// deleteEmployee = async (e) => {
	// 	const id = e.currentTarget.id;
	// 	const employees = await fetch ('http://localhost:9292/employees/' + id, {
	// 		method: 'DELETE'
	// 	});

	// 	this.setState({
	// 		employees: this.state.employees.filter((employee) => employee.id != id)
	// 	});
	// }
	render() {
		return (
			<div>
				<h1> Welcome to the website. </h1>
				<h2> Here are all the employees: </h2>
				<EmployeeList employees={this.state.employees} />
			</div>
		);
	}
}

export default EmployeeContainer;
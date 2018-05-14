import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import WhosWorkingList from '../WhosWorkingList';
import HireEmployeeModal from '../HireEmployeeModal';
import './style.css';

class EmployeeContainer extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			whosWorking: [],
			showEdit: false,
			editedEmployee: '',
			showAllEmployees: false
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps, " this is nextProps from employee container");
		this.setState({
			employees: nextProps.employees,
			whosWorking: nextProps.whosWorking
		});
	}
	componentDidMount() {
		this.setState({
			employees: this.props.employees,
			whosWorking: this.props.whosWorking
		})
	}
	hireEmployee = async (e) => {

	}
	showEmployeeList = () => {
		this.setState({showAllEmployees: true})
	}
	showWorkingEmployees = () => {
		this.setState({showAllEmployees: false})
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

	  showWaiterOrders = (e) => {
    const id = e.currentTarget.id
    console.log(id);
    // const showedOrder = this.state.waiters.find((waiter) => {
      // return waiter.id == id

    
    this.setState({
      showingOrders: true,
      waiterId: id
    })
  }

  
	render() {
		return (
			<div>
				<h1> Welcome to the website. </h1>
				{ this.state.showAllEmployees ?
					<EmployeeList employees={this.state.employees} showEmployee={this.props.showEmployee} showWorkingEmployees={this.showWorkingEmployees}/>
				:
					<WhosWorkingList whosWorking={this.state.whosWorking} showEmployeeList ={this.showEmployeeList}/>
				}
			</div>
		);
	}
}

export default EmployeeContainer;
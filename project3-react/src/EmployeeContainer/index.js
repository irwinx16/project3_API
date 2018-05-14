import React, { Component } from 'react';
import EmployeeList from '../EmployeeList';
import WhosWorkingList from '../WhosWorkingList';
import EmployeeProfile from '../EmployeeProfile';
import './style.css';

class EmployeeContainer extends Component {
	constructor() {
		super();
		this.state = {
			employees: [],
			whosWorking: [],
			showEdit: false,
			editedEmployee: '',
			showAllEmployees: false,
			employeeId: '',
			showingEmployee: false
		}
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps, " this is nextProps from employee container");
		this.setState({
			employees: nextProps.employees,
			whosWorking: nextProps.whosWorking
		});
	}
	showEmployee = (e) => {
		const id = e.currentTarget.id;
		this.setState({
			showingEmployee: true,
			employeeId: id
		})

	}
	// componentDidMount() {
	// 	this.setState({
	// 		employees: this.props.employees,
	// 		whosWorking: this.props.whosWorking
	// 	})
	// }
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
				{ this.state.showingEmployee ?
					<EmployeeProfile employeeId={this.state.employeeId} employees={this.state.employees}/>
				:	<div> 
						<EmployeeList employees={this.state.employees} showEmployee={this.showEmployee} />
						<WhosWorkingList whosWorking={this.state.whosWorking} />
					</div>
				}

			</div>
		);
	}
}

export default EmployeeContainer;
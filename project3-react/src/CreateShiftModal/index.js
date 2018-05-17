import React, { Component } from 'react';
import './style.css';

class CreateShiftModal extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			employee_id: '',
			start_shift: '',
			end_shift: '',
			notes: ''
		}
	}
	componentDidMount (){
		this.updateEmployeeId();
	}
	updateName = (e) => {
		const name = e.currentTarget.value;
		this.setState({
			name: name
		});
	}
	updateEmployeeId = () => {
		this.setState({
			employee_id: `${this.props.employeeId}`
		})
	}
	updateStartShift = (e) => {
		const start_shift = e.currentTarget.value;
		this.setState({
			start_shift: start_shift
		});
	}
	updateEndShift = (e) => {
		const end_shift = e.currentTarget.value;
		this.setState({
			end_shift: end_shift
		});
	}
	updateNotes = (e) => {
		const notes = e.currentTarget.value;
		this.setState({
			notes: notes
		});
	}
	render() {
		const showModal = this.props.showCreateShiftModal ? 'show' : 'hide';
		return (
			<div className={showModal}>
				<button onClick={this.props.closeCreateShiftModal}>Exit</button>
				<form onSubmit={this.props.addShift.bind(null, this.state)}>
						New Shift: <br/>
					<input type="text" name="name" placeholder="Shift Name" onChange={this.updateName}/> <br/>
					<input type="text" name="start_shift" placeholder="Start of Shift (YYYY-MM-DD HH:MM)" onChange={this.updateStartShift} /> <br/>
					<input type="text" name="end_shift" placeholder="End of Shift (YYYY-MM-DD HH:MM)" onChange={this.updateEndShift} /> <br/>
					<input type="text" name="notes" placeholder="Shift Notes" onChange={this.updateNotes} /> <br/>
					<button onClick={this.props.closeCreateShiftModal}>Assign Shift</button>
				</form>
			</div>
		);
	}
}

export default CreateShiftModal;

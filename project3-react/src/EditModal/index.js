import React, { Component } from 'react';
import './style.css';

class EditModal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      position: '',
      notes: '',
      availability: ''
    }
  }
  updateName = (e) => {
    const name = e.currentTarget.value;
    this.setState({
      name: name
    });
  }
  updatePosition = (e) => {
    const position = e.currentTarget.value;
    this.setState({
      position: position
    });
  }
  updateNotes = (e) => {
    const notes = e.currentTarget.value;
    this.setState({
      notes: notes
    });
  }
  updateAvailability = (e) => {
    const availability = e.currentTarget.value;
    this.setState({
      availability: availability
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editEmployee(this.state)
  }

  render(){
    const showModal = this.props.modalState ? 'show' : 'hide'
    return (
      <div className={showModal}>
        <form onSubmit={this.handleSubmit}>
            Edit Employee: <br/>
          <input type="text" name="name" placeholder="Employee Name" onChange={this.updateName}/> <br/>
          <input type="text" name="position" placeholder="Employee Position" onChange={this.updatePosition}/> <br/>
          <input type="text" name="notes" placeholder="Employee Notes" onChange={this.updateNotes} /> <br/>
          <input type="text" name="availability" placeholder="Employee Availability" onChange={this.updateAvailability} /> <br/>
          <button onClick={this.props.modalClose}>Submit</button>
        </form>
      </div>

    )
  }
}

export default EditModal;

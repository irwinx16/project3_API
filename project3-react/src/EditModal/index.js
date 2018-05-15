import React, { Component } from 'react';
import './style.css';

class EditModal extends Component {
  constructor(){
    super();

    this.state = {
      inputVal: ''
    }
  }
  handleInput = (e) => {
    this.setState({inputVal: e.curentTarget.value})
  }
  componentWillReceiveProps(NextProps){
    this.setState({inputVal: NextProps.editedEmployee})
  }


  render(){
    console.log(this.state.inputVal, " this is the render in EditModal")
    return (
      <input type="text" value={this.state.inputVal} onChange={this.handleInput}/>

    )
  }
}

export default EditModal;

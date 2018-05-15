import React, { Component } from 'react';
import './style.css';

class LoginRegister extends Component {
	constructor() {
		super();
		this.state = {
			username: '',
			password: '',
			registering: false,
		}
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.registering) this.props.doRegister(this.state.username, this.state.password)
		else this.props.doLogin(this.state.username, this.state.password)
	}
	handleInput = (e) => {
		const whichField = e.currentTarget.name
		if (whichField === "username") this.setState({"username": e.currentTarget.value})
		else this.setState({"password": e.currentTarget.value})
	}
	registration = (e) => {
		this.setState({registering: true});
	}
	loggingIn = (e) => {
		this.setState({registering: false});
	}
	render() {
		return (
			<div>
				<h1> {this.props.message} </h1>
				{this.props.loginError.toString() !== '' ? <p className="login-error">{this.props.loginError}</p> : null}

				<p><span className={this.state.registering ? "current" : null}onClick={this.registration}>Register</span> • <span className={!this.state.registering ? "current" : null} onClick={this.loggingIn}>Log In</span></p>
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput}/> <br/>
					<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleInput}/> <br/>
					<button > {this.state.registering ? "Register" : "Log In"}</button>
				</form>		
			</div>
		)
	}
}

export default LoginRegister;
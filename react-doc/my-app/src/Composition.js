import React, { Component } from 'react';

function MakeBlueBorder(props) {
	const styleBlue = {
		border: "1px solid blue"
	}

	return (
		<div style={styleBlue}>
			{props.children}
		</div>
	)
}

function Dialog(props) {
	return (
		<MakeBlueBorder>
			<h1>
				{props.title}
			</h1>
			<p>
				{props.message}
			</p>
			{props.children}
		</MakeBlueBorder>
	)
}

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			login: ''
		}
	}

	render () {
		return (
			<>
				<Dialog 
					title="Welcome"
					message="Sign up">
					<input 
						value={this.state.login}
						onChange={this.onChange}>
					</input>
					<button onClick={this.onSubmit}>
						Sign me up!
					</button>
				</Dialog>
			</>
		)
	}

	onChange = (e) => {
		e.preventDefault();
		this.setState({login: e.target.value}, () => {
			console.log("Current value: ",this.state.login);
		})
	}

	onSubmit = () => {
		console.log("Welcome " + this.state.login);
	}
}

class Composition extends Component {
	render() {
		return (
			<div>
				<SignUp />
			</div>
		);
	}
}

export default Composition;

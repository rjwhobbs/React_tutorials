import React, { Component } from 'react';

class Forms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ""
		}
	}

	handleChange = (e) => {
		this.setState({value: e.target.value}, () => {
			console.log("Here", this.state.value)
		});
	}

	handleSubmit = (e) => {
		alert("A name was submitted: " + this.state.value);
		e.preventDefault();
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					{/* Some basic accessibility */}
					<label htmlFor="submitForm">
						Name:
						<input id="submitForm" type="text"
						value={this.state.value}
						onChange={this.handleChange}
						/>
					</label>
					<input type="submit" value="Submit"/>
				</form>
			</div>
		);
	}
}

export default Forms;

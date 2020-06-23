import React, { Component } from 'react';
import ThemeContext from './ThemeContext';

class MyButton extends Component {
	constructor(props) {
		super(props);
	}

	buttonHandler = () => {
		console.log("Search button pressed", this.context);
	}

	static contextType = ThemeContext;

	render() {
		return (
			<div>
				<input type="text" name="search" aria-label="Search" />
				<button onClick={this.buttonHandler} type="submit">Search</button>
			</div>
		);
	}
}

export default MyButton;

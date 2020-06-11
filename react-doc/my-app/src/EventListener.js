import React, { Component } from 'react';

class EventListener extends Component {
	constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

		// This binding is necessary to make `this` work in the callback    
		this.handleClick = this.handleClick.bind(this);  
	}

	handleClick() {
		// Here we are making sure we are using the previous state of isToggleOn
		// "React may batch multiple setState() calls into a single update for performance.
		// Because this.props and this.state may be updated asynchronously, you should not
		// rely on their values for calculating the next state.
		// That function will receive the previous state as the first argument, 
		// and the props at the time the update is applied"

		this.setState(state => ({isToggleOn: !state.isToggleOn }));  
	}

	// Here 'this' is bound in the onClick callback
	/* 
	The problem with this syntax is that a different callback is created each time 
	the LoggingButton renders. In most cases, this is fine. However, if this 
	callback is passed as a prop to lower components, those components might do an extra 
	re-rendering. We generally recommend binding in the constructor or using the class 
	sfields syntax, to avoid this sort of performance problem.
	*/
	testThis() {
		console.log("ThIsSSS:", this) ;
	}

	testArgs(id) {
		console.log("ID: ", id);
	}

  render() {
    return (
			<>
				<button onClick={this.handleClick}>        
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
				<button onClick={() => this.testThis()}>
					this
				</button>
				<button onClick={this.testArgs.bind(this, "WORDS")}>
					Args
				</button>
			</>
    );
  }
}

export default EventListener;

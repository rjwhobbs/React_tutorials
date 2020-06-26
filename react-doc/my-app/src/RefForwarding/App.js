import React, { Component } from 'react';

const FancyButton = React.forwardRef((props, ref) => { 
	return (  
	// Once again, the correct way to pass args.
	<button onClick={props.handler.bind(this, ref)} ref={ref}>    
		{props.children}
  </button>
)});

class App extends Component {
	
	// We are forwarding the ref we created here and sending it to the "fancy button"
	ref = React.createRef();

	// This fucntion is stupid, "otherClick" would be what you want
	onClick = (test) => {
		this.otherClick();
		console.log("MMMMMMM", test);
	}

	otherClick = () => {
		console.log("OOOOOO", this.ref);
	}
	render() {
		return (
			<div>
				<FancyButton handler={this.onClick} ref={this.ref}>
					button
				</FancyButton>	
			</div>
		);
	}
}

export default App;

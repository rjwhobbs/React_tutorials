import React, { Component } from 'react';

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
		return <p>The water would boil.</p>;  
	}
	return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
		super(props);
		
    this.state = {
			temperature: ''
		};  
			
		this.handleChange = this.handleChange.bind(this);
	}

  handleChange(e) {
		this.setState({temperature: e.target.value});  
	}

  render() {
		const temperature = this.state.temperature;    
		return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />        
				<BoilingVerdict celsius={parseFloat(temperature)} />      
			</fieldset>
    );
  }
}

class LiftingStateUp extends Component {
	render() {
		return (
			<div>
				<Calculator />
			</div>
		);
	}
}

export default LiftingStateUp;

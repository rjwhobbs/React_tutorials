import React, { Component } from 'react';

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if (this.props.color !== nextProps.color) {
    //   return true;
    // }
    // if (this.state.count !== nextState.count) {
    //   return true;
    // }
		console.log("XXXXXXXX", nextProps, nextState);
		return false;
		// return true;
  }

  render() {
		console.log("CXCXCXCXCXCX"); // This doesnt get executed if sCU returns false
    return (
      <button
        color={this.props.color}
        onClick={() => this.setState(state => ({count: state.count + 1}))}>
        Count: {this.state.count}
      </button>
    );
  }
}

class SCUPrac extends Component {
	render() {
		return (
			<div>
				<CounterButton color="red"/>
			</div>
		);
	}
}

export default SCUPrac;

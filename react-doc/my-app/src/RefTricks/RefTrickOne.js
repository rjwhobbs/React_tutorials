import React, { Component } from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
		this.textInput = React.createRef();    
		this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
		// Note: we're accessing "current" to get the DOM node
		console.log("Inside the focus text input member");
		this.textInput.current.focus();  
	}

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />        
				<input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}/>
      </div>
    );
  }
}

class AutoFocusTextInput extends React.Component {
  constructor(props) {
    super(props);
		this.textInput = React.createRef();  
	}

  componentDidMount() {
		this.textInput.current.focusTextInput();  
	}

  render() {
    return (
			<CustomTextInput ref={this.textInput} />    
		);
  }
}

class RefTrickOne extends Component {
	render() {
		return (
			<div>
				<AutoFocusTextInput />
			</div>
		);
	}
}

export default RefTrickOne;

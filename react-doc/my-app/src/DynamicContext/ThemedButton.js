import React from 'react';
import {ThemeContext} from './ThemeContext';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
		let theme = this.context;
		console.log("XXXXX", props);    
		return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}>
			</button>
    );
  }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;


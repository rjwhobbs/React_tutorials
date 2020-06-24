import React, { Component } from 'react';
import {ThemeContext, themes} from './ThemeContext';
import ThemeTogglerButton from './ThemedToggleButton';

class App extends React.Component {
  constructor(props) {
    super(props);

		// State also contains the updater function so it will    
		// be passed down into the context provider    
		this.state = {
      theme: themes.light,
			toggleTheme: this.toggleTheme,    
		};
	}

  render() {
		// The entire state is passed to the provider    
		return (
      <ThemeContext.Provider value={this.state}>        
				<Content />
      </ThemeContext.Provider>
    );
	}
	
	toggleTheme = () => {
		this.setState(state => ({
			theme:
				state.theme === themes.dark
					? themes.light
					: themes.dark,
		}));
	};
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import Toolbar from './Toolbar';
import ThemeContext from './ThemeContext';

class App extends Component {
	render() {
		return (
			<div>
				<ThemeContext.Provider value={'dark'}>
					<Toolbar />
				</ThemeContext.Provider>
			</div>
		);
	}
}

export default App;

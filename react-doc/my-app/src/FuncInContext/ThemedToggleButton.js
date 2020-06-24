import React from 'react';
import {ThemeContext} from './ThemeContext';

function ThemeTogglerButton() {
	// The Theme Toggler Button receives not only the theme  
	// but also a toggleTheme function from the context  
	return (
    <ThemeContext.Consumer>
			{/* This is done by wrapping our elements in an 
			instance of <ThemeContext.Consumer> and within 
			that (where the children go), providing a function 
			which returns the elements. This uses the "render 
			prop" pattern where we provide a regular function 
			as a child that returns some JSX to render. 
			https://www.freecodecamp.org/news/react-context-in-5-minutes/*/}
      {({theme, toggleTheme}) => (        
					<button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;


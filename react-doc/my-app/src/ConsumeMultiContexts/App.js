import React, { Component } from 'react';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

class App extends React.Component {
	constructor(props) {
		super(props);

		/*
		Because context uses reference identity to determine when to 
		re-render, there are some gotchas that could trigger unintentional 
		renders in consumers when a provider’s parent re-renders. 
		To get around this, lift the value into the parent’s state:
		*/
		this.state = {
			theme: 'Light',
			signedInUser: 'Guest'
		}
	}

	// static contextType = ThemeContext;

  render() {
		const {signedInUser, theme} = this.state;
		console.log(ThemeContext._currentValue);

    // App component that provides initial context values
    return (
			<>
				<ThemeContext.Provider value={theme} >        
					<UserContext.Provider value={signedInUser} >          
						<Layout />
					</UserContext.Provider>      
				</ThemeContext.Provider>
			</>    
		);
  }
}

function Layout() {
  return (
    <div>
      {/* <Sidebar /> */}
      <Content />
    </div>
  );
}

// A component may consume multiple contexts
function Content() {
	// If there is no PROVIDER for this context above, the value argument 
	// will be equal to the defaultValue that was passed to createContext().
  return (
	/* This is done by wrapping our elements in an 
	instance of <ThemeContext.Consumer> and within 
	that (where the children go), providing a function 
	which returns the elements. This uses the "render 
	prop" pattern where we provide a regular function 
	as a child that returns some JSX to render. 
	https://www.freecodecamp.org/news/react-context-in-5-minutes/*/
		<ThemeContext.Consumer>      
			{theme => (        
				<UserContext.Consumer>          
					{user => (            
						<ProfilePage 
							user={user} 
							theme={theme} />          
					)}        
				</UserContext.Consumer>      
			)}    
		</ThemeContext.Consumer>  
	);
}

function ProfilePage(props) {
	return (
		<div>
			The theme is {props.theme} <br/>
			User is {props.user}
		</div>
	)
}

export default App;


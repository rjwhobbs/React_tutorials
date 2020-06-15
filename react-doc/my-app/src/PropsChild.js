import React, { Component } from 'react';

function Parent(props) {
	const style = {
		color: "blue"
	}

	return (
		<div style={style}>
			{props.children}
		</div>
	)
}

class PropsChild extends Component {
	render() {
		return (
			<div>
				<Parent>
					<h1>This is a child prop</h1>
				</Parent>
			</div>
		);
	}
}

export default PropsChild;

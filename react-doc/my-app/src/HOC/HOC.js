import React, { Component } from 'react';

function BasicOne(props) {
	return (
		<div>
			{props.word}
		</div>
	)
}

function BasicTwo(Comp) {
	return (
		<Comp word={"pizza"} />
	)
}

// But first the basics
class HOC extends Component {
	render() {
		return (
			<div>
				{BasicTwo(BasicOne)}
			</div>
		);
	}
}

export default HOC;

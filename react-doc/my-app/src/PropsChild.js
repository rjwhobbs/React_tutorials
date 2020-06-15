import React, { Component } from 'react';

function Parent(props) {
	const style = {
		color: "blue"
	}

	console.log(props);

	return (
		<div style={style}>
			{props.children}
		</div>
	)
}

function ParentTwo(props) {
	return(
		<div>
			{props.one}
			{props.two}
		</div>
	)
}

function CompOne() {
	return(
		<div>
			I'm comp one
		</div>
	)
}

function CompTwo() {
	return(
		<div>
			I'm comp Two
		</div>
	)
}

class PropsChild extends Component {
	render() {
		return (
			<div>
				<Parent>
					<h1>This is a child prop</h1>
					<p>And this a kdfajnkjg</p>
					<ParentTwo 
						one={<CompOne/>}
						two={<CompTwo/>}
					/>
				</Parent>
			</div>
		);
	}
}

export default PropsChild;

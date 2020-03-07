import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { render } from '@testing-library/react';

function Circle(props: any) {
	let style = {
	backgroundColor: 'white',
	border: '1px solid red',
	borderRaduis: '100%',
	paddingTop: '98%'
	}

	return (
		<div style={style}></div>
	)
}

function Cell(props: any) {
	let style = {
		height: 50,
		width: 50,
		border: '1px solid green',
		backgroundColor: 'blue',
	}

	return (
		<div style={style}>
			<Circle />
		</div>
	)
}

function Row(props: any){
	let style = {
		display: 'flex',
	}

	let cells: any[] = [];
	let i: number = 0;
	while(i < 7) {
		cells.push(<Cell />);
		i++;
	}

	return (
		<div style={style}>
			{cells}
		</div>
	)
}

function Board() {

	let rows: any[] = [];
	let i: number = 0;
	
	while(i < 5) {
		rows.push(<Row />);
		i++;
	}

	return (
		<div>
			{rows}
		</div>
	)
}


export default class App extends React.Component{

	render() {
		return (
			<Board />
		)
	}
}

import React from 'react';
import logo from './logo.svg';
// import Button from './Components/Button';
// import Details from './Components/Details';
import './App.css';
import { number } from 'prop-types';



interface InputDetails {
	details: string;
}

interface InputButton {
	name: string;
	active: number;
	id: number;
	onClickHandler: any;
}

interface AppInterface {
	activeArray: number[]; 
	details: string;
}

class Details extends React.Component<InputDetails>{
	render() {
		return (
			<h1>{this.props.details}</h1>
		)
	}
}

class Button extends React.Component<InputButton>{
	render() {
			return (
				<button
					style={{color: this.props.active ? 'red' : 'green'}}
					onClick={() => {
						this.props.onClickHandler(
							this.props.id, 
							this.props.name
						)}}>
				{this.props.name}</button>
			)
	}
}

export default class App extends React.Component<{}, AppInterface>{
	constructor(props:any){
		super(props);
		this.state = {activeArray: [0,0,0,0], details:""};
    	this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(id: number, details: string){
		let arr: number[] = [0,0,0,0];
		arr[id] = 1;
		console.log(arr);
		this.setState({activeArray: arr, details: details});
	}

	render(){
		return (
			<div>
				<Button
					id={0}
					active={this.state.activeArray[0]}
					onClickHandler={this.clickHandler}
					name="bob"
				/>
				<Button
					id={1}
					active={this.state.activeArray[1]}
					onClickHandler={this.clickHandler}
					name="joe"
				/>
				<Button
					id={2}
					active={this.state.activeArray[2]}
					onClickHandler={this.clickHandler}
					name="tree"
				/>
				<Button
					id={3}
					active={this.state.activeArray[3]}
					onClickHandler={this.clickHandler}
					name="four"
				/>
				<Details details={this.state.details} />
			</div>
		)
	}
}

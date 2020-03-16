import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { render } from '@testing-library/react';
import { tsCallSignatureDeclaration } from '@babel/types';

interface AppInterface {
    player: boolean;
    cells: any;
    winner: number;
}

function Circle(props: any) {
  let color: string = "white";

  if (props.cell === 1) {
    color = "red";
  } else if (props.cell === 2) {
    color = "black";
  }

	let style = {
	backgroundColor: color,
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

  console.log("LLLLL", props.cell);

	return (
		<div style={style} onClick={() => props.handleClick(props.row, props.col)}>
			<Circle cell={props.cell}/>
		</div>
	)
}

function Row(props: any){
	let style = {
		display: 'flex',
	}

	let cellsComp: any[] = [];
	let i: number = 0;
	while(i < 7) {
    cellsComp.push(<Cell
                    key={i}
                    row={props.row}
                    col={i}
                    cell={props.cell[i]}
                    handleClick={props.handleClick}
                  />);
		i++;
	}

	return (
		<div style={style}>
			{cellsComp}
		</div>
	)
}

function Board(props: any) {

	let rows: any[] = [];
  let i: number = 0;

	while(i < 5) {
    rows.push(<Row 
                key={i} 
                row={i}
                cell={props.cells[i]}
                handleClick={props.handleClick}
                />);
		i++;
	}

	return (
		<div>
			{rows}
		</div>
	)
}

export default class App extends React.Component<{}, AppInterface>{
    constructor(props: any) {
        super(props);

        let cells: any[] = []; // let cells = []
        let i: number = 0;
        while(i < 6) {
            cells.push(new Array(7).fill(0));
            i++;
        }

        this.state = {
            player: false,
            cells: cells,
            winner: 0 
        }
        console.log("hghghggh", this.state.cells);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(row: number, col: number) {
        console.log("Clicked", row, col);
    }

	render() {
		return (
            <div>
                <h1>Blacks turn</h1>
                <Board 
                    cells={this.state.cells}
                    handleClick={this.handleClick}
                />
                <button>Restart</button>
            </div>
		)
	}
}

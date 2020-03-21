import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { render } from '@testing-library/react';
import { tsCallSignatureDeclaration } from '@babel/types';
// import checker from "./lib/checker";

interface AppStates {
    player: boolean;
    cells: any;
    winner: number;
}

function Circle(props: any) {
  let color: string = "white";

  if (props.cell === 2) {
    color = "red";
  } else if (props.cell === 1) {
    color = "black";
  }

	let style = {
    backgroundColor: color,
    border: '1px solid black',
    borderRadius: '100%',
    paddingTop: '97%'
	}

	return (
		<div style={style}></div>
	)
}

function Cell(props: any) {
	let style = {
		height: '50px',
		width: '50px',
		border: '1px solid green',
		backgroundColor: 'lightblue',
	}

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
    cellsComp.push(
      <Cell
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
  let i: number = 5;

	while(i >= 0) {
    rows.push(<Row 
                key={i} 
                row={i}
                cell={props.cells[i]}
                handleClick={props.handleClick}
                />);
		i--;
	}

	return (
		<div>
			{rows}
		</div>
	)
}

export default class App extends React.Component<{}, AppStates>{
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
        console.log(cells);
        this.handleClick = this.handleClick.bind(this);
    }

    horzCheck(row: number, col: number) {
      let temp: number = this.state.cells[row][col];
      let check: number = 0;
      let i: number = 0;
      let j: number = 0;

      while (i < 4 && col < 4 && row < 6) {
        // console.log("Horz", j++);
        if (temp === this.state.cells[row][col + i] && temp !== 0) {
          check++;
          i++;
        } else {
          col++;
          temp = this.state.cells[row][col];
          check = 0;
          i = 0;
        }
      }
      return check;
    }

    vertCheck(row: number, col: number){
      let temp: number = this.state.cells[row][col];
      let check: number = 0;
      let i: number = 0;

      while (i < 4 && col < 7 && row < 3) {
        if (temp === this.state.cells[row + i][col] && temp !== 0) {
          check++;
          i++;
        } else {
          row++;
          temp = this.state.cells[row][col];
          check = 0;
          i = 0;
        }
      }
      return check;
    }

    diagRightChecker() {
      let row: number = 0; 
      let col: number = 0;
      let temp: number = this.state.cells[row][col];
      let check: number = 0;
      let i: number = 0;
      let j: number = 0;

      while (i < 4 && col < 4 && row < 3) {
        console.log("DR", j++);
        if (temp === this.state.cells[row + i][col + i] && temp !== 0){
          console.log("here");
          check++;
          i++;
        } else {
          row++;
          temp = this.state.cells[row][col];
          check = 0;
          i = 0;
        }
        if (row === 3 && col !== 4) {
          row = 0;
          col++;
          temp = this.state.cells[row][col];
        }
      }
      return check;
    }

    diagLeftChecker() {
      let row: number = 0; 
      let col: number = 6;
      let temp: number = this.state.cells[row][col];
      let check: number = 0;
      let i: number = 0;

      while (i < 4 && col > 2 && row < 3) {
        if (temp === this.state.cells[row + i][col - i] && temp !== 0){
          check++;
          i++;
        } else {
          row++;
          temp = this.state.cells[row][col];
          check = 0;
          i = 0;
        }
        if (row === 3 && col !== 2) {
          row = 0;
          col--;
          temp = this.state.cells[row][col];
        }
      }
      return check;
    }

    checker() {
      let i: number = 0;
      while (i < 6){
        if (this.horzCheck(i, 0) === 4) {
          return 1;
        }
        i++;
      }
      i = 0;
      while (i < 7) {
        if (this.vertCheck(0, i) === 4) {
          return 1;
        }
        i++;
      }
      if (this.diagRightChecker() === 4) {
        console.log("DR");
        return 1;
      }
      if (this.diagLeftChecker() === 4) {
        console.log("DL");
        return 1;
      }
      return 0;
    }

    findAvailRow(col: number) {
      let i: number = 0;
      while (i < 6) {
        if (this.state.cells[i][col] === 0) {
          return i;
        }
        i++;
      }
      return -1;
    }

    handleClick(row: number, col: number) {
        let temp: any[] = [];
        let i: number = 0;

        while (i < 6) {
          temp.push(this.state.cells[i].slice());
          i++;
        }
        let newRow: number = this.findAvailRow(col);
        if (newRow !== -1) {
          temp[newRow][col] = this.state.player ? 1 : 2;
          this.setState({cells: temp, player: !this.state.player}, () => {
            if (this.checker() === 1) {
              console.log("!!!!!!winner!!!!!!!");
            }
          });
        }
    }

	render() {
		return (
            <div>
                <h1>{this.state.player ? "Blacks turn" : "Reds Turn"}</h1>
                <Board 
                    cells={this.state.cells}
                    handleClick={this.handleClick}
                />
                {}
                <button>Restart</button>
            </div>
		)
	}
}

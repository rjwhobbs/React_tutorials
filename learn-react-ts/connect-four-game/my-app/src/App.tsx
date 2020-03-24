import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { render } from '@testing-library/react';
import { tsCallSignatureDeclaration } from '@babel/types';
// import horzCheck from "./lib/checkerLib";
import helper from "./lib/checkerLib";
import { any } from 'prop-types';

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
    color = "blue";
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
        this.handleClick = this.handleClick.bind(this);
    }

    checker(row: number, col: number, cells: any) {
      if (helper.horzCheck(row, 0, cells) === 4) {
        return 1;
      }
      if (helper.vertCheck(row, col, cells) === 4) {
        return 1;
      }
      if (helper.diagRightChecker(row, col, cells) === 4) {
        return 1;
      }
      if (helper.diagLeftChecker(row, col, cells) === 4) {
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
      if (this.state.winner > 0) {
        return ;
      }
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
            if (this.checker(newRow, col, this.state.cells) === 1) {
              this.setState({winner: this.state.player ? 2 : 1}, () => {
                
              });
            }
          });
        }
    }

  restart() {
    let cells: any[] = [];
    let i: number = 0;
    while (i < 6 ) {
      cells.push(new Array(7).fill(0));
      i++;
    }
    this.setState({player: false, cells: cells, winner: 0});
  }

	render() {
    let Header: any;
    if (this.state.winner > 0) {
      Header = <h1>{this.state.winner === 1 ? "Black Wins!!!" : "Red Wins!!!"}</h1>
    } else {
      Header = <h1>{this.state.player ? "Blacks turn" : "Reds Turn"}</h1>;
    }
		return (
      <div>
        {Header}
          <Board 
              cells={this.state.cells}
              handleClick={this.handleClick}
          />
        <button onClick={() => this.restart()}>Restart</button>
      </div>
		)
	}
}

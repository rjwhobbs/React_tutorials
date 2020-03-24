// import React from 'react';

const helper = {

	horzCheck: function(row: number, col: number, cells: any) {
		let temp: number = cells[row][col];
		let check: number = 0;
		let i: number = 0;
	
		while (i < 4 && col < 4) {
		  if (temp === cells[row][col + i] && temp !== 0) {
			check++;
			i++;
		  } else {
			col++;
			temp = cells[row][col];
			check = 0;
			i = 0;
		  }
		}
		return check;
	},

	vertCheck: function(row: number, col: number, cells: any){
		let temp: number = cells[row][col];
		let check: number = 0;
		let i: number = 0;
	
		while (i < 4 && col < 7 && row > 2) {
		  if (temp === cells[row - i][col] && temp !== 0) {
			check++;
		  }
		  i++;
		}
		return check;
	},

	diagRightChecker: function(row: number, col: number, cells: any) {
		let tRow: number = row; 
		let tCol: number = col;
		let temp: number = cells[row][col];
		let check: number = 0;
		let i: number = 0;
  
		while (tRow > 0 && tCol > 0) {
		  tRow--;
		  tCol--;
		}
  
		while (i < 4 && tRow < 3 && tCol < 7) {
		  if (temp === cells[tRow + i][tCol + i] && temp !== 0){
			check++;
			i++;
		  } else {
			tRow++;
			tCol++;
			check = 0;
			i = 0;
		  }
		}
		return check;
	},

  diagLeftChecker: function(row: number, col: number, cells: any) {
    let tRow: number = row; 
    let tCol: number = col;
    let temp: number = cells[row][col];
    let check: number = 0;
    let i: number = 0;

    while (tRow > 0 && tCol < 6) {
      tRow--;
      tCol++;
    }

    while (i < 4 && tCol > 0 && tRow < 3) {
      if (temp === cells[tRow + i][tCol - i] && temp !== 0){
        check++;
        i++;
      } else {
        tRow++;
        tCol--;
        check = 0;
        i = 0;
      }
    }
    return check;
  }
  
}

export default helper;
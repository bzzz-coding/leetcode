/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

*/

// parameter: nested arrays of strings "3", "5", "."
// return: bool
// check for: 1. each subarray; 2. same index of all subarrays; 3. %3 0, 1, 2 two dimensional
// how to check? empty obj and check if already exists?


function isValidSudoku(board) {
  // checking for each row/subarray
  for (let j = 0; j < 9; j++) { // vertical
    let row = {};
    for (let i = 0; i < 9; i++) { // horizontal
      let value = board[j][i];
      if (value !==  '.') {
        if (row[value] === true) {
          return false;
        } else {
          row[value] = true;
        }
      }
    }
  }

  // check for columns/same index in each subarray
  for (let i = 0; i < 9; i++) { // horizontal
    let column = {};
    for (let j = 0; j < 9; j++) { // vertical
      let value = board[j][i];
      if (value !==  '.') {
        if (column[value] === true) {
          return false;
        } else {
          column[value] = true;
        }
      }
    }
  }

  // check 9 smaller squares 
  
  for (let col = 0; col < 9; col += 3) {
    for (let row = 0; row < 9; row += 3) {
      // 00, 03, 06
      let subBox = {};
      for (let j = col; j < col + 3; j++) {
        for (let i = row; i < row + 3; i++) {
          let value = board[j][i];
          if (value !==  '.') {
            if (subBox[value] === true) {
              return false;
            } else {
              subBox[value] = true;
            }
          }
        }
      }
    }
  }
  return true;
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]])) 
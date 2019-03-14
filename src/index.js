
function validColl(matrix, row, choise) {
  for (let i = 0; i < 9;i ++) {
    if (choise === matrix[i][row]) {
      return false;
    }
  }

  return true;
}


function validRow(matrix, col, choise) {
  for (let i = 0; i < 9;i++) {
    if (choise === matrix[col][i]) {
      return false;
    }
  }

  return true;
}

function validSquare(matrix, col, row, choise) {
  let targetCol = Math.floor(col / 3) * 3;
  let targetRow = Math.floor(row / 3) * 3;

  for (let i = targetCol; i < targetCol + 3; i++) {
    for(let j = targetRow; j < targetRow + 3; j++) {
      if (choise === matrix[i][j]) {
        return false;
      }
    }
  }

  return true;
}


module.exports = function solveSudoku(matrix) {
  for (let coll = 0; coll < 9; coll++) {
    for (let row = 0; row < 9; row++) {
      if (matrix[coll][row] === 0) {
        for (let choise = 1; choise <= 9; choise++) {
          if (validColl(matrix, row, choise) && validRow(matrix, coll, choise) && validSquare(matrix, coll, row, choise)) {
            matrix[coll][row] = choise;
            if(solveSudoku(matrix)) {
              return matrix;
            }else{
              matrix[coll][row] = 0;
            }
          } 
        }
        return false;
      } 
    }
  }
return true;
  
}



const transpose = function(matrix) {
  let newArray = [];
  for (let i = 0;  i < matrix[0].length; i++){
    newArray.push([]);
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      newArray[c][r] = matrix[r][c];
    }
  }
  return newArray;
};

module.exports = transpose
/*
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
        process.stdout.write('\n')
      }
};
    
    printMatrix(transpose([
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));

*/
/* visual thinking
matrix[0][0] = matrix[0][0]
matrix[0][1] = matrix[1][0]
matrix[0][2] = matrix[2][0]
matrix[0][3] = matrix[3][0]
*/
//return matrix.map(function(r) {return r[c];});
//let newMatrix = matrix.map(newArray => newArray.map(element => element *2));
//console.log('before: ', matrix);
//console.log('after: ', newMatrix);

// Do not edit this function.

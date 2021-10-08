function getSumNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}

function getSumEvenNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumMultiplesOfThreeInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 3 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumOddNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
function getSumPositiveNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

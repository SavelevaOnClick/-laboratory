function getMeanValueOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

function getMeanOfTheEvenNumbersOfArray(array) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      counter++;
    }
  }
  return sum / counter;
}
function getMeanOfTheOddNumbersOfArray(array) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
      counter++;
    }
  }
  return sum / counter;
}

function getMeanValueOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      counter++;
      sum += matrix[i][j];
    }
  }
  return sum / counter;
}

function getMeanOfTheEvenNumbersOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return sum / counter;
}

function getMeanOfTheOddNumbersOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return sum / counter;
}

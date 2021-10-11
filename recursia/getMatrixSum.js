function getSumEvenNumbersInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 === 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumEvenNumbersInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumEvenNumbersInMatrix(matrix, index1, index2);
  }

  return sum;
}

function getSumNumbersInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;
  sum = matrix[index1][index2];
  if (++index2 < matrix[index1].length) {
    sum += getSumNumbersInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumNumbersInMatrix(matrix, index1, index2);
  }
  return sum;
}

function getSumMultiplesOfThreeInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 3 === 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumMultiplesOfThreeInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumMultiplesOfThreeIn(matrix, index1, index2);
  }

  return sum;
}

function getSumOddNumbersInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 !== 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumOddNumbersInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumOddNumbersInMatrix(matrix, index1, index2);
  }

  return sum;
}

function getSumPositiveNumbersInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] > 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumPositiveNumbersInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumPositiveNumbersInMatrix(matrix, index1, index2);
  }

  return sum;
}

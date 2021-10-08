function getSumEvenNumbersInMatrixWithRecursia(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 === 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumEvenNumbersInMatrixWithRecursia(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumEvenNumbersInMatrixWithRecursia(matrix, index1, index2);
  }

  return sum;
}

function getSumNumbersInMatrixWithRecursia(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;
  sum = matrix[index1][index2];
  if (++index2 < matrix[index1].length) {
    sum += getSumNumbersInMatrixWithRecursia(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumNumbersInMatrixWithRecursia(matrix, index1, index2);
  }
  return sum;
}

function getSumMultiplesOfThreeInMatrixWithRecursia(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 3 === 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumMultiplesOfThreeInMatrixWithRecursia(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumMultiplesOfThreeInMatrixWithRecursia(matrix, index1, index2);
  }

  return sum;
}

function getSumOddNumbersInMatrixWithRecursia(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 !== 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumOddNumbersInMatrixWithRecursia(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumOddNumbersInMatrixWithRecursia(matrix, index1, index2);
  }

  return sum;
}

function getSumPositiveNumbersInMatrixWithRecursia(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] > 0) {
    sum = matrix[index1][index2];
  }

  if (++index2 < matrix[index1].length) {
    sum += getSumPositiveNumbersInMatrixWithRecursia(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getSumPositiveNumbersInMatrixWithRecursia(matrix, index1, index2);
  }

  return sum;
}

function getMeanValueInMatrix(matrix, index1, index2) {
  let sum = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  sum = matrix[index1][index2];

  if (++index2 < matrix[index1].length) {
    sum += getMeanValueInMatrix(matrix, index1, index2);
  } else if (++index1 < matrix.length) {
    index2 = 0;
    sum += getMeanValueInMatrix(matrix, index1, index2);
  }

  return index1 === 0 && index2 === 1
    ? sum / (matrix.length * matrix[index1].length)
    : sum;
}

function getMeanValueEvenNumbersInMatrix(matrix, index1, index2, evenCounter) {
  let sum = 0;
  evenCounter = evenCounter || 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 === 0) {
    sum = matrix[index1][index2];
    evenCounter++;
  }

  if (++index2 < matrix[index1].length) {
    let result = getMeanValueEvenNumbersInMatrix(
      matrix,
      index1,
      index2,
      evenCounter
    );
    sum += result.sum;
    evenCounter = result.evenCounter;
  } else if (++index1 < matrix.length) {
    index2 = 0;
    let result = getMeanValueEvenNumbersInMatrix(
      matrix,
      index1,
      index2,
      evenCounter
    );
    sum += result.sum;
    evenCounter = result.evenCounter;
  }
  return index1 === 0 && index2 === 1
    ? sum / evenCounter
    : { sum, evenCounter };
}

function getMeanValueOddNumbersInMatrix(matrix, index1, index2, oddCounter) {
  let sum = 0;
  oddCounter = oddCounter || 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 !== 0) {
    sum = matrix[index1][index2];
    oddCounter++;
  }

  if (++index2 < matrix[index1].length) {
    let result = getMeanValueOddNumbersInMatrix(
      matrix,
      index1,
      index2,
      oddCounter
    );
    sum += result.sum;
    oddCounter = result.oddCounter;
  } else if (++index1 < matrix.length) {
    index2 = 0;
    let result = getMeanValueOddNumbersInMatrix(
      matrix,
      index1,
      index2,
      oddCounter
    );
    sum += result.sum;
    oddCounter = result.oddCounter;
  }
  return index1 === 0 && index2 === 1 ? sum / oddCounter : { sum, oddCounter };
}

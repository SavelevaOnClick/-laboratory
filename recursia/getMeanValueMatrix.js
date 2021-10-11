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

function getMeanValueEvenNumbersInMatrix(
  matrix,
  index1,
  index2,
  positiveCounter
) {
  let sum = 0;
  positiveCounter = positiveCounter || 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 === 0) {
    sum = matrix[index1][index2];
    positiveCounter++;
  }

  if (++index2 < matrix[index1].length) {
    let result = getMeanValueEvenNumbersInMatrix(
      matrix,
      index1,
      index2,
      positiveCounter
    );
    sum += result.sum;
    positiveCounter = result.positiveCounter;
  } else if (++index1 < matrix.length) {
    index2 = 0;
    let result = getMeanValueEvenNumbersInMatrix(
      matrix,
      index1,
      index2,
      positiveCounter
    );
    sum += result.sum;
    positiveCounter = result.positiveCounter;
  }
  return index1 === 0 && index2 === 1
    ? sum / positiveCounter
    : { sum, positiveCounter };
}

function getMeanValueOddNumbersInMatrix(
  matrix,
  index1,
  index2,
  negativeCounter
) {
  let sum = 0;
  negativeCounter = negativeCounter || 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] % 2 !== 0) {
    sum = matrix[index1][index2];
    negativeCounter++;
  }

  if (++index2 < matrix[index1].length) {
    let result = getMeanValueOddNumbersInMatrix(
      matrix,
      index1,
      index2,
      negativeCounter
    );
    sum += result.sum;
    negativeCounter = result.negativeCounter;
  } else if (++index1 < matrix.length) {
    index2 = 0;
    let result = getMeanValueOddNumbersInMatrix(
      matrix,
      index1,
      index2,
      negativeCounter
    );
    sum += result.sum;
    negativeCounter = result.negativeCounter;
  }
  return index1 === 0 && index2 === 1
    ? sum / negativeCounter
    : { sum, negativeCounter };
}

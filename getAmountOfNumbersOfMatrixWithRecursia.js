function getAmountZeroElementsInMatrixWithRecursia(matrix, index1, index2) {
  let counter = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] === 0) {
    counter++;
  }
  if (++index2 < matrix[index1].length) {
    counter += getAmountZeroElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  } else if (++index1 < matrix.length) {
    index2 = 0;
    counter += getAmountZeroElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  }

  return counter;
}

function getAmountNegativeElementsInMatrixWithRecursia(matrix, index1, index2) {
  let counter = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] < 0) {
    counter++;
  }
  if (++index2 < matrix[index1].length) {
    counter += getAmountNegativeElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  } else if (++index1 < matrix.length) {
    index2 = 0;
    counter += getAmountNegativeElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  }

  return counter;
}

function getAmountPositiveElementsInMatrixWithRecursia(matrix, index1, index2) {
  let counter = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (matrix[index1][index2] > 0) {
    counter++;
  }

  if (++index2 < matrix[index1].length) {
    counter += getAmountPositiveElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  } else if (++index1 < matrix.length) {
    index2 = 0;
    counter += getAmountPositiveElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  }

  return counter;
}

function getAmountPrimeElementsInMatrixWithRecursia(matrix, index1, index2) {
  let counter = 0;
  index1 = index1 || 0;
  index2 = index2 || 0;

  if (isPrime(matrix[index1][index2])) {
    counter++;
  }

  if (++index2 < matrix[index1].length) {
    counter += getAmountPrimeElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  } else if (++index1 < matrix.length) {
    index2 = 0;
    counter += getAmountPrimeElementsInMatrixWithRecursia(
      matrix,
      index1,
      index2
    );
  }

  return counter;
}

function isPrime(number, index) {
  if (number <= 1 || !number) {
    return false;
  }
  index = index || 2;
  let boolean;

  if (index < number) {
    boolean = number % index === 0;
  } else {
    boolean = false;
  }

  if (++index < number && !boolean) {
    boolean = !isPrime(number, index);
  }

  return !boolean;
}

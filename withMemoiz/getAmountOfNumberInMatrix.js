function creationOfMemorization() {
  let memo = {};
  return function getAmountZeroElementsInMatrix(matrix, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    let counter = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] === 0) {
      counter++;
    }

    if (++index2 < matrix[index1].length) {
      counter += getAmountZeroElementsInMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      counter += getAmountZeroElementsInMatrix(matrix, index1, index2);
    }

    memo[matrix] = counter;
    return counter;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getAmountNegativeElementsInMatrix(matrix, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    let counter = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] < 0) {
      counter++;
    }

    if (++index2 < matrix[index1].length) {
      counter += getAmountNegativeElementsInMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      counter += getAmountNegativeElementsInMatrix(matrix, index1, index2);
    }

    memo[matrix] = counter;
    return counter;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getAmountPositiveElementsInMatrix(matrix, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    let counter = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    if (matrix[index1][index2] > 0) {
      counter++;
    }

    if (++index2 < matrix[index1].length) {
      counter += getAmountPositiveElementsInMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      counter += getAmountPositiveElementsInMatrix(matrix, index1, index2);
    }

    memo[matrix] = counter;
    return counter;
  };
}

const isPrimeNumber = (function creationOfMemorization() {
  let memo = {};
  return function isPrime(number, index) {
    if (memo[number] !== undefined) {
      return memo[number];
    }

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
      boolean = !isPrimeNumber(number, index);
    }
    memo[number] = !boolean;
    return !boolean;
  };
})();

function creationOfMemorization() {
  let memo = {};
  return function getAmountPrimeElementsInMatrix(matrix, index1, index2) {
    if (memo[matrix] !== undefined) {
      return memo[matrix];
    }

    let counter = 0;
    index1 = index1 || 0;
    index2 = index2 || 0;

    isPrimeNumber(matrix[index1][index2]) && counter++;

    if (++index2 < matrix[index1].length) {
      counter += getAmountPrimeElementsInMatrix(matrix, index1, index2);
    } else if (++index1 < matrix.length) {
      index2 = 0;
      counter += getAmountPrimeElementsInMatrix(matrix, index1, index2);
    }

    memo[matrix] = counter;
    return counter;
  };
}

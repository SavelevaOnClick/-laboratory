function creationOfMemorization() {
  const memo = {};
  return function getSumAllNumber(array, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    index = index || 0;
    let sum = array[index];

    if (++index < array.length) {
      sum += getSumAllNumber(array, index);
    }
    memo[array] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getSumEvenNumber(array, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    index = index || 0;
    let sum = 0;

    if (array[index] % 2 === 0) {
      sum += array[index];
    }

    if (++index < array.length) {
      sum += getSumEvenNumber(array, index);
    }

    memo[array] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getSumOddNumber(array, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    index = index || 0;
    let sum = 0;

    if (array[index] % 2 !== 0) {
      sum += array[index];
    }

    if (++index < array.length) {
      sum += getSumOddNumber(array, index);
    }

    memo[array] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getSumMultiplesOfThree(array, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    index = index || 0;
    let sum = 0;

    if (array[index] % 3 === 0) {
      sum += array[index];
    }

    if (++index < array.length) {
      sum += getSumMultiplesOfThree(array, index);
    }

    memo[array] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getSumPositiveNumbers(array, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    index = index || 0;
    let sum = 0;

    if (array[index] > 0) {
      sum += array[index];
    }

    if (++index < array.length) {
      sum += getSumPositiveNumbers(array, index);
    }

    memo[array] = sum;
    return sum;
  };
}

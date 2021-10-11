function creationOfMemorization() {
  let memo = {};
  return function getAmountNegativeElements(array, index) {
    if (memo[array] !== undefined) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
    let counter = 0;
    index = index || 0;
    array[index] < 0 && counter++;

    if (++index < array.length) {
      counter += getAmountNegativeElements(array, index);
    }
    memo[array] = counter;
    return counter;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getAmountZeroElements(array, index) {
    if (memo[array] !== undefined) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
    let counter = 0;
    index = index || 0;
    array[index] === 0 && counter++;

    if (++index < array.length) {
      counter += getAmountZeroElements(array, index);
    }
    memo[array] = counter;
    return counter;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getAmountPositiveElements(array, index) {
    if (memo[array] !== undefined) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
    let counter = 0;
    index = index || 0;
    array[index] > 0 && counter++;

    if (++index < array.length) {
      counter += getAmountPositiveElements(array, index);
    }
    memo[array] = counter;
    return counter;
  };
}

const isPrimeNumber = (function creationOfMemorization() {
  let memo = {};
  return function isPrime(number, index) {
    if (memo[number] !== undefined) {
      console.log("cash");
      return memo[number];
    }
    console.log("calc");
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
  return function getAmountPrimeElements(array, index) {
    if (memo[array] !== undefined) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
    let counter = 0;
    index = index || 0;
    isPrimeNumber(array[index]) && counter++;

    if (++index < array.length) {
      counter += getAmountPrimeElements(array, index);
    }
    memo[array] = counter;
    return counter;
  };
}

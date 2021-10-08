function getAmountNegativeElements(array) {
  let counter = 0;
  for (let item of array) {
    item < 0 && counter++;
  }
  return counter;
}

function getAmountZeroElements(array) {
  let counter = 0;
  for (let item of array) {
    item === 0 && counter++;
  }
  return counter;
}

function getAmountPositiveElements(array) {
  let counter = 0;
  for (let item of array) {
    item > 0 && counter++;
  }
  return counter;
}
function getAmountPrimeElements(array) {
  function isPrimeNumber(number) {
    if (number < 2 || !number) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  let counter = 0;
  for (let item of array) {
    isPrimeNumber(item) && counter++;
  }
  return counter;
}

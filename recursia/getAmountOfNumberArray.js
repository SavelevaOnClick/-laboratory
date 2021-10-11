function getAmountNegativeElements(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] < 0 && counter++;

  if (++index < array.length) {
    counter += getAmountNegativeElements(array, index);
  }

  return counter;
}

function getAmountZeroElements(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] === 0 && counter++;

  if (++index < array.length) {
    counter += getAmountZeroElements(array, index);
  }

  return counter;
}

function getAmountPositiveElements(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] > 0 && counter++;

  if (++index < array.length) {
    counter += getAmountPositiveElements(array, index);
  }

  return counter;
}

function getAmountPrimeElements(array, index) {
  let counter = 0;
  index = index || 0;
  isPrimeNumber(array[index]) && counter++;

  if (++index < array.length) {
    counter += getAmountPrimeElements(array, index);
  }
  return counter;
}

function isPrimeNumber(number, index) {
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

  return !boolean;
}

function getAmountNegativeElementsWithRecursia(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] < 0 && counter++;

  if (++index < array.length) {
    counter += getAmountNegativeElementsWithRecursia(array, index);
  }

  return counter;
}

function getAmountZeroElementsWithRecursia(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] === 0 && counter++;

  if (++index < array.length) {
    counter += getAmountZeroElementsWithRecursia(array, index);
  }

  return counter;
}

function getAmountPositiveElementsWithRecursia(array, index) {
  let counter = 0;
  index = index || 0;
  array[index] > 0 && counter++;

  if (++index < array.length) {
    counter += getAmountPositiveElementsWithRecursia(array, index);
  }

  return counter;
}

function getAmountPrimeElementsWithRecursia(array, index) {
  let counter = 0;
  index = index || 0;
  isPrimeNumber(array[index]) && counter++;

  if (++index < array.length) {
    counter += getAmountPrimeElementsWithRecursia(array, index);
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

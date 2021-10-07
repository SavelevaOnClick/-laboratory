function getSumEvenNumberWithRecursia(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 2 === 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumEvenNumberWithRecursia(arrayOfNumbers, index);
  }

  return sum;
}

function getSumOddNumberWithRecursia(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 2 !== 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumOddNumberWithRecursia(arrayOfNumbers, index);
  }

  return sum;
}

function getSumMultiplesOfThreeWithRecursia(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 3 === 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumMultiplesOfThreeWithRecursia(arrayOfNumbers, index);
  }

  return sum;
}

function getSumPositiveNumbersWithRecursia(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] > 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumPositiveNumbersWithRecursia(arrayOfNumbers, index);
  }

  return sum;
}

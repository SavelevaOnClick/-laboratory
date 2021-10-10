function getSumAllNumber(array, index) {
  index = index || 0;
  let sum = array[index];

  if (++index < array.length) {
    sum += getSumAllNumber(array, index);
  }

  return sum;
}

function getSumEvenNumber(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 2 === 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumEvenNumber(arrayOfNumbers, index);
  }

  return sum;
}

function getSumOddNumber(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 2 !== 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumOddNumber(arrayOfNumbers, index);
  }

  return sum;
}

function getSumMultiplesOfThree(arrayOfNumbers, index) {
  index = index || 0;
  let sum = 0;

  if (arrayOfNumbers[index] % 3 === 0) {
    sum += arrayOfNumbers[index];
  }

  if (++index < arrayOfNumbers.length) {
    sum += getSumMultiplesOfThree(arrayOfNumbers, index);
  }

  return sum;
}

function getSumPositiveNumbers(array, index) {
  index = index || 0;
  if (index > array.length) {
    return 0;
  }
  if (array[index] > 0) {
    return array[index] + getSumPositiveNumbers(array, ++index);
  }
  return getSumPositiveNumbers(array, ++index);
}

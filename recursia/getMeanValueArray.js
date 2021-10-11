function getMeanValueOfArray(array, index) {
  index = index || 0;
  let result = array[index];
  if (++index < array.length) {
    result += getMeanValueOfArray(array, index);

    if (index === 1) {
      result = result / array.length;
    }
  }
  return result;
}

function getMeanOfTheEvenNumbersOfArray(array, index, counter) {
  let sum = 0;
  counter = counter || 0;
  index = index || 0;

  if (array[index] % 2 === 0) {
    sum = array[index];
    counter++;
  }

  if (++index < array.length) {
    let result = getMeanOfTheEvenNumbersOfArray(array, index, counter);
    sum += result.sum;
    counter = result.counter;
  }
  return index === 1 ? sum / counter : { sum, counter };
}

function getMeanOfTheOddNumbersOfArray(array, index, counter) {
  let sum = 0;
  counter = counter || 0;
  index = index || 0;

  if (array[index] % 2 !== 0) {
    sum = array[index];
    counter++;
  }

  if (++index < array.length) {
    let result = getMeanOfTheOddNumbersOfArray(array, index, counter);
    sum += result.sum;
    counter = result.counter;
  }
  return index === 1 ? sum / counter : { sum, counter };
}

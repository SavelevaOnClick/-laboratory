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

function getMeanOfTheEvenNumbersOfArray(array, index, arrayOffEven) {
  let result = 0;
  arrayOffEven = arrayOffEven || [];
  index = index || 0;

  if (index < array.length) {
    if (array[index] % 2 === 0) {
      result = array[index];
      arrayOffEven.push(array[index]);
    }
    index++;
    result += getMeanOfTheEvenNumbersOfArray(array, index, arrayOffEven);
    if (index === 1) {
      result = result / arrayOffEven.length;
    }
  }
  return result;
}

function getMeanOfTheOddNumbersOfArray(array, index, arrayOffOdd) {
  let result = 0;
  arrayOffOdd = arrayOffOdd || [];
  index = index || 0;

  if (index < array.length) {
    if (array[index] % 2 !== 0) {
      result = array[index];
      arrayOffOdd.push(array[index]);
    }
    index++;
    result += getMeanOfTheOddNumbersOfArray(array, index, arrayOffOdd);
    if (index === 1) {
      result = result / arrayOffOdd.length;
    }
  }
  return result;
}

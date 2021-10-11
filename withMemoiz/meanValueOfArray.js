function creationOfMemorization() {
  let memo = {};
  return function getMeanValueOfArray(array, index) {
    if (memo[array]) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
    index = index || 0;
    let result = array[index];
    if (++index < array.length) {
      result += getMeanValueOfArray(array, index);

      if (index === 1) {
        result = result / array.length;
      }
    }
    memo[array] = result;
    return result;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getMeanOfTheEvenNumbersOfArray(array, index, counter) {
    if (memo[array]) {
      console.log("cash");
      return memo[array];
    }
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
    if (index === 1) {
      memo[array] = sum / counter;
    }
    return index === 1 ? sum / counter : { sum, counter };
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getMeanOfTheOddNumbersOfArray(array, index, counter) {
    if (memo[array]) {
      console.log("cash");
      return memo[array];
    }
    console.log("calc");
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
    if (index === 1) {
      memo[array] = sum / counter;
    }
    return index === 1 ? sum / counter : { sum, counter };
  };
}

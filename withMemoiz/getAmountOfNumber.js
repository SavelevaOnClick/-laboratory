const getArrayFromNumber = (function () {
  let memo = {};
  return function getArray(number, arrayOfNumber) {
    if (memo[number] !== undefined) {
      return memo[number];
    }

    let reducedByDecimalPlace = Math.floor(number / 10);
    let difference = number - reducedByDecimalPlace * 10;
    arrayOfNumber = arrayOfNumber || [];
    number = reducedByDecimalPlace;

    arrayOfNumber.unshift(difference);

    number > 0 && getArray(number, arrayOfNumber);
    memo[number] = arrayOfNumber;
    return arrayOfNumber;
  };
})();

const isElement = (function () {
  let memo = {};
  return function getBoolean(element, array, index) {
    if (memo[`${element}: ${array}`] !== undefined) {
      return memo[`${element}: ${array}`];
    }

    index = index || 0;
    let boolean = element === array[index] || false;
    if (++index < array.length && !boolean) {
      boolean = getBoolean(element, array, index);
    }
    memo[`${element}: ${array}`] = boolean;
    return boolean;
  };
})();

const sortingUniqueArray = (function () {
  let memo = {};
  return function sortingUnique(array, arrayOfUniqueValues, index) {
    if (memo[array] !== undefined) {
      return memo[array];
    }

    arrayOfUniqueValues = arrayOfUniqueValues || [];
    index = index || 0;

    if (!isElement(array[index], arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(array[index]);
    }

    ++index < array.length && sortingUnique(array, arrayOfUniqueValues, index);
    memo[array] = arrayOfUniqueValues;
    return arrayOfUniqueValues;
  };
})();

const getCounter = (function () {
  let memo = {};
  return function getCount(number, array, index, counter) {
    if (memo[`${array}: ${number}`] !== undefined) {
      return memo[`${array}: ${number}`];
    }

    index = index || 0;
    counter = counter || 0;
    number === array[index] && counter++;

    if (index++ < array.length) {
      counter = getCount(number, array, index, counter);
    }

    memo[`${array}: ${number}`] = counter;
    return counter;
  };
})();

function creationOfMemorization() {
  let memo = {};
  return function getAmountOfNumbers(
    number,
    resultObject,
    index,
    arrayNumber,
    arrayOfUniqueNumbers
  ) {
    if (memo[number] !== undefined) {
      return memo[number];
    }

    resultObject = resultObject || {};
    index = index || 0;
    arrayNumber = arrayNumber || getArrayFromNumber(number);

    arrayOfUniqueNumbers = sortingUniqueArray(arrayNumber);

    Object.assign(resultObject, {
      [arrayOfUniqueNumbers[index]]: getCounter(
        arrayOfUniqueNumbers[index],
        arrayNumber
      ),
    });

    ++index < arrayOfUniqueNumbers.length &&
      getAmountOfNumbers(
        number,
        resultObject,
        index,
        arrayNumber,
        arrayOfUniqueNumbers
      );

    memo[number] = resultObject;
    return resultObject;
  };
}

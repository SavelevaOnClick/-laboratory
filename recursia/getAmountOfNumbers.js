function getAmountOfNumbers(
  number,
  resultObject,
  index,
  arrayNumber,
  arrayOfUniqueNumbers
) {
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

  return resultObject;
}

function getCounter(numb, arrayOfNumber, index, counter) {
  index = index || 0;
  counter = counter || 0;
  numb === arrayOfNumber[index] && counter++;
  if (index++ < arrayOfNumber.length) {
    counter = getCounter(numb, arrayOfNumber, index, counter);
  }
  return counter;
}

function isElement(element, array, index) {
  index = index || 0;
  let boolean = element === array[index] || false;
  if (++index < array.length && !boolean) {
    boolean = isElement(element, array, index);
  }
  return boolean;
}

function sortingUniqueArray(arrayOfNumber, arrayOfUniqueValues, index) {
  arrayOfUniqueValues = arrayOfUniqueValues || [];
  index = index || 0;

  if (!isElement(arrayOfNumber[index], arrayOfUniqueValues)) {
    arrayOfUniqueValues.push(arrayOfNumber[index]);
  }

  ++index < arrayOfNumber.length &&
    sortingUniqueArray(arrayOfNumber, arrayOfUniqueValues, index);

  return arrayOfUniqueValues;
}

function getArrayFromNumber(number, arrayOfNumber) {
  let reducedByDecimalPlace = Math.floor(number / 10);
  let difference = number - reducedByDecimalPlace * 10;
  arrayOfNumber = arrayOfNumber || [];
  number = reducedByDecimalPlace;

  arrayOfNumber.unshift(difference);

  number > 0 && getArrayFromNumber(number, arrayOfNumber);

  return arrayOfNumber;
}

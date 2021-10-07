function getAmountOfNumbers(number) {
  const resultObject = {};
  const arrayFromNumbers = getArrayFromNumber(number);
  const arrayOfUniqueNumbers = sortingUniqueArray(arrayFromNumbers);

  for (let numb of arrayOfUniqueNumbers) {
    Object.assign(resultObject, { [numb]: getCounter(numb, arrayFromNumbers) });
  }

  return resultObject;
}

function getCounter(number, array) {
  let counter = 0;
  for (let item of array) {
    if (number === item) {
      counter++;
    }
  }

  return counter;
}

function checkingElement(element, array) {
  if (array.length === 0) {
    return false;
  }

  for (let item of array) {
    if (element === item) {
      return true;
    }
  }

  return false;
}

function sortingUniqueArray(number) {
  const arrayOfUniqueValues = [];
  for (let item of number) {
    if (!checkingElement(item, arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(item);
    }
  }
  return arrayOfUniqueValues;
}

function getArrayFromNumber(number) {
  const arrayOfNumber = [];

  do {
    let reducedByDecimalPlace = Math.floor(number / 10);
    let difference = number - reducedByDecimalPlace * 10;
    arrayOfNumber.unshift(difference);
    number = reducedByDecimalPlace;
  } while (number > 0);

  return arrayOfNumber;
}

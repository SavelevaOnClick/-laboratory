function task1(strouk1, strouk2) {
  if (strouk1.length !== strouk2.length) return false;
  for (let i = 0; i < strouk1.length; i++) {
    if (
      checkingLetter(strouk1[i], strouk1) !==
      checkingLetter(strouk1[i], strouk2)
    )
      return false;
  }
  return true;
}
function checkingLetter(letter, strouk) {
  let counter = 0;
  for (let i = 0; i < strouk.length; i++) {
    if (strouk[i] === letter) {
      counter++;
    }
  }
  return counter;
}

// second

function secondTask(number) {
  const resultObject = {};
  const stringNumber = String(number);
  const arrayOfUniqueNumbers = sortingUniqueArray(stringNumber);
  for (let i = 0; i < arrayOfUniqueNumbers.length; i++) {
    Object.assign(resultObject, {
      [arrayOfUniqueNumbers[i]]: getCounter(
        arrayOfUniqueNumbers[i],
        stringNumber
      ),
    });
  }
  return resultObject;
}

function getCounter(numb, stringNumber) {
  let counter = 0;
  for (let i = 0; i < stringNumber.length; i++)
    if (numb === stringNumber[i]) {
      counter++;
    }
  return counter;
}

function checkingElement(element, array) {
  if (array.length === 0) return false;
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) return true;
  }
  return false;
}
function sortingUniqueArray(number) {
  const arrayOfUniqueValues = [];
  for (let i = 0; i < number.length; i++) {
    if (!checkingElement(number[i], arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(number[i]);
    }
  }
  return arrayOfUniqueValues;
}

// task 3

function task3(sentence) {
  const arrayOfSentences = sentence.split(" ");
  checkingAndsliceComma(arrayOfSentences);
  let counter = 0;
  for (let i = 0; i < arrayOfSentences.length; i++) {
    if (checking(arrayOfSentences[i], arrayOfSentences)) {
      counter++;
    }
  }
}

function checking(element, arrayOfElements) {
  let counter = 0;
  for (let i = 0; i < arrayOfElements.length; i++) {
    if (element === arrayOfElements[i]) {
      if (++counter > 1) return false;
    }
  }
  return true;
}
function checkingAndsliceComma(arraySentences) {
  for (let i = 0; i < arraySentences.length; i++) {
    if (arraySentences[i].indexOf(",") !== -1) {
      const index = arraySentences[i].indexOf(",");
      arraySentences[i] = arraySentences[i].split("").splice(0, index).join("");
    }
  }
}

// task4
function task3(sentence) {
  const resultObject = {};
  const arraySentences = sentence.split(" ");
  sliceComma(arraySentences);
  const arrayOfUniqueValues = sortingUniqueArray(arraySentences);
  for (let i = 0; i < arrayOfUniqueValues.length; i++) {
    Object.assign(resultObject, {
      [arrayOfUniqueValues[i]]: getCounter(
        arrayOfUniqueValues[i],
        arraySentences
      ),
    });
  }
  return resultObject;
}

function getCounter(element, arrayOfElements) {
  let counter = 0;
  for (let i = 0; i < arrayOfElements.length; i++) {
    if (element === arrayOfElements[i]) {
      counter++;
    }
  }
  return counter;
}

function sortingUniqueArray(array) {
  const arrayOfUniqueValues = [];
  for (let i = 0; i < array.length; i++) {
    if (!checkingElement(array[i], arrayOfUniqueValues)) {
      arrayOfUniqueValues.push(array[i]);
    }
  }
  return arrayOfUniqueValues;
}

function checkingElement(element, array) {
  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) return true;
  }
  return false;
}
function sliceComma(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf(",") !== -1) {
      const index = array[i].indexOf(",");
      array[i] = array[i].split("").splice(0, index).join("");
    }
  }
}
// task5
function getFibonacciSeries(n) {
  let a = 0;
  let b = 1;
  let fibonacci;
  const arrayFibonacci = [];
  arrayFibonacci.push(a);
  arrayFibonacci.push(b);
  for (let i = 2; i < n; i++) {
    fibonacci = a + b;
    a = b;
    b = fibonacci;
    arrayFibonacci.push(fibonacci);
  }
  return arrayFibonacci;
}
// task 6
function getAreaRectangle(a, b) {
  const area = a * b;
  return area;
}

function getAreaTriangle(a, b, c) {
  if (!(a + b > c && a + c > b && b + c > a)) return false;
  const semiPerimeter = (a + b + c) / 2;
  const area =
    (semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)) **
    (1 / 2);
  return area;
}

function getAreaCircle(radius) {
  const pi = 3.14;
  const area = pi * radius ** 2;
  return area;
}

function getPerimeterRectangle(a, b) {
  const perimeter = (a + b) * 2;
  return perimeter;
}

function getPerimeterTriangle(a, b, c) {
  const perimeter = a + b + c;
  return perimeter;
}

function getPerimeterCircle(radius) {
  const pi = 3.14;
  const perimeter = 2 * pi * radius;
  return perimeter;
}
// task 7
function getFactorial(number) {
  if (!number || number < 0) return false;
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
// task8
function isArrayOfNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") return false;
  }
  return true;
}
function getSumEvenNumber(arrayOfNumbers) {
  if (!isArrayOfNumber(arrayOfNumbers)) return false;
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}

function getSumOddNumber(arrayOfNumbers) {
  if (!isArrayOfNumber(arrayOfNumbers)) return false;
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 !== 0) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}
function getSumMultiplesOfThree(arrayOfNumbers) {
  if (!isArrayOfNumber(arrayOfNumbers)) return false;
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 3 === 0) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}

function getSumPositiveNumbers(arrayOfNumbers) {
  if (!isArrayOfNumber(arrayOfNumbers)) return false;
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > 0) {
      sum += arrayOfNumbers[i];
    }
  }
  return sum;
}
// task 9
function getAmountElementsNegative(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] < 0 && counter++;
  }
  return counter;
}

function getAmountElementsZero(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] === 0 && counter++;
  }
  return counter;
}

function getAmountElementsPositive(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] > 0 && counter++;
  }
  return counter;
}
function getAmountElementsPrime(array) {
  function isPrimeNumber(number) {
    if (number < 2 || !number) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    isPrimeNumber(array[i]) && counter++;
  }
  return counter;
}
// task10
function getBinareNumber(number) {
  const array = [];
  do {
    array.unshift(number % 2);
    number = Math.floor(number / 2);
  } while (number !== 1);
  array.unshift(number);

  return Number(array.join(""));
}

function getDecimal(number) {
  let sum = 0;
  let numberToThePowerOf2 = 0;
  let counter = 0;
  const arrayNumber = String(number).split("");
  for (let i = arrayNumber.length - 1; i >= 0; i--) {
    numberToThePowerOf2 = arrayNumber[i] * 2 ** counter;
    sum += numberToThePowerOf2;
    counter++;
  }
  return sum;
}
// task11
function getSumEvenNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumMultiplesOfThreeInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 3 === 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

function getSumOddNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}
function getPositiveNumbersInMatrix(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 > 0) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

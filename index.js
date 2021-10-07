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
// task11 part2
function getAmountElementsZeroInMatrix(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
  }
  return counter;
}

function getAmountElementsNegativeInMatrix(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) {
        counter++;
      }
    }
  }
  return counter;
}

function getAmountElementsPositiveInMatrix(matrix) {
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        counter++;
      }
    }
  }
  return counter;
}
function getAmountElementsPrimeInMatrix(matrix) {
  function isPrime(number) {
    if (number < 2 || !number) {
      return false;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isPrime(matrix[i][j])) {
        counter++;
      }
    }
  }
  return counter;
}
// task 13
function getMeanValueOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}
function getMeanOfTheEvenNumbersOfArray(array) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sum += array[i];
      counter++;
    }
  }
  return sum / counter;
}
function getMeanOfTheOddNumbersOfArray(array) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
      counter++;
    }
  }
  return sum / counter;
}

function getMeanValueOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      counter++;
      sum += matrix[i][j];
    }
  }
  return sum / counter;
}

function getMeanOfTheEvenNumbersOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 === 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return sum / counter;
}

function getMeanOfTheOddNumbersOfMatrix(matrix) {
  let sum = 0;
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] % 2 !== 0) {
        counter++;
        sum += matrix[i][j];
      }
    }
  }
  return sum / counter;
}
// task12
function getMinToMaxSum(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

function getMinToMaxSumOfMultiplesOfThree(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}
function getMinToMaxSumOfPositiveNumber(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
}
// task14
function getTranspositionMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let bufferVariable = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = bufferVariable;
    }
  }
  return matrix;
}
// task15
function getMatrixAddition(matrix1, matrix2) {
  const matrixResult = [];
  for (let i = 0; i < matrix1.length; i++) {
    matrixResult.push([]);
    for (let j = 0; j < matrix1[i].length; j++) {
      let sum = matrix1[i][j] + matrix2[i][j];
      matrixResult[i][j] = sum;
    }
  }
  return matrixResult;
}

// task 16
function m(matrix) {
  let counter = 0;
  let length = matrix.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        counter++;
      }
    }
    if (counter > 0) {
      matrix.splice(i, 1);
      length -= 1;
    }
  }
  return matrix;
}

function m2(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let length = matrix[i].length;
    for (let j = 0; j < length; j++) {
      if (matrix[i][j] === 0) {
        let item = j;
        for (let i = 0; i < matrix.length; i++) {
          matrix[i].splice(item, 1);
        }
        length--;
      }
    }
  }
  return matrix;
}
// task 17

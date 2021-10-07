function getSumEvenNumber(arrayOfNumbers) {
  let sum = 0;
  for (let number of arrayOfNumbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
}

function getSumOddNumber(arrayOfNumbers) {
  let sum = 0;
  for (let number of arrayOfNumbers) {
    if (number % 2 !== 0) {
      sum += number;
    }
  }
  return sum;
}
function getSumMultiplesOfThree(arrayOfNumbers) {
  let sum = 0;
  for (let number of arrayOfNumbers) {
    if (number % 3 === 0) {
      sum += number;
    }
  }
  return sum;
}

function getSumPositiveNumbers(arrayOfNumbers) {
  let sum = 0;
  for (let number of arrayOfNumbers) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

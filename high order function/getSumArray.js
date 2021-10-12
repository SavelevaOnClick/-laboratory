Array.prototype.getSum = function (callback) {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += callback(this[i]) ? this[i] : null;
  }
  return sum;
};

function isEvenNumber(element) {
  return element % 2 === 0;
}

function isOddNumber(element) {
  return element % 2 !== 0;
}

function isMultiplesOfThree(element) {
  return element % 3 === 0;
}

function isPositiveNumbers(element) {
  return element > 0;
}

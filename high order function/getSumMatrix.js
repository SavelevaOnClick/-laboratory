Array.prototype.getSumMatrix = function (callback) {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      sum += callback(this[i][j]) ? this[i][j] : null;
    }
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

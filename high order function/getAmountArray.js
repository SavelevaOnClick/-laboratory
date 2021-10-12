Array.prototype.getCounter = function (callback) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    callback(this[i]) && counter++;
  }
  return counter;
};

function isNegativeElement(element) {
  return element < 0;
}

function isZeroElement(element) {
  return element === 0;
}

function isPositiveElement(element) {
  return element > 0;
}

function isPrimeNumber(number) {
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

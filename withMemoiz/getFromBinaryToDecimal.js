function creationOfMemorization() {
  const memo = {};
  return function getFromBinaryToDecimal(number, arrayNumber, counter, index) {
    if (memo[number] !== undefined) {
      return memo[number];
    }

    let sum = 0;
    let numberToThePowerOf2 = 0;
    arrayNumber = arrayNumber || String(number).split("");
    counter = counter || arrayNumber.length;
    index = index || 0;
    numberToThePowerOf2 = arrayNumber[index] * 2 ** --counter;
    sum = numberToThePowerOf2;

    if (++index < arrayNumber.length) {
      sum += getFromBinaryToDecimal(number, arrayNumber, counter, index);
    }

    memo[number] = sum;
    return sum;
  };
}

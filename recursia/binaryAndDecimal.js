function getFromDecimalToBinaryWithRecursia(number, array) {
  array = array || [];
  array.unshift(number % 2);
  number = Math.floor(number / 2);

  if (number !== 1) {
    getFromDecimalToBinaryWithRecursia(number, array);
  } else {
    array.unshift(number);
  }

  return Number(array.join(""));
}

function getFromBinaryToDecimalWithRecursia(
  number,
  arrayNumber,
  counter,
  index
) {
  let sum = 0;
  let numberToThePowerOf2 = 0;
  arrayNumber = arrayNumber || String(number).split("");
  counter = counter || arrayNumber.length;
  index = index || 0;
  numberToThePowerOf2 = arrayNumber[index] * 2 ** --counter;
  sum = numberToThePowerOf2;

  if (++index < arrayNumber.length) {
    sum += getFromBinaryToDecimalWithRecursia(
      number,
      arrayNumber,
      counter,
      index
    );
  }

  return sum;
}

function getFromDecimalToBinary(number) {
  const array = [];
  do {
    array.unshift(number % 2);
    number = Math.floor(number / 2);
  } while (number !== 1);
  array.unshift(number);

  return Number(array.join(""));
}

function getFromBinaryToDecimal(number) {
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

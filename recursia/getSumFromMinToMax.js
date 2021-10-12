function getMinToMaxSum(min, max) {
  let sum = min;

  if (++min <= max) {
    sum += getMinToMaxSum(min, max);
  }

  return sum;
}

function getMinToMaxSumOfMultiplesOfThree(min, max) {
  let sum = 0;

  if (min % 3 === 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumOfMultiplesOfThree(min, max);
  }

  return sum;
}

function getMinToMaxSumOfPositiveNumber(min, max) {
  let sum = 0;

  if (min > 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumOfPositiveNumber(min, max);
  }

  return sum;
}

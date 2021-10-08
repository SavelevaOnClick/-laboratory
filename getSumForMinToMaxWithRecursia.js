function getMinToMaxSumWithRecursia(min, max) {
  let sum = min;

  if (++min <= max) {
    sum += getMinToMaxSumWithRecursia(min, max);
  }

  return sum;
}

function getMinToMaxSumOfMultiplesOfThreeWithRecursia(min, max) {
  let sum = 0;

  if (min % 3 === 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumOfMultiplesOfThreeWithRecursia(min, max);
  }

  return sum;
}

function getMinToMaxSumOfPositiveNumberWithRecursia(min, max) {
  let sum = 0;

  if (min > 0) {
    sum += min;
  }

  if (++min <= max) {
    sum += getMinToMaxSumOfPositiveNumberWithRecursia(min, max);
  }

  return sum;
}

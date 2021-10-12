function creationOfMemorization() {
  let memo = {};
  return function getMinToMaxSum(min, max, minIter) {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum = minIter;

    if (++minIter <= max) {
      sum += getMinToMaxSum(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getMinToMaxSumOfMultiplesOfThree(min, max, minIter) {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum = 0;

    if (minIter % 3 === 0) {
      sum += minIter;
    }

    if (++minIter <= max) {
      sum += getMinToMaxSumOfMultiplesOfThree(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
}

function creationOfMemorization() {
  let memo = {};
  return function getMinToMaxSumOfPositiveNumber(min, max, minIter) {
    if (memo[`${min}:${max}`] !== undefined) {
      return memo[`${min}:${max}`];
    }

    minIter = minIter ?? min;
    let sum = 0;

    if (minIter > 0) {
      sum = minIter;
    }

    if (++minIter <= max) {
      sum += getMinToMaxSumOfPositiveNumber(min, max, minIter);
    }

    memo[`${min}:${max}`] = sum;
    return sum;
  };
}

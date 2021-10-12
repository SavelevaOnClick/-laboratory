function creationOfMemorization() {
  const memo = {};
  return function getFromDecimalToBinary(number, array, variable) {
    variable = variable || number;

    if (memo[number] !== undefined) {
      return memo[number];
    }

    array = array || [];
    array.unshift(variable % 2);
    variable = Math.floor(variable / 2);

    if (variable !== 1) {
      getFromDecimalToBinary(number, array, variable);
    } else {
      array.unshift(variable);
    }

    memo[number] = Number(array.join(""));
    return Number(array.join(""));
  };
}

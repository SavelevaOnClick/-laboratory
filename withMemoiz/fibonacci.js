function createMemoiz() {
  const memo = {};
  return function pushFibonacci(number, arrayFibonacci) {
    arrayFibonacci = arrayFibonacci || [];
    function getFibonacciNumber(number) {
      let result = 0;

      if (memo[number] !== undefined) {
        result = memo[number];
        return result;
      }

      if (number <= 1) {
        memo[number] = number;
        result = number;
        return result;
      } else {
        result +=
          getFibonacciNumber(number - 1) + getFibonacciNumber(number - 2);
        memo[number] = result;
      }
      return result;
    }

    if (--number >= 0) {
      arrayFibonacci.unshift(getFibonacciNumber(number));
      pushFibonacci(number, arrayFibonacci);
    }

    return arrayFibonacci;
  };
}

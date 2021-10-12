function factorial() {
  const memo = {};
  return function factorial(number) {
    let resultFact;

    if (memo[number] !== undefined) {
      resultFactorial = memo[number];
    } else {
      if (number === 1) {
        resultFactorial = 1;
      } else {
        resultFactorial = number * factorial(number - 1);
      }

      memo[number] = resultFactorial;
    }
    return resultFactorial;
  };
}

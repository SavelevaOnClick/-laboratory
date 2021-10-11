function factorial() {
  const memo = {};
  return function factorial(number) {
    let resultFact;
    if (memo[number] !== undefined) {
      resultFactorial = memo[number];
      console.log("из кеша");
    } else {
      if (number === 1) {
        resultFactorial = 1;
      } else {
        resultFactorial = number * factorial(number - 1);
        console.log("вычисляем");
      }
      memo[number] = resultFactorial;
    }
    return resultFactorial;
  };
}

function arrayOfFibonacci(n) {
  const arrayFibonacci = [0, 1].splice(0, n);
  for (let i = 2; i < n; i++) {
    arrayFibonacci.push(arrayFibonacci[i - 1] + arrayFibonacci[i - 2]);
  }
  return arrayFibonacci;
}

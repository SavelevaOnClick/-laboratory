function arrayOfFibonacciWithRecursia(number, index, arrayFibonacci) {
  index = index || 1;
  arrayFibonacci = arrayFibonacci || [0, 1].splice(0, number);

  if (++index < number) {
    arrayFibonacci.push(arrayFibonacci[index - 1] + arrayFibonacci[index - 2]);
    arrayOfFibonacciWithRecursia(number, index, arrayFibonacci);
  }

  return arrayFibonacci;
}

function getFactorialWithRecursia(number) {
  if (number <= 0) {
    return false;
  }

  let factorial = 1;
  factorial *= number--;

  if (number > 0) {
    factorial *= getFactorialWithRecursia(number);
  }

  return factorial;
}

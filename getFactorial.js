function getFactorial(number) {
  if (!number || number < 0) {
    return false;
  }

  let factorial = 1;

  for (let i = number; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

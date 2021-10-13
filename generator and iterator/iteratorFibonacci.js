function* generatorFibonacci(number) {
  let fibonacci = 0;
  let a = 0;
  let b = 1;
  let i = 0;
  while (++i <= number) {
    yield (fibonacci += a);
    a = b;
    b = fibonacci;
  }
}
// let iteratorFibonacci = generatorFibonacci(6);
//
// for (let fib of iteratorFibonacci) {
//   console.log(fib);
// }

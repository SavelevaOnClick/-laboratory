let objectFibonacci = {
  i: 0,
  set setTo(to) {
    this.setTo = to;
  },
  *[Symbol.iterator]() {
    let a = 0;
    let b = 1;
    let fibonacci = 0;
    while (++this.i <= this.to) {
      yield (fibonacci += a);
      a = b;
      b = fibonacci;
    }
  },
};

// objectFibonacci.to = 12
// for(let item of objectFibonacci) {
//   console.log(item);
// }

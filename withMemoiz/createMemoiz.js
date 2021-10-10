function memoiz(func) {
  const memo = {};
  return function () {
    let n = arguments[0];
    if (memo[n]) {
      console.log("cash");
      return memo[n];
    } else {
      console.log("calc");
      let result = func(n);
      memo[n] = result;
      return result;
    }
  };
}

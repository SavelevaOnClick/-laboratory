Array.prototype.myFilter = function (func) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this) && newArray.push(this[i]);
  }
  return newArray;
};

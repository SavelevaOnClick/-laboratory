Array.prototype.myMap = function (func) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(func(this[i], i, this));
  }
  return newArray;
};

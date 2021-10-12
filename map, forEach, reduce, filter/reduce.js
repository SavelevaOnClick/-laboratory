Array.prototype.myReduce = function (func, acum) {
  acum = acum ?? this[0];
  for (let i = acum === this[0] ? 1 : 0; i < this.length; i++) {
    acum = func(acum, this[i], i, this);
  }
  return acum;
};

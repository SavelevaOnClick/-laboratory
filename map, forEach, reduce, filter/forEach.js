Array.prototype.myForEach = function (func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i], i, this);
  }
};

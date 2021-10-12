Function.prototype.myCall = function (objectContext, ...args) {
  const func = this;
  let id = Symbol("id");
  objectContext[id] = func;
  const result = objectContext[id](...args);
  delete objectContext[id];
  return result;
};

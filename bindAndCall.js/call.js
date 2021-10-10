Function.prototype.myCall = function (objectContext, ...args) {
  const func = this;
  let property = Date.now().toLocaleString();
  objectContext[property] = func;
  const result = objectContext[property](...args);
  delete objectContext[property];
  return result;
};

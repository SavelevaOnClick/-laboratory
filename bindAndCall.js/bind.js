Function.prototype.myBind = function (objectContext, ...args) {
  const func = this;
  return function (...args) {
    let property = Date.now().toLocaleString();
    objectContext[property] = func;
    const result = objectContext[property](...args.concat(...args));
    delete objectContext[property];
    return result;
  };
};

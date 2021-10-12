Function.prototype.myBind = function (objectContext, ...args) {
  const func = this;
  return function (...args) {
    let id = Symbol("id");
    objectContext[id] = func;
    const result = objectContext[id](...args.concat(...args));
    delete objectContext[id];
    return result;
  };
};

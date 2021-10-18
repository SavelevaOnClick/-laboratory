class Node {
  #value;
  #left;
  #right;
  constructor() {
    this.#value = null;
    this.#right = null;
    this.#left = null;
  }
  add(value, node) {
    node = node || this;
    if (!node.#value) {
      node.#value = value;
      return true;
    }

    if (value > node.#value) {
      if (!node.#right) {
        node.#right = new Node();
      }
      return this.add(value, node.#right);
    } else {
      if (!node.#left) {
        node.#left = new Node();
      }
      return this.add(value, node.#left);
    }
  }

  search(value, node) {
    node = node || this;
    if (value > node.#value) {
      if (!node.#right) {
        return null;
      }
      return this.search(value, node.#right);
    } else if (value < node.#value) {
      if (!node.#left) {
        return null;
      }
      return this.search(value, node.#left);
    } else {
      return node.#value;
    }
  }
  getMin(node) {
    node = node || this;
    if (!node.#left) {
      return node;
    }
    return this.getMin(node.#left);
  }
  remove(value, node) {
    node = node || this;
    if (value > node.#value) {
      if (!node.#right) {
        return false;
      }
      node.#right = this.remove(value, node.#right);
      return node;
    } else if (value < node.#value) {
      if (!node.#left) {
        return false;
      }
      node.#left = this.remove(value, node.#left);
      return node;
    } else {
      if (!node.#left && !node.#right) {
        node = null;
        return node;
      } else if (!node.#right) {
        node = node.#left;
        return node;
      } else if (!node.#left) {
        node = node.#right;
        return node;
      } else {
        let min = this.getMin(node.#right);
        node.#value = min.#value;
        node.#right = this.remove(min.#value, node.#right);
        return node;
      }
    }
  }
  getArray() {
    const array = [];
    return this.inOrderTraverse(this, array);
  }
  inOrderTraverse(node, array) {
    if (node !== null) {
      this.inOrderTraverse(node.#left, array);
      array.paush(node.#value);
      this.inOrderTraverse(node.#right, array);
    }
    return array;
  }
}

let rectangle = {
  set setWidth(width) {
    this.setWidth = width;
  },
  set setHeight(height) {
    this.setHeight = height;
  },
  get area() {
    return this.width * this.height;
  },
  get perimeter() {
    return (this.width + this.height) * 2;
  },
};

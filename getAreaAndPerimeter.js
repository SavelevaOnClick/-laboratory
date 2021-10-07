function getAreaRectangle(width, height) {
  return width * height;
}

function getAreaTriangle(a, b, c) {
  if (!(a + b > c && a + c > b && b + c > a)) {
    return false;
  }
  const semiPerimeter = (a + b + c) / 2;
  const area =
    (semiPerimeter *
      (semiPerimeter - a) *
      (semiPerimeter - b) *
      (semiPerimeter - c)) **
    (1 / 2);
  return area;
}

function getAreaCircle(radius) {
  return Math.PI * radius ** 2;
}

function getPerimeterRectangle(width, height) {
  return (width + height) * 2;
}

function getPerimeterTriangle(a, b, c) {
  if (!(a + b > c && a + c > b && b + c > a)) {
    return false;
  }
  return a + b + c;
}

function getPerimeterCircle(radius) {
  return 2 * Math.PI * radius;
}

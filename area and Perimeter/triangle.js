function Triangle(aSide, bSide, cSide) {
  this.a = aSide;
  this.b = bSide;
  this.c = cSide;
  this.area = function () {
    if (
      !(
        this.a + this.b > this.c &&
        this.a + this.c > this.b &&
        this.b + this.c > this.a
      )
    ) {
      return false;
    }
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area =
      (semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c)) **
      (1 / 2);
    return area;
  };
  this.perimeter = function () {
    return this.a + this.b + this.c;
  };
}

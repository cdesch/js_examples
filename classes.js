// Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

//> const rectangle = new Rectangle(10, 10);
//> console.log(rectangle.calcArea());
//> 100


// Class Expressions

export { Rectangle };
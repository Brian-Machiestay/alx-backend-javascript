export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // return a new object of this class
  cloneCar() {
    return this[Symbol.species];
  }

  // override symbol species
  get [Symbol.species]() {
    return new this.constructor();
  }
}

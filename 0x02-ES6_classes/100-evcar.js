import Car from './10-car.js';

export default class EVCar {
  constructor(brand, motor, color, range) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
    this._range = range;
  }

  // override clone car of parent
  cloneCar() {
    const br = this._brand;
    this._brand = br;
    return new Car();
  }
}

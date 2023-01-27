const util = require('util');

export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string' || typeof name !== 'string') throw new Error('string please');
    this._code = code;
    this._name = name;
  }

  // default string repre
  [util.inspect.custom]() {
    return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  // override tostring
  toString() {
    return (`[object ${this._code}]`);
  }
}

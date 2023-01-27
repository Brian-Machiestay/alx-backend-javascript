export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new Error('code must be a string');
    if (typeof name !== 'string') throw new Error('name must be a string');
    this._code = code;
    this._name = name;
  }

  // getter for code
  get code() {
    return (this._code);
  }

  // setter for code
  set code(thisCode) {
    if (typeof thisCode !== 'string') throw new Error('code must be a string');
    this._code = thisCode;
  }

  // getter for name
  get name() {
    return (this._name);
  }

  // setter for name
  set name(thisName) {
    if (typeof thisName !== 'string') throw new Error('name must be a string');
    this._name = thisName;
  }

  // displays a currency in the format name (code)
  displayFullCurrency() {
    return (`${this._name} (${this._code})`);
  }
}

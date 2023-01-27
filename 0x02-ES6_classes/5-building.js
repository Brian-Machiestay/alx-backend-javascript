export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new Error('sqft must be a number');
    if (this.constructor !== Building) this.evacuationWarningMessage();
    this._sqft = sqft;
  }

  // getter for sqft
  get sqft() {
    return (this._sqft);
  }

  // setter for sqft
  set sqft(thisSqft) {
    if (typeof thisSqft !== 'number') throw new Error('sqft must be a number');
    this._sqft = thisSqft;
  }

  // make subclasses implement this method
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new Error('amount must be a number');
    if (currency.constructor !== Currency) throw new Error('currency must be a Currency');
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return (this._amount);
  }

  // setter for amount
  set amount(thisAmount) {
    if (typeof thisAmount !== 'number') throw new Error('amount must be a number');
    this._amount = thisAmount;
  }

  // getter for currency
  get currency() {
    return (this._currency);
  }

  // setter for currency
  set currency(thisCurrency) {
    if (thisCurrency.constructor !== Currency) throw new Error('currency must be a Currency');
    this._currency = thisCurrency;
  }

  // displays a currency in the format amount currency_name (currency_code)
  displayFullPrice() {
    return (`${this._amount} ${this._currency.name} (${this._currency.code})`);
  }

  // multiplies the rate by the amount
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new Error('amount must be a number');
    if (typeof conversionRate !== 'number') throw new Error('rate must be a number');
    return (amount * conversionRate);
  }
}

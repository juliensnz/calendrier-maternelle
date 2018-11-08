export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}

export default class ConcreteMonth {
  private constructor(private month: Month) {
    Object.freeze(this);
  }

  static create(month: Month) {
    return new ConcreteMonth(month);
  }

  numberValue(): number {
    return this.month as number;
  }
}

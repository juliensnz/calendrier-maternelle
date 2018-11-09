import ConcreteMonth from './month';
import ConcreteYear from './year';
import ConcreteDay from './day';

export default class ConcreteDate {
  private constructor(private year: ConcreteYear, private month: ConcreteMonth, private day: ConcreteDay) {
    Object.freeze(this);
  }

  static create(year: ConcreteYear, month: ConcreteMonth, day: ConcreteDay) {
    return new ConcreteDate(year, month, day);
  }

  dateValue(): Date {
    return new Date(this.year.numberValue(), this.month.numberValue(), this.day.numberValue());
  }

  equals(date: ConcreteDate): boolean {
    return this.year.equals(date.year) && this.month.equals(date.month) && this.day.equals(date.day);
  }
}

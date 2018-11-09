export enum Day {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export default class ConcreteDay {
  private constructor(private day: number) {
    Object.freeze(this);
  }

  static create(day: number) {
    return new ConcreteDay(day);
  }

  numberValue(): number {
    return this.day as number;
  }

  equals(day: ConcreteDay): boolean {
    return this.day === day.day;
  }
}

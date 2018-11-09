const MIN_YEAR = 1970;

export default class ConcreteYear {
  private constructor(private year: number) {
    if (MIN_YEAR > year) {
      throw new Error(`The year needs to be more that ${MIN_YEAR}`)
    }

    Object.freeze(this);
  }

  static create(year: number) {
    return new ConcreteYear(year);
  }

  numberValue(): number {
    return this.year as number;
  }

  equals(year: ConcreteYear): boolean {
    return this.year === year.year;
  }
}

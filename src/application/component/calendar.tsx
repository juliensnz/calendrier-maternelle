import React, { Component } from 'react';
import Month from '../../domain/model/month';
import Year from '../../domain/model/year';
import DomainDate from '../../domain/model/date';
import ConcreteDay, {Day} from '../../domain/model/day';

type Props = {
  month: Month,
  year: Year,
  hollydays: DomainDate[],
  onDateClick: (date: DomainDate) => void,
}

class Calendar extends Component<Props> {
  render() {
    const {month, year, hollydays, onDateClick} = this.props;
    const colors = {
      [Day.Sunday as number]: '#ffffff',
      [Day.Monday as number]: '#eeeeee',
      [Day.Tuesday as number]: '#f9e6a8',
      [Day.Wednesday as number]: '#f4a6ca',
      [Day.Thursday as number]: '#2bade1',
      [Day.Friday as number]: '#a7dac7',
      [Day.Saturday as number]: '#f37077'
    }
    const numberOfDays = new Date(year.numberValue(), month.numberValue() + 1, 0).getDate();

    const views = Array.from(Array(numberOfDays).keys()).map((dayOfMonth: number) => {
      const day = ConcreteDay.create(dayOfMonth + 1);
      const date = DomainDate.create(year, month, day);

      return <div
          key={date.dateValue().getDate()}
          className={`Day ${hollydays.some((hollyday: DomainDate) => hollyday.equals(date)) ? 'Day--hollyday' : ''}`}
          style={{backgroundColor: colors[date.dateValue().getDay()]}}
          onClick={() => {
            onDateClick(DomainDate.create(year, month, day));
          }}
        >
        {date.dateValue().getDate()}
      </div>
    })

    return (
      <React.Fragment>
        <div className="Calendar">
          {views}
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar;

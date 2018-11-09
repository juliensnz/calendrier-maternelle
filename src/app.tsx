import React, { Component } from 'react';
import './App.css';
import Calendar from './application/component/calendar';
import ConcreteMonth from './domain/model/month';
import ConcreteYear from './domain/model/year';
import translator from './misc/translator';
import DomainDate from './domain/model/date';

class App extends Component {
  state = {
    month: (new Date()).getMonth(),
    year: (new Date()).getFullYear(),
    hollydays: []
  }

  previousMonth() {
    const nextDate = new Date(this.state.year, this.state.month - 1);
    const nextState = {
      year: nextDate.getFullYear(),
      month: nextDate.getMonth()
    }
    this.setState(nextState);
  }

  nextMonth() {
    const nextDate = new Date(this.state.year, this.state.month + 1);
    const nextState = {
      year: nextDate.getFullYear(),
      month: nextDate.getMonth()
    }
    this.setState(nextState);
  }

  toggleHollyday(dateToToggle: DomainDate) {
    const newHollydays = this.state.hollydays.filter((date: DomainDate) => !date.equals(dateToToggle));
    if (newHollydays.length !== this.state.hollydays.length) {
      this.setState({hollydays: newHollydays});
    } else {
      this.setState({hollydays: [...newHollydays, dateToToggle]});
    }
  }

  render() {
    const month = ConcreteMonth.create(this.state.month);
    const year = ConcreteYear.create(this.state.year);
    const date = new Date(year.numberValue(), month.numberValue());

    return (
      <div className="App">
        <div className="Menu">
          <span className="Menu-item" onClick={this.previousMonth.bind(this)}>{translator('menu.previous')}</span>
          <span className="Menu-item" onClick={() => window.print()}>{translator('menu.print')}</span>
          <span className="Menu-item" onClick={this.nextMonth.bind(this)}>{translator('menu.next')}</span>
        </div>
        <div className="Page">
          <h1 className="Page-title">{date.toLocaleDateString(navigator.language, { year: 'numeric', month: 'long'})}</h1>
          <Calendar month={month} year={year} hollydays={this.state.hollydays} onDateClick={this.toggleHollyday.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default App;

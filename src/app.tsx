import React, { Component } from 'react';
import './App.css';
import Calendar from './application/component/calendar';
import ConcreteMonth, {Month} from './domain/model/month';
import ConcreteYear from './domain/model/year';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <span onClick={() => window.print()}>Print</span>
        <div className="Page">
          <Calendar month={ConcreteMonth.create(Month.December)} year={ConcreteYear.create(2018)}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Calendar from 'react-calendar'

class ReactCalendar extends Component {

  state = {
    date: new Date(),
  }

  onClickDay = date => {alert("You clicked " + date )}
  onChange = date => this.setState({ date })
  render() {
    return (
        <Calendar
          calendarType={'US'}
          onChange={this.onChange}
          onClickDay={this.onClickDay}
          date={this.state.date}
          
        />

    );
  }
}

export default ReactCalendar;

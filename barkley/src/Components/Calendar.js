import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const localizer = momentLocalizer(moment);

class CalendarPost extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(0, "days")
          .toDate(),
        title: "Today"
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default CalendarPost
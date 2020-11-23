import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
// import events from "./ReactBigCalendar/events";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
// lodash??

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class CalendarPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          start: moment().toDate(),
          end: moment().add(0, "days").toDate(),
          title: "Today",
        },
        {
          id: 4,
          title: 'Dog Park Playdate',
          start: new Date(2020, 10, 28, 2, 0, 0),
          end: new Date(2020, 10, 28, 5, 0, 0),
          desc: '910 Brookside Dr, Raleigh, NC 27604'
        },
        {
          title: 'Lunch at Babymoon Cafe',
          start: new Date(2020, 11, 11, 11, 0, 0, 0),
          end: new Date(2020, 11, 11, 11, 0, 0, 0),
          desc: 'Address: 100 Jerusalem Dr #106'
        },
        {
          id: 8,
          title: 'Birthday Party for Moose',
          start: new Date(2020, 10, 29, 9, 0, 0),
          end: new Date(2020, 10, 29, 11, 30, 0)
        }
      ],
    };

    this.moveEvent = this.moveEvent.bind(this);
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };

  render() {
    return (
      <div className="App">
        <DnDCalendar
        selectable
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.moveEvent}
          onEventResize={this.resizeEvent}
          resizable
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}


export default CalendarPost;

import React, { Component } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const EventComponent = ({ start, end, title }) => {
  return (
    <>
      <p>{title}</p>
      <p>{start}</p>
      <p>{end}</p>
    </>
  )
}

const EventAgenda = ({ event }) => {
  return (
    <span>
      <em style={{ color: 'blue' }}>{event.title}</em>
      <p>{event.desc}</p>
    </span>
  )
}

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
      id: 0,
    title: 'Dog Park ',
    allDay: true,
    start: new Date(2020, 10, 12, 10, 30, 0, 0),
    end: new Date(2020, 10, 12, 12, 30, 0, 0),
    desc: 'Address: 910 Brookside Dr, Raleigh, NC 27604'
  },
  {
    id: 3,
    title: 'Some Event',
    start: new Date(2020, 11, 9, 0, 0, 0),
    end: new Date(2020, 11, 9, 0, 0, 0)
  },
  {
    id: 4,
    title: 'Dog Park Playdate',
    start: new Date(2020, 11, 11),
    end: new Date(2020, 11, 11),
    desc: '910 Brookside Dr, Raleigh, NC 27604'
  },
  {
    id: 5,
    title: 'Zoom meeting',
    start: new Date(2020, 11, 12, 10, 30, 0, 0),
    end: new Date(2020, 11, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to check for catfish'
  },
  {
    id: 6,
    title: 'Lunch at Babymoon Cafe',
    start: new Date(2020, 11, 12, 12, 0, 0, 0),
    end: new Date(2020, 11, 12, 13, 0, 0, 0),
    desc: 'Address: 100 Jerusalem Dr #106'
  },
  {
    id: 7,
    title: 'Doggie Playdate',
    start: new Date(2020, 11, 12, 14, 0, 0, 0),
    end: new Date(2020, 11, 12, 15, 0, 0, 0)
  },
  {
    id: 8,
    title: 'Birthday Party for Moose',
    start: new Date(2020, 11, 13, 7, 0, 0),
    end: new Date(2020, 11, 13, 10, 30, 0),
    desc: 'Address: 412 Scott Lane, Wallingford, PA 19086'
  },
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

handleSelect = ({ start, end }) => {
  const title = window.prompt('New Event name')
  if (title)
    this.setState({
      events: [
        ...this.state.events,
        {
          start,
          end,
          title,
        },
      ],
    })
  }

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
      onSelectEvent={event => alert(event.desc)}
      onSelectSlot={this.handleSelect}
      resizable
      style={{ height: "100vh" }}
      components={{
        event: EventComponent,
        agenda: {
          event: EventAgenda
        }
      }}
    />
  </div>
);
}
}


export default CalendarPost 



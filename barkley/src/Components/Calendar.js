import React from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
// import events from "./ReactBigCalendar/events";
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'
// lodash??
const DnDCalendar = withDragAndDrop(Calendar)

const localizer = momentLocalizer(moment)

const initialEvents = [
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
    title: 'Meeting',
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
  {
    id: 9,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  }
]

const onEventDrop = ({ event, start, end, allDay }) => {
  console.log('event clicked')
  console.log(start, event, end, allDay)
}

const Scheduler = () => {
  const [events, setEvents] = React.useState(initialEvents)

  const addEvent = ({ event, start, end, allDay }) => {
    const newEvent = {
      id: events.length,
      title: 'New event',
      start: new Date(new Date(start).setHours(new Date().getHours() - 3)),
      end: new Date(new Date(end).setHours(new Date().getHours() + 3)),
      desc: 'This is a new event'
    }

    setEvents(state => [...state, newEvent])
  }

  return (
    <>
      <div className='wrapper' style={{ minHeight: '100vh' }}>
        <DnDCalendar
          selectable
          events={events}
          startAccessor='start'
          endAccessor='end'
          defaultDate={moment().toDate()}
          defaultView='month'
          localizer={localizer}
          toolbar
          resizable
          style={{ height: '100vh' }}
          onEventDrop={onEventDrop}
          components={{
            event: EventComponent,
            agenda: {
              event: EventAgenda
            }
          }}
          onSelectSlot={addEvent}
          onSelectEvent={event => alert(event.desc)}
        />
      </div>
    </>
  )
}

export default Scheduler

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

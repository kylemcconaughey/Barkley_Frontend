import React from "react";
import ReactDOM from "react-dom";
import events from "./events";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";

const localizer = momentLocalizer(moment)
const DragAndDropCalendar = withDragAndDrop(Calendar);

class Dnd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[
        {
          start: moment().toDate(),
          end: moment().add(1, "days").toDate(),
          title: "Event",
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

  render() {
    return (
      <DragAndDropCalendar
        selectable
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView={Calendar.Views.MONTH}
        defaultDate={new Date(2020, 11, 23)}
      />
    );
  }
}

const CalendarWEvents = DragDropContext(HTML5Backend)(Dnd);
ReactDOM.render(<CalendarWEvents />, document.getElementById("root"));

export default Dnd
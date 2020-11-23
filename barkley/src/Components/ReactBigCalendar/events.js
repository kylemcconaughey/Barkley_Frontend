export default [
  {
    id: 0,
    title: 'All Day Event',
    allDay: true,
    start: new Date(2020, 11, 0),
    end: new Date(2020, 11, 1)
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2020, 11, 7),
    end: new Date(2020, 11, 10)
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
    end: new Date(2020, 11, 13),
    desc: '910 Brookside Dr, Raleigh, NC 27604'
  },
  {
    id: 5,
    title: 'Zoom meeting',
    start: new Date(2020, 11, 12, 10, 30, 0, 0),
    end: new Date(2020, 11, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
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
    start: new Date(2020, 3, 13, 7, 0, 0),
    end: new Date(2020, 3, 13, 10, 30, 0)
  },
  {
    id: 9,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  }
]

import React from 'react'
// import { getDiscussions } from './api'
// import { parse, format } from 'fecha'
// import Vote from './Voting'

function Notes (props) {
  const { notes } = props

  // let postedAt = notes.posted_at
  // if (typeof postedAt === 'string') {
  //   postedAt = parse(postedAt, 'isoDateTime')
  // }
  // postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  return (
    <div className='notes'>
      {notes.map((note) => (
        <p className='indivNote' key={note.url}>
          {note.body}
          <p> Posted by: {note.user} on {note.posted_at}
          </p>
          {/* <p>Upvoted: {notes.num_upvotes}  Downvoted: {notes.num_downvotes}</p>
            <Vote> </Vote> */}
        </p>
      ))}
    </div>
  )
}

export default Notes

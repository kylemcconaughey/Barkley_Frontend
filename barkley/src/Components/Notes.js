import React, { useEffect, useState } from 'react'
import { getDiscussions } from './api'
// import { parse, format } from 'fecha'
// import Vote from './Voting'

function Notes (props) {
  const { token } = props
  const [note, Setnote] = useState([])

  // let postedAt = note.posted_at
  // if (typeof postedAt === 'string') {
  //   postedAt = parse(postedAt, 'isoDateTime')
  // }
  // postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  useEffect(() => {
    getDiscussions(token).then(data => {
      Setnote(data)
    })
  }, [note, token])

  return note.map((n) => (
    <div key={n.url}>
      <div className='notes'>
        {n.notes.map((notes) => (
          <p className='indivNote' key={notes.url}>
            {notes.body}
            <p> Posted by: {notes.user} on {notes.posted_at}
            </p>
            {/* <p>Upvoted: {notes.num_upvotes}  Downvoted: {notes.num_downvotes}</p>
            <Vote> </Vote> */}
          </p>
        ))}
      </div>
    </div>
  ))
}

export default Notes

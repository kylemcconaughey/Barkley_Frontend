import React from 'react'
// import { parse, format } from 'fecha'
import Vote from './Voting'

function Notes (props) {
  const { notes } = props

  return (
    <div className='notes'>
      {notes.map((note) => (
        <p className='indivNote' key={note.url}>
          {note.body}
          <p class='id_num'>{note.id}</p>
          <p className='noteDetail'> Posted by: {note.user} on {note.niceCreated}
          </p>
          <p className='noteDetail'>Upvoted: {note.num_upvotes}  Downvoted: {note.num_downvotes}</p>
          <Vote url={note.url} token={props.token}> </Vote>
        </p>
      ))}
    </div>
  )
}

export default Notes

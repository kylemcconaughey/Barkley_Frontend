import React, { useEffect, useState } from 'react'
import { getDiscussions } from './api'

function Notes (props) {
  const { token } = props
  const [note, Setnote] = useState([])

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
            {notes.body} {notes.user}
          </p>
        ))}
      </div>
    </div>
  ))
}

export default Notes

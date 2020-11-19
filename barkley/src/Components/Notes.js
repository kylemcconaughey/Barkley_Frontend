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
      <div>
        {n.notes.map((notes) => (
          <p key={notes.id}>{notes.body}</p>
        ))}
      </div>
    </div>
  ))
}

export default Notes

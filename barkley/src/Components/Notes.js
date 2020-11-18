import React, { useEffect, useState } from 'react'
import { getDiscussions } from './api'

function Notes (props) {
  const { token } = props
  const [answers, SetAnswers] = useState([])

  useEffect(() => {
    getDiscussions(token).then(data => {
      SetAnswers(data)
      console.log(data)
    })
  }, [token])

  return answers.map((answer) => (
    <div key={answer.id}>
      <div>
        {answer.notes.map((note) => (
          <p key={note.id}>{note.body}</p>
        ))}
      </div>
    </div>
  ))
}

export default Notes

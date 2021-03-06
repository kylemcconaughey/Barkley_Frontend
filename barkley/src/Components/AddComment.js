import React, { useState } from 'react'
import { addComment } from './api'

function AddComments (props) {
  const [body, setBody] = useState('')
  const [created, setCreated] = useState(false)
  const { token, id } = props

  function onSubmit (e) {
    e.preventDefault()
    addComment(token, body, id)
      .then(data => {
      })
      .then(() => setCreated(true))
  }

  if (created) {
    return <p>{}</p>
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label
          htmlFor='body'
        />
        <input
          type='text'
          className='addC-form-field'
          name='body'
          value={body}
          on
          onChange={e => setBody(e.target.value)}
        />
        <button type='submit' className='addBtn'>
            Add a comment...
        </button>
      </form>
    </div>
  )
}

export default AddComments

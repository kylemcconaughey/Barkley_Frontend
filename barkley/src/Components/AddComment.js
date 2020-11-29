import React, { useState } from 'react'
import { addComment } from './api'

function AddComments (props) {
  const [body, setBody] = useState('')
  const [post, setPost] = useState('')
  const [created, setCreated] = useState(false)
  const { token } = props

  function onSubmit (e) {
    e.preventDefault()
    addComment(token, post, body)
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
          htmlfor='body'
        />
        <input
          type='text'
          className='addC-form-field'
          name='body'
          value={body}
          on
          onChange={e => setBody(e.target.value)}
        />
        <label
          htmlfor='post'
        />
        <input
          type='id'
          className='addC-form-field'
          name='post'
          value={post}
          onChange={e => setPost(e.target.value)}
        />
        <button type='submit' className='addBtn'>
            Add a comment...
        </button>
      </form>
    </div>
  )
}

export default AddComments

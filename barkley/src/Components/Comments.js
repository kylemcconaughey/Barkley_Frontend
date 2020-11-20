import React, { useEffect, useState } from 'react'
import { getPosts } from './api'

function Comments (props) {
  const { token } = props
  const [comment, SetComment] = useState([])

  useEffect(() => {
    getPosts(token).then(data => {
      SetComment(data)
      console.log(data)
    })
  }, [token])

  return comment.map((c) => (
    <div key={c.id}>
      <div>
        {c.comments.map((nice) => (
          <p key={nice.id}>{nice.body}</p>
        ))}
      </div>
    </div>
  ))
}

export default Comments

import React from 'react'

function Comments (props) {
  const { comments } = props

  return (
    <div>
      {comments.map((nice) => (
        <p key={nice.id}>{nice.body}</p>
      ))}
    </div>
  )
}

export default Comments

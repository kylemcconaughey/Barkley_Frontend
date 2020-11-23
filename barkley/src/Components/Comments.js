import React from 'react'

function Comments (props) {
  const { comments } = props

  return (
    <div className='comments'>
      {comments.map((nice) => (
        <p key={nice.url}>{nice.body}</p>
      ))}
    </div>
  )
}

export default Comments

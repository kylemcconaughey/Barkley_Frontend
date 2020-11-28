import React from 'react'

function Comments (props) {
  const { comments } = props

  return (
    <div className='commentsBox'>
      {comments.map((nice) => (
        <p className='comments' key={nice.url}>{nice.body}</p>
      ))}
    </div>
  )
}

export default Comments

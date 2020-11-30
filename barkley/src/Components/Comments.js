import React from 'react'
import { Link } from 'react-router-dom'

function Comments (props) {
  const { comments } = props

  return (
    <div className='commentsBox'>
      {comments.map((comment) => (
        <p className='comments' key={comment.url}>
          {comment.body}
          <p className='id_num'>{comment.id}</p>
          <p className='commentDetail'> Posted by: <em><Link to='/profile'>{comment.user.username}</Link></em>  on {comment.niceCreated} </p>
        </p>
      ))}
    </div>
  )
}

export default Comments

import React from 'react'
import Card from 'react-bootstrap/Card'
import Vote from './Voting'

export default function Note ({ post }) {
  return (
    <div className='note'>
      <post>
        <Card.Body>
          <Card.Text id='post' className='noteBody'>
            {post.body}
          </Card.Text>
          <Card.Text>
            <p> Posted by:
              <em>{post.user.username}</em>
             on {post.niceCreated}
            </p>
          </Card.Text>
          <Card.Text>Upvoted: {post.num_upvotes}  Downvoted: {post.num_downvotes}</Card.Text>
          <Vote />
        </Card.Body>

      </post>

    </div>
  )
}

import React from 'react'
import Card from 'react-bootstrap/Card'
import { parse, format } from 'fecha'
import Vote from './Voting'

export default function Note ({ post }) {
  let postedAt = post.posted_at
  if (typeof postedAt === 'string') {
    postedAt = parse(postedAt, 'isoDateTime')
  }
  postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  return (
    <div className='note'>
      <post style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Text id='post' className='noteBody'>
            {post.body}
          </Card.Text>
          <Card.Text>
            <p> Posted by:
              <em>{post.user.username}</em>
             on {postedAt}
            </p>
          </Card.Text>
          <Card.Text>Upvoted: {post.num_upvotes}  Downvoted: {post.num_downvotes}</Card.Text>
          <Vote />
        </Card.Body>

      </post>

    </div>
  )
}

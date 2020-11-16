import React from 'react'
import Card from 'react-bootstrap/Card'
import { parse, format } from 'fecha'
import { Link } from 'react-router-dom'
// import LikeButton from './LikeButton'

export default function Recommendation ({ post }) {
  let postedAt = post.posted_at
  if (typeof postedAt === 'string') {
    postedAt = parse(postedAt, 'isoDateTime')
  }
  postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  return (
    <div className='post'>
      <post style={{ width: '40rem' }}>
        <p className='postHeader'> Posted by:
          <em> <Link to='/profile/'>{post.user.username} </Link></em>
             on {postedAt}
        </p>
        <Card.Body
        >
          <Card.Text id='post'>
            {post.body}
          </Card.Text>

        </Card.Body>

      </post>

      {/* <LikeButton> </LikeButton> */}

      {/* <Comments> </Comments> */}

    </div>
  )
}

import React from 'react'
import Card from 'react-bootstrap/Card'
import { parse, format } from 'fecha'
import { Link } from 'react-router-dom'
// import Vote from './Voting'
import Notes from './Notes'
import NotesEditor from './AddNotes'

export default function Discussion ({ post, token }) {
  let postedAt = post.posted_at
  if (typeof postedAt === 'string') {
    postedAt = parse(postedAt, 'isoDateTime')
  }
  postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  return (
    <div className='discussionBrd'>
      <Card style={{ width: '40rem' }}>
        <Card.Header className='discussionHeader'>
          {post.title} #{post.id}
        </Card.Header>
        <p className='postHeader'> Posted by:
          <em> <Link to='/profile/'>{post.user.username} </Link></em>
             on {postedAt}
        </p>

        <Card.Body>
          <Card.Text id='post' className='discussionAnswr'>
            {post.body}
          </Card.Text>
          <Card.Text>
            {post.notes.body}
          </Card.Text>

          {/* <Vote> </Vote> */}
          <Notes token={token}> </Notes>
          <NotesEditor token={token}> </NotesEditor>
        </Card.Body>

      </Card>

    </div>
  )
}

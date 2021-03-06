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
      <Card >
        <Card.Header className='discussionHeader'>
          {post.title}
          <p className='discussionBody'>{post.body}</p>
        </Card.Header>

        <Card.Text>
          <p className='discussionDetail'> Posted by:
            <em> <Link to='/profile/'>{post.user.username} </Link></em>
             on {postedAt}
          </p>
        </Card.Text>

        {/* <Vote> </Vote> */}
        <Notes token={token} notes={post.notes}> </Notes>
        <NotesEditor token={token} id={post.id}> </NotesEditor>


      </Card>

    </div>
  )
}

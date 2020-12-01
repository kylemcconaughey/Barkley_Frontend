import React from 'react'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'
import { parse, format } from 'fecha'
import { Link } from 'react-router-dom'
import Reactions from './Reactions'
import Comments from './Comments'
import AddComments from './AddComment'
// import LikeButton from './LikeButton'

export default function Apost ({ post, token }) {
  let postedAt = post.posted_at
  if (typeof postedAt === 'string') {
    postedAt = parse(postedAt, 'isoDateTime')
  }
  postedAt = format(postedAt, 'MMM D, YYYY hh:mm A')

  return (
    <div className='post'>
      <Card style={{ width: '40rem' }}>
        <h3 className='postHeader'> <img src={post.user.picture} alt='user' className='postProPic' />
          <em> <Link to='/profile/'>{post.user.username} </Link></em>
        </h3>
        <Card.Body className={classNames({
          styleNormal: post.font_style === 'N',
          styleBold: post.font_style === 'B',
          styleItalics: post.font_style === 'I',
          styleUnderline: post.fontStyle === 'U',
          alignmentLeft: post.text_align === 'L',
          alignmentRight: post.text_align === 'R',
          alignmentCenter: post.text_align === 'C',
          alignmentJustified: post.text_align === 'J',
          fontSizeSmall: post.font_size === 0,
          fontSizeMedium: post.font_size === 1,
          fontSizeLarge: post.font_size === 2,
          fontSizeJumbo: post.font_size === 3
        })}
        >
          <Card.Text id='post'>
            {post.image && (
              <img src={post.image} alt='post' className='image' />
            )}
          </Card.Text>
          <Card.Text>
            {post.body}
            <p className='postDate'> <em>{postedAt}</em></p>
          </Card.Text>
          <Card.Text className='likedNum'>
            {post.liked_by.length} likes
          </Card.Text>
          <Card.Text>
            {post.reactions.reaction}
            {post.reactions.user}
            {/* data not being passed from backend to show */}
          </Card.Text>

        </Card.Body>

      </Card>

      <Reactions> </Reactions>
      <Comments comments={post.comments} token={token}> </Comments>
      <AddComments token={token}> </AddComments>

    </div>
  )
}

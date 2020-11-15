import React from 'react'
import Card from 'react-bootstrap/Card'
import classNames from 'classnames'
import { parse, format } from 'fecha'
import { Link } from 'react-router-dom'
import Reactions from './Reactions'

export default function Apost ({ post }) {
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
            {post.body}
            {post.image && (
              <img src={post.image} alt='post' className='image' />
            )}
          </Card.Text>

        </Card.Body>

      </post>

      <Reactions> </Reactions>
      <span role='img' aria-label='heart'>💙</span><Link to='/profile/{post.url}'> {post.liked_by} </Link>
      {/* <Comments> </Comments> */}

    </div>
  )
}

import React, { useState } from 'react'
import Card from 'react-bootstrap/post'
import classNames from 'classnames'
import { parse, format } from 'fecha'
import { Link } from 'react-router-dom'

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
          <em> <Link to='/profile/{post.user_id}'>{post.user} </Link></em>
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
      <i className='far fa-heart' /><Link to='/profile/{post.url}'> {post.liked_by} </Link>

    </div>
  )
}

import React from 'react'
import PropTypes from 'prop-types'
import Posts from './Posts'
import {
  Link
} from 'react-router-dom'

export default function Newsfeed (props) {
  const { token } = props

  return (
    <div className='Home'>
      <button className='addBtn'><Link to='/addpost'> Add new post!</Link></button>
      <Posts token={token} className='post' />
    </div>
  )
}

Newsfeed.propTypes = {
  token: PropTypes.string.isRequired
}

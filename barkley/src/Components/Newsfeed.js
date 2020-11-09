import React from 'react'
import PropTypes from 'prop-types'
import Posts from './Posts'

export default function Newsfeed (props) {
  const { token } = props

  return (
    <div className='Home'>
      <Posts token={token} />
    </div>
  )
}

Newsfeed.propTypes = {
  token: PropTypes.string.isRequired
}

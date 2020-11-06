import React from 'react'
import {
  Link
} from 'react-router-dom'

// Profile
// Direct Messages
// Search
// Location Search
// Recommendations
// Newsfeed

class Nav extends React.Component {
  render () {
    return (
      <div>
        <div className='navlinks'>
          <Link to='/profile'><p className='links'> Profile <i className='fas fa-user-circle' /></p></Link>
          <Link to='/search'> Search <i class='fas fa-search' /> </Link>
          <Link to='/messages'> Messages <i class='far fa-envelope' /> </Link>
          <Link to='/recommendations'> Recommendations <i class='far fa-question-circle' /> </Link>
          <Link to='/newsfeed'> Newsfeed <i class='far fa-newspaper' /> </Link>
          <Link to='/logout'><p className='links'> Logout <i className='fas fa-sign-out-alt' /></p></Link>
        </div>
      </div>
    )
  }
}

export default Nav

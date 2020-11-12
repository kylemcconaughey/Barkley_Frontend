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
          <Link to='/doglist'><p className='links'> DogList</p></Link>
          <Link to='/search'> Explore <i class='fas fa-search' /> </Link>
          <Link to='/newsfeed'> Newsfeed <i class='far fa-newspaper' /> </Link>
          <Link to='/messages'> Notifications <i class='far fa-bell' /> </Link>
          <Link to='/messages'> Messages <i class='far fa-envelope' /> </Link>
          <Link to='/search'> Dog Friendly Locations <i class='fas fa-search-location' /> </Link>
          <Link to='/recommendations'> Helpful Advice <i class='far fa-question-circle' /> </Link>
          <Link to='/logout'><p className='links'> Logout <i className='fas fa-sign-out-alt' /></p></Link>
        </div>
      </div>
    )
  }
}

export default Nav

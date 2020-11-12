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
          <Link to='/profile'><p className='links'> <i className='fas fa-user-circle' /> Profile </p></Link>
          <Link to='/doglist'><p className='links'> DogList</p></Link>
          <Link to='/search'> <i class='fas fa-search' /> Explore  </Link>
          <Link to='/newsfeed'> <i class='far fa-newspaper' /> Newsfeed  </Link>
          <Link to='/messages'> <i class='far fa-bell' /> Notifications </Link>
          <Link to='/messages'> <i class='far fa-envelope' /> Messages </Link>
          <Link to='/search'> <i class='fas fa-search-location' />Dog Friendly  </Link>
          <Link to='/helpful'> <i class='far fa-question-circle' />Helpful Advice  </Link>
          <Link to='/logout'><p className='links'> <i className='fas fa-sign-out-alt' /> Logout </p></Link>
        </div>
      </div>
    )
  }
}

export default Nav

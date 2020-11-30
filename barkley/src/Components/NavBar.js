import React from 'react'
import {
  Link
} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

class NavBar extends React.Component {
  handleShowSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu width='280px'>
        <div className='navlinks'>
          <Link to='/profile'><p className='links'> <i className='fas fa-user-circle' /> Profile </p></Link>
          <Link to='/doglist'><p className='links'> <i className='fas fa-paw' /> Dogs</p></Link>
          <Link to='/search'> <i className='fas fa-search' /> Explore  </Link>
          <Link to='/newsfeed'> <i className='far fa-newspaper' /> Newsfeed  </Link>
          <Link to='/notifications'> <i className='far fa-bell' /> Notifications </Link>
          <Link to='/convos'> <i className='far fa-comments' /> Messages </Link>
          <Link to='/calendar'> <i className='far fa-calendar-alt' />Calendar</Link>
          <Link to='/dogfriendlylocations'> <i className='fas fa-map-marker-alt' /> Map </Link>
          <Link to='/helpful'> <i className='far fa-question-circle' />Discussions  </Link>
          <Link to='/logout'><p className='links'> <i className='fas fa-sign-out-alt' /> Logout </p></Link>
          <Link to='/profile' onClick={this.handleShowSettings} className='menu-item--small'>Settings</Link>
        </div>

      </Menu>
    )
  }
}

export default NavBar

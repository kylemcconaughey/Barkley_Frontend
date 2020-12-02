import React from 'react'
import {
  Link
} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

class NavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      width: window.innerWidth
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };


  render () {
    const { width } = this.state;
  const isMobile = width <= 500;

  if (isMobile) {
    return (
      <Menu width='280px'>
        <div className='navlinksMobile'>
        <Link to='/newsfeed'> <i className="fas fa-home"></i> Home  </Link>
          <Link to='/profile'><p className='links'> <i className='fas fa-user-circle' /> Profile </p></Link>
          <Link to='/doglist'><p className='links'> <i className='fas fa-paw' /> Dogs</p></Link>
          <Link to='/search'> <i className='fas fa-search' /> Explore  </Link>
          {/* <Link to='/notifications'> <i className='far fa-bell' /> Notifications </Link> */}
          <Link to='/messages'> <i className='far fa-comments' /> Messages </Link>
          <Link to='/calendar'> <i className='far fa-calendar-alt' /> Calendar</Link>
          {/* <Link to='/dogfriendlylocations'> <i className='fas fa-map-marker-alt' /> Map </Link> */}
          <Link to='/discussions'> <i className='far fa-question-circle' />Discussion Boards  </Link>
          <Link to='/logout'><p className='links'> <i className='fas fa-sign-out-alt' /> Logout </p></Link>
        </div>
      </Menu>
       );
      } else {
        return (
          <div className='navlinks'>
          <Link to='/newsfeed'> <i className="fas fa-home"></i> Home  </Link>
          <Link to='/profile'><p className='links'> <i className='fas fa-user-circle' /> Profile </p></Link>
          <Link to='/doglist'><p className='links'> <i className='fas fa-paw' /> Dogs</p></Link>
          <Link to='/search'> <i className='fas fa-search' /> Explore  </Link>
          {/* <Link to='/notifications'> <i className='far fa-bell' /> Notifications </Link> */}
          <Link to='/messages'> <i className='far fa-comments' /> Messages </Link>
          <Link to='/calendar'> <i className='far fa-calendar-alt' /> Calendar</Link>
          {/* <Link to='/dogfriendlylocations'> <i className='fas fa-map-marker-alt' /> Map </Link> */}
          <Link to='/discussions'> <i className='far fa-question-circle' />Discussion Boards  </Link>
          <Link to='/logout'><p className='links'> <i className='fas fa-sign-out-alt' /> Logout </p></Link>
        </div>
          )
        }
      }
    }

export default NavBar

import React from 'react'
// import ReactDOM from 'react-dom'
import {
  Link
} from 'react-router-dom'
import { Sidenav, Toggle, Nav } from 'rsuite'

class SideNavBar extends React.Component {
  constructor () {
    super()
    this.state = {
      expanded: true,
      activeKey: ''
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleToggle () {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  handleSelect (eventKey) {
    this.setState({
      activeKey: eventKey
    })
  }

  render () {
    const { expanded } = this.state

    return (
      <div style={{ width: 250 }}>
        <Toggle onChange={this.handleToggle} checked={expanded} />
        <hr />
        <Sidenav
          expanded={expanded}
          defaultOpenKeys={['1', '2']}
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <Sidenav.Body>
            <Nav>
              <div className='navlinks'>

                <Nav.Item eventKey='1'>
                  <Link to='/profile'><p className='links'> <i className='fas fa-user-circle' /> Profile </p></Link>
                </Nav.Item>

                <Nav.Item eventKey='2'>
                  <Link to='/doglist'><p className='links'> <i className='fas fa-paw' /> Dogs</p></Link>
                </Nav.Item>

                <Nav.Item eventKey='3'>
                  <Link to='/search'> <i className='fas fa-search' /> Explore  </Link>
                </Nav.Item>

                <Nav.Item eventKey='4'>
                  <Link to='/newsfeed'> <i className='far fa-newspaper' /> Newsfeed  </Link>
                </Nav.Item>

                <Nav.Item eventKey='5'>
                  <Link to='/notifications'> <i className='far fa-bell' /> Notifications </Link>
                </Nav.Item>

                <Nav.Item eventKey='6'>
                  <Link to='/messages'> <i className='far fa-envelope' /> Messages </Link>
                </Nav.Item>

                <Nav.Item eventKey='7'>
                <Link to='/calendar'> <i className='far fa-calendar-alt' />Calendar</Link>
                </Nav.Item>

                <Nav.Item eventKey='8'>
                  <Link to='/dogfriendlylocations'> <i className='fas fa-search-location' />Dog Friendly  </Link>
                </Nav.Item>

                <Nav.Item eventKey='9'>
                  <Link to='/helpful'> <i className='far fa-question-circle' />Helpful Advice  </Link>
                </Nav.Item>

                <Nav.Item eventKey='10'>
                  <Link to='/logout'><p className='links'> <i className='fas fa-sign-out-alt' /> Logout </p></Link>
                </Nav.Item>

              </div>
            </Nav>
          </Sidenav.Body>
        </Sidenav>

      </div>
    )
  }
}

export default SideNavBar

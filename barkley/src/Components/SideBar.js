import React from 'react'
// import ReactDOM from 'react-dom'
import {
  Link
} from 'react-router-dom'
import { Sidenav, Toggle, Nav, Icon } from 'rsuite'

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

                <Nav.Item eventKey='1' icon={<Icon icon='user' />}>
                  <Link to='/profile'><p className='links'><i className='fas fa-user-circle' /> Profile </p></Link>
                </Nav.Item>

                <Nav.Item eventKey='2' icon={<Icon icon='paw' />}>
                  <Link to='/doglist'><p className='links'> <i className='fas fa-paw' /> Dogs</p></Link>
                </Nav.Item>

                <Nav.Item eventKey='3' icon={<Icon icon='search-peoples' />}>
                  <Link to='/search'> <i className='fas fa-search' /> Explore  </Link>
                </Nav.Item>

                <Nav.Item eventKey='4' icon={<Icon icon='newspaper-o' />}>
                  <Link to='/newsfeed'> <i className='far fa-newspaper' /> Newsfeed  </Link>
                </Nav.Item>

                <Nav.Item eventKey='5' icon={<Icon icon='bell-o' />}>
                  <Link to='/notifications'> <i className='far fa-bell' /> Notifications </Link>
                </Nav.Item>

                <Nav.Item eventKey='6' icon={<Icon icon='comments-o' />}>
                  <Link to='/convos/messages'> <i class='far fa-comments' /> Messages </Link>
                </Nav.Item>

                <Nav.Item eventKey='7' icon={<Icon icon='calendar' />}>
                  <Link to='/calendar'> <i className='far fa-calendar-alt' />Calendar</Link>
                </Nav.Item>

                <Nav.Item eventKey='8' icon={<Icon icon='map-marker' />}>
                  <Link to='/dogfriendlylocations'> <i class='fas fa-map-marker-alt' />Map </Link>
                </Nav.Item>

                <Nav.Item eventKey='9' icon={<Icon icon='help-o' />}>
                  <Link to='/helpful'> <i className='far fa-question-circle' /> Discussion </Link>
                </Nav.Item>

                <Nav.Item eventKey='10' icon={<Icon icon='sign-out' />}>
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

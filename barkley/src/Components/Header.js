import React from 'react'
import Login from './Login'
import Nav from './NavBar'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div>
          {this.props.token
            ? (
              <div>
                <h1 className='appheader'> Barkley </h1>
                <div className='navbar'>
                  <Nav />
                </div>
              </div>

            )
            : (
              <div>
                <div>
                  <h1 className='appheader'>  </h1>
                </div>

                <div>
                  <Login token={this.props.token} username={this.props.username} setToken={this.props.setToken} />
                </div>
              </div>
            )}
        </div>
      </div>
    )
  }
}
export default Header

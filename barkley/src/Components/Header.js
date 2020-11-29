import React from 'react'
import Login from './Login'
// import SideNavBar from './SideBar'
// import logo from './barkleylogo1.png'
import logo from './LOGO2.png'
import NavBar from './NavBar'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div>
          {this.props.token
            ? (
              <div>
                <h1 className='appheader'><img className='appimg' src={logo} alt='Barkley Header' /> </h1>
                <div className='navbar'>
                  <NavBar> </NavBar>
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

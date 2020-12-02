import React from 'react'
import { getToken } from './api'
import Register from './Register'
import logo from './LOGO2.png'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      password: '',
      error: null
    }
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (event) {
    event.preventDefault()
    getToken(this.state.username, this.state.password)
      .then(token => {
        this.props.setToken(token)
        window.localStorage.setItem('login_auth_token', token)
        window.localStorage.setItem('login_username', this.state.username)
      }

      )
      .catch(error => {
        console.log(error)
        this.setState({ error: 'There is no user with that username and password' })
      })
  }

  render () {
    return (

      <div>
        <div>
          <h1 className='appheader'><img className='appimg' src={logo} alt='Barkley Header' /> </h1>
        </div>
        <div className='login'>
          <form onSubmit={this.handleLogin}>
            <div>
              {this.state.error}
            </div>
            <div>
              <label htmlFor='username'>Username</label>
              <input id='username' placeholder='Username' type='text' value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input id='password' placeholder='Password' type='password' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
            </div>
            <div>
              <button type='submit' className='loginBtn'>Login</button>
            </div>
          </form>
        </div>
        <Register />
      </div>
    )
  }
}

export default Login

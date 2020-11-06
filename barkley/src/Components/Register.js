import React, { useState } from 'react'
import { register } from './api.js'
import { Redirect } from 'react-router-dom'

function Register (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { token, onRegister } = props

  if (token) {
    return <Redirect to='/home' />
  }

  function registration (event) {
    event.preventDefault()

    register(username, password)
      .then(function (token) {
        setMessage('Welcome to Barkley!')
        onRegister(token)
      })
  }

  return (
    <div>
      {message &&
        <div>
          {message}
        </div>}
      <div className='signup'>Sign Up for Barkley</div>
      <form onSubmit={registration} className='register'>
        <label
          htmlFor='username'
        />
        <input
          type='text' className='form' placeholder='Username' name='username' value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <label
          htmlFor='password'
        />
        <input
          type='password' className='form' placeholder='Password' name='password' value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <label
          htmlFor='email'
        />
        <button className='formBtn' type='submit'>
            Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register

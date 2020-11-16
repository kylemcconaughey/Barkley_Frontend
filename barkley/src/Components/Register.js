import React, { useState } from 'react'
import { register } from './api.js'
import { Redirect } from 'react-router-dom'

function Register (props) {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [numpets, setNumpets] = useState('')
  const [streetaddress, setStreetaddess] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [phonenum, setPhonenum] = useState('')
  const [birthdate, SetBirthdate] = useState('')
  const [profilepic, setProfilepic] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const { token, onRegister } = props

  if (token) {
    return <Redirect to='/newsfeed' />
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
          htmlFor='firstname'
        />
        <input
          type='text' className='form' placeholder='First name' name='firstname' value={firstname}
          onChange={event => setFirstname(event.target.value)}
        />
        <label
          htmlFor='lastname'
        />
        <input
          type='text' className='form' placeholder='Last name' name='lastname' value={lastname}
          onChange={event => setLastname(event.target.value)}
        />
        <label
          htmlFor='numpets'
        />
        <input
          type='text' className='form' placeholder='Number of pets' name='numpets' value={numpets}
          onChange={event => setNumpets(event.target.value)}
        />
        <label
          htmlFor='streetaddress'
        />
        <input
          type='text' className='form' placeholder='Street address' name='streetaddress' value={streetaddress}
          onChange={event => setStreetaddess(event.target.value)}
        />
        <label
          htmlFor='city'
        />
        <input
          type='text' className='form' placeholder='City' name='city' value={city}
          onChange={event => setCity(event.target.value)}
        />
        <label
          htmlFor='state'
        />
        <input
          type='text' className='form' placeholder='State' name='state' value={state}
          onChange={event => setState(event.target.value)}
        />
        <label
          htmlFor='phonenum'
        />
        <input
          type='text' className='form' placeholder='Phone Number' name='phonenum' value={phonenum}
          onChange={event => setPhonenum(event.target.value)}
        />
        <label
          htmlFor='birthdate'
        />
        <input
          type='text' className='form' placeholder='Birth date' name='birthdate' value={birthdate}
          onChange={event => SetBirthdate(event.target.value)}
        />
        <label
          htmlFor='profilepic'
        />
        <input
          type='file' className='form' id='profilepic' value={profilepic}
          onChange={event => setProfilepic(event.target.value)}
        />
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
        {/* <label
          htmlFor='email'
        /> */}
        <button className='formBtn' type='submit'>
            Sign Up
        </button>
      </form>
    </div>
  )
}

export default Register

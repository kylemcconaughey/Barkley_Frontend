import React from 'react'
import { truncStr } from './Utils'
import { Link } from 'react-router-dom'

function User ({ user }) {
  return (
    <div className='owner'>
      <h2>{truncStr(user.first_name + ' ' + user.last_name, 30)}</h2>
      <div>Username:<Link> {user.username}</Link> </div>
      <div> {user.dogs.name} </div>
      <div> {} </div>
      <div>
        <img src={user.picture} alt='owner' className='userProfPic' />
      </div>
    </div>
  )
}
export default User

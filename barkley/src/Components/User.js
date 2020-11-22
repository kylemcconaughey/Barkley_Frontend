import React from 'react'
import { truncStr } from './Utils'

function User ({ user }) {
  return (
    <div className='owner'>
      <h2>{truncStr(user.first_name + ' ' + user.last_name, 30)}</h2>
      <div>Username:{user.username} </div>
      <div>Profile Link: {user.url} </div>
      <div> {} </div>
      <div>
        <img src={user.picture} alt='owner' className='userProfPic' />
      </div>
    </div>
  )
}
export default User

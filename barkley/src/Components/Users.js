import React from 'react'

function Users ({ users }) {
  return (
    <div className='owner'>
      <h2>{users.first_name} {users.last_name}</h2>
      <div>
        <img src={users.picture} alt='owner' className='userProfPic' />
      </div>
    </div>
  )
}
export default Users

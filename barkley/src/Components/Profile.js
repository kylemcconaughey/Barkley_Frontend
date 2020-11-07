import React from 'react'
import MyPost from './MyPost'
function Profile (props) {
  const { token } = props

  return (
    <div className='profile-container'>
      <div className='user-pic'>{}</div>
      <div className='user-title'>{}</div>
      <div className='post-num'>{}</div>
      <div className='friends'>{}</div>
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <MyPost token={token} />
        list of users post
      </div>
    </div>
  )
}

export default Profile

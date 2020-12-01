import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPersonalUser } from './api'
import MyPost from './MyPost'

import FollowButton from './FollowButton'

// import DogInfo from './DogInfo'
// import FollowButton from './FollowButton'

function Profile (props, { post }) {
  const { token, username } = props
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getPersonalUser(token).then(data => {
      setUserInfo(data)
      console.log(data)
    })
  }, [token])

  return (
    <div>
      <div><img src={userInfo.picture} alt='The User' className='userProfPic' /></div>
      <div className='profile-container'>
        <h1 className='usersNames'>{userInfo.first_name} {userInfo.last_name}</h1>
        <p>Username: <em> {userInfo.username} </em> </p>
        <div className='followers'>Followers: {userInfo.num_friends}</div>
        <div><Link to='/dogprofile'>My Dogs</Link></div>
        <div><Link to='/adddog'> Add another pup</Link></div>
        <FollowButton> Follow </FollowButton>
      </div>
      <div className='profPosts'>
        <h3>My Posts</h3>
        <MyPost token={token} username={username} />
      </div>
    </div>
  )
}

export default Profile

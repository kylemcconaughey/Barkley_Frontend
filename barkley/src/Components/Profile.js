import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPersonalUser } from './api'
import DogProfile from './DogProfile'
import MyPost from './MyPost'

// import FollowButton from './FollowButton'

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
    <div className='profile-container'>
      <div><img src={userInfo.picture} className='userProfPic' /></div>
      <p>{userInfo.first_name}</p>
      <p>{userInfo.username}</p>
      <div className='friends'>Friends: {userInfo.num_friends}</div>
      <div><Link to='/dogprofile'>{DogProfile.name}</Link></div>
      <div className='user-post'>
        <p>Posts</p>
        <MyPost token={token} username={username} />
      </div>
    </div>
  )
}

export default Profile

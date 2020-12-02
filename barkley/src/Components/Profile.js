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
      <div className='div'>
        <div> </div>
        <div className='picDiv'>
          <h1 className='usersNames'>{userInfo.first_name} {userInfo.last_name}</h1>
          <img src={userInfo.picture} alt='The User' className='userProfPic' />
        </div>
      </div>
      <div className='profile-container'>
        <div className='followers'>Followers: {userInfo.num_friends}</div>
        <div className='dogProLink'><Link to='/dogprofile'>My Dogs</Link></div>
        {/* <div className='addDogLink'><Link to='/adddog'> Add another pup</Link></div> */}
        <div><Link to='/messages'> <i className='far fa-envelope' /> Message </Link></div>
        <FollowButton> Follow </FollowButton>
      </div>
      <div className='profPosts'>
        <h3 className='profPostHdr'><i className='fas fa-th' /> Posts</h3>
        <MyPost token={token} username={username} className='profPosts' />
      </div>
    </div>
  )
}

export default Profile

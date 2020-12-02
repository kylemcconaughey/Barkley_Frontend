import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOtherUser } from './api'
// import DogProfile from './DogProfile'
import OtherUsersPosts from './OtherUsersPosts'
import { useParams } from 'react-router'

import FollowButton from './FollowButton'

// import DogInfo from './DogInfo'
// import FollowButton from './FollowButton'

function Profile (props) {
  const { token } = props
  const { id } = useParams()
  console.log('id here: ' + id)
  const [userInfo, setUserInfo] = useState([])

  useEffect(() => {
    getOtherUser(token, id).then(data => {
      setUserInfo(data)
      console.log(data)
    })
  }, [token, id])

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
        <p>Username: <em> {userInfo.username} </em> </p>
        <div className='followers'>Followers: {userInfo.num_friends}</div>
        <div className='dogProLink'><Link to='/dogprofile'>My Dogs</Link></div>
        {/* <div className='addDogLink'><Link to='/adddog'> Add another pup</Link></div> */}
        <div><Link to='/convos'> <i className='far fa-envelope' /> Message </Link></div>
        <FollowButton> Follow </FollowButton>
      </div>
      <div className='profPosts'>
        <h3 className='profPostHdr'><i className='fas fa-th' /> Posts</h3>
        <OtherUsersPosts token={token} id={id} />
      </div>
    </div>
  )
}

export default Profile

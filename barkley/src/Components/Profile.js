import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPostnum } from './api'
import DogProfile from './DogProfile'
import MyPost from './MyPost'
// import FollowButton from './FollowButton'

function Profile (props, { post }) {
  const { token, username, picture } = props
  const [setPostnum] = useState(0)

  useEffect(() => {
    getPostnum(token).then(data => {
      setPostnum(data)
    })
  }, [token, setPostnum])

  return (
    <div className='profile-container'>
      <div className='user-pic'><img src={picture} alt='profile' /></div>
      <div className='user-title'>{username}</div>
      {/* <div className='post-num'>posts: {postnum}</div> */}
      <div><Link to='/dogprofile'>{DogProfile.name}</Link></div>
      {/* <FollowButton> </FollowButton> */}
      {/* <div className='user-dogs'>
        <DogInfo token={token} username={username} />
      </div> */}
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <p>Posts</p>
        <MyPost token={token} username={username} />
      </div>
    </div>
  )
}

export default Profile

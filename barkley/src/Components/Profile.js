import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getDogInfo, getFriendsnum, getPostnum } from './api'
import DogProfile from './DogProfile'
import MyPost from './MyPost'
import PostEditor from './AddPost'
// import DogInfo from './DogInfo'
import FollowButton from './FollowButton'

function Profile (props, { post }) {
  const { token, username } = props
  const [setPostnum] = useState(0)
  const [friends, setFriends] = useState(0)

  useEffect(() => {
    getPostnum(token).then(data => {
      setPostnum(data)
    })
  }, [token, setPostnum])

  useEffect(() => {
    getFriendsnum(token).then(data => {
      setFriends(data)
    })
  }, [token])

  return (
    <div className='profile-container'>
      <div className='user-pic'>{}</div>
      <div className='user-title'>{username}</div>
      {/* <div className='post-num'>posts: {postnum}</div> */}
      <div className='friends'>friends: {friends}</div>
      {/* <div><Link to='/dogprofile'>{DogProfile.name}</Link></div> */}
      {/* <div className='user-dogs'>
        <DogInfo token={token} username={username} />
      </div> */}
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <p>Posts</p>
        <MyPost token={token} username={username} />
      </div>
      <PostEditor />
    </div>
  )
}

export default Profile

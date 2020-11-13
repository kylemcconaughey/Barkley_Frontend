import React, { useEffect, useState } from 'react'
import { getFriendsnum, getPostnum } from './api'
// import DogProfile from './DogProfile'
import MyPost from './MyPost'
import PostEditor from './AddPost'
// import DogInfo from './DogInfo'
import FollowButton from './FollowButton'

function Profile (props, { post }) {
  const { token, username } = props
  const [setPostnum] = useState(0)
  const [friends, setFriends] = useState(0)
  // const [profilepic, setProfilepic] = useState([])

  // useEffect(() => {
  //   getUserInfo(token).then(data => {
  //     setProfilepic(data)
  //   })
  // }, [token])

  useEffect(() => {
    getPostnum(token).then(data => {
      setPostnum(data)
    })
  }, [token])

  useEffect(() => {
    getFriendsnum(token).then(data => {
      setFriends(data)
    })
  }, [token])

  return (
    <div className='profile-container'>
      <div className='user-title'>{username}'s Profile</div>
      <FollowButton />
      {/* <img src={picture} alt='Owner' className='ownerProfPic' /> */}
      <div className='friends'>Followers: {friends}</div>
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

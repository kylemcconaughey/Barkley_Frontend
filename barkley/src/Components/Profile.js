import React, { useEffect, useState } from 'react'
import { getFriendsnum, getPostnum, getUserInfo } from './api'
import MyPost from './MyPost'
import PostEditor from './AddPost'

function Profile (props, { post }) {
  const { token, username } = props
  const [postnum, setPostnum] = useState(0)
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
      <div className='user-pic'>{}</div>
      <div className='user-title'>{username}</div>
      <div className='post-num'>posts: {postnum}</div>
      <div className='friends'>friends: {friends}</div>
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <p>Posts</p>
        <MyPost token={token} username={username} />
      </div>
      <PostEditor></PostEditor>
    </div>
  )
}

export default Profile

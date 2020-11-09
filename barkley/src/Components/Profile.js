import React, { useEffect, useState } from 'react'
import { getFriendsnum, getPostnum, getUserInfo } from './api'
import MyPost from './MyPost'

function Profile (props, { post }) {
  const { token, username } = props
  const [postnum, setPostnum] = useState(0)
  const [friends, setFriends] = useState(0)
  const [profilepic, setProfilepic] = useState([])

  useEffect(() => {
    getUserInfo(token).then(data => {
      setProfilepic(data)
    })
  }, [token])

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
      <div className='user-pic'>{profilepic}</div>
      <div className='user-title'>{username}</div>
      <div className='post-num'>posts: {postnum}</div>
      <div className='friends'>friends: {friends}</div>
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <p>List of Post</p>
        <MyPost token={token} />
      </div>
    </div>
  )
}

export default Profile

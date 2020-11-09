import React, { useEffect, useState } from 'react'
import { getFriendsnum, getPostnum } from './api'
import MyPost from './MyPost'

function Profile (props, { post }) {
  const { token, username } = props
  const [postnum, setPostnum] = useState(0)
  const [friends, setFriends] = useState(0)

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
      <div className='post-num'>Posts: {postnum}</div>
      <div className='friends'>Friends: {friends}</div>
      {/* <div className='bio'>{}</div> */}
      <div className='user-post'>
        <p>List of Post</p>
        <MyPost token={token} />
      </div>
    </div>
  )
}

export default Profile

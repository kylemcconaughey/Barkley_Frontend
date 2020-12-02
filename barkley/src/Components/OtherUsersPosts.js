import React, { useEffect, useState } from 'react'
import Apost from './Post'
import { getOtherUsersPost } from './api'

function OtherUsersPosts (props) {
  const { token, id } = props
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOtherUsersPost(token, id).then(data => {
      setPosts(data)
      setLoading(false)
      console.log(data)
    })
  }, [token, id])

  if (loading) {
    return <p>Loading Post...</p>
  }

  return (
    <div>
      {posts.map(post => (
        <Apost key={post.id} post={post} className='profPosts' />
      ))}
    </div>
  )
}

export default OtherUsersPosts

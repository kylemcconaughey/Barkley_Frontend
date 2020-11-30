import React, { useEffect, useState } from 'react'
import Apost from './Post'
import { getOtherUsersPost } from './api'

function UsersPosts (props) {
  const { token } = props
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getOtherUsersPost(token).then(data => {
      setPosts(data)
      setLoading(false)
      console.log(data)
    })
  }, [token])

  if (loading) {
    return <p>Loading Post...</p>
  }

  return (
    <div>
      {posts.map(post => (
        <Apost key={post.user.id} post={post} />
      ))}
    </div>
  )
}

export default UsersPosts

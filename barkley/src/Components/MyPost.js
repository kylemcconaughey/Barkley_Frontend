import React, { useEffect, useState } from 'react'
import { getUserPost } from './api'

function MyPost (props) {
  const { token } = props
  const [posts, setPosts] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getUserPost(token).then(data => {
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
        L
      {/* {posts.map(post => (

        ))} */}
    </div>
  )
}

export default MyPost

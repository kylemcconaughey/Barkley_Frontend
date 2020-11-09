import React, { useState, useEffect } from 'react'
import { getPosts, getToken } from './api'
import Apost from './Post'
import InfiniteScroll from 'react-infinite-scroller'

export default function Posts (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [postsErr, setPostsErr] = useState(null)

  function getMorePosts () {
    if (nextUrl && !loading) {
      setLoading(true)
      getToken(token, nextUrl).then(addPosts).catch(handleError)
    }
  }

  function addPosts (data) {
    setPosts(posts.concat(data.results))
    setNextUrl(data.next)
    setLoading(false)
  }

  function handleError (error) {
    console.log({ error })
    setPostsErr(error)
    setNextUrl(null)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getPosts(token).then(data => {
      setPosts(data)
      setLoading(false)
    })
  }, [token])

  if (loading) {
    return <p>Loading your posts...</p>
  }

  return (
    <div className='posts'>
      <InfiniteScroll
        initialLoad={false}
        loadMore={getMorePosts}
        hasMore={nextUrl}
        loader={<p key={0}>Loading...</p>}
      >
        {posts.map(post => (
          <Apost key={post.id} post={post} />
        ))}
      </InfiniteScroll>
      {postsErr && (
        <p>There was an error loading the posts</p>
      )}
    </div>
  )
}

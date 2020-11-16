import React, { useState, useEffect } from 'react'
import { getDiscussions, getToken } from './api'
import Recommendation from './Recommendation'
import InfiniteScroll from 'react-infinite-scroller'

export default function Advice (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [advice, setadvice] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [adviceErr, setAdviceErr] = useState(null)

  function getMoreadvice () {
    if (nextUrl && !loading) {
      setLoading(true)
      getToken(token, nextUrl).then(addadvice).catch(handleError)
    }
  }

  function addadvice (data) {
    setadvice(advice.concat(data.results))
    setNextUrl(data.next)
    setLoading(false)
  }

  function handleError (error) {
    console.log({ error })
    setAdviceErr(error)
    setNextUrl(null)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getDiscussions(token).then(data => {
      setadvice(data)
      setLoading(false)
    })
  }, [token])

  if (loading) {
    return <p>Loading advice...</p>
  }

  return (
    <div className='advice'>
      <InfiniteScroll
        initialLoad={false}
        loadMore={getMoreadvice}
        hasMore={nextUrl}
        loader={<p key={0}>Loading...</p>}
      >
        {advice.map(post => (
          <Recommendation key={post.id} post={post} />
        ))}
      </InfiniteScroll>
      {adviceErr && (
        <p>There was an error loading the advice</p>
      )}
    </div>
  )
}


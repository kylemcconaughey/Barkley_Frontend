import React, { useState, useEffect } from 'react'
import { getDiscussions, getToken } from './api'
import Discussion from './Discussion'
import InfiniteScroll from 'react-infinite-scroller'
import {
  Link
} from 'react-router-dom'

export default function Advice (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [advice, setAdvice] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [adviceErr, setAdviceErr] = useState(null)

  function getMoreAdvice () {
    if (nextUrl && !loading) {
      setLoading(true)
      getToken(token, nextUrl).then(addAdvice).catch(handleError)
    }
  }

  function addAdvice (data) {
    setAdvice(advice.concat(data.results))
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
      setAdvice(data)
      setLoading(false)
      console.log(data)
    })
  }, [token])

  if (loading) {
    return <p>Loading advice...</p>
  }

  return (
    <div className='advice'>
      <InfiniteScroll
        initialLoad={false}
        loadMore={getMoreAdvice}
        hasMore={nextUrl}
        loader={<p key={0}>Loading...</p>}
      >
        <button className='addBtn'><Link to='/adddiscussion' style={{ textDecoration: 'none' }}> <i className='far fa-plus-square' /> Add new discussion  </Link></button>
        {advice.map(post => (
          <Discussion key={post.url} post={post} token={token} />
        ))}
      </InfiniteScroll>
      {adviceErr && (
        <p>There was an error loading the advice</p>
      )}
    </div>
  )
}

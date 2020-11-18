import React, { useState, useEffect } from 'react'
import { getNotes, getToken } from './api'
import Note from './Note'
import InfiniteScroll from 'react-infinite-scroller'

export default function Notes (props) {
  const { token } = props
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState([])
  const [nextUrl, setNextUrl] = useState(null)
  const [NotesErr, setNotesErr] = useState(null)

  function getMoreNotes () {
    if (nextUrl && !loading) {
      setLoading(true)
      getToken(token, nextUrl).then(addNotes).catch(handleError)
    }
  }

  function addNotes (data) {
    setNotes(notes.concat(data.results))
    setNextUrl(data.next)
    setLoading(false)
  }

  function handleError (error) {
    console.log({ error })
    setNotesErr(error)
    setNextUrl(null)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getNotes(token).then(data => {
      setNotes(data)
      setLoading(false)
      console.log(data)
    })
  }, [token])

  if (loading) {
    return <p>Loading answers...</p>
  }

  return (
    <div className='Notes'>
      <InfiniteScroll
        initialLoad={false}
        loadMore={getMoreNotes}
        hasMore={nextUrl}
        loader={<p key={0}>Loading...</p>}
      >
        {notes.map(note => (
          <Note key={note.id} note={note} token={token} />
        ))}
      </InfiniteScroll>
      {NotesErr && (
        <p>There was an error loading the Notes</p>
      )}
    </div>
  )
}

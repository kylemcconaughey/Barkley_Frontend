import React, { useState, useEffect, useRef } from 'react'
import { Form, ListGroup, Jumbotron } from 'react-bootstrap'

export default function Search () {

  const [query, setQuery] = useState('')
  const [users, setUsers] = useState([])
  const focusSearch = useRef(null)

  useEffect(() => { focusSearch.current.focus() }, [])

  const searchUsers = async (query) => {
    const results = await fetch(`http://brkly.herokuapp.com/users/search?term=${query}`, {
      headers: { accept: 'application/json' }
    })
    const usersData = await results.json()
    return usersData.results
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  useEffect(() => {
    let currentQuery = true
    const controller = new AbortController()

    const loadusers = async () => {
      if (!query) return setUsers([])

      await sleep(350)
      if (currentQuery) {
        const users = await searchUsers(query, controller)
        setUsers(users)
      }
    }
    loadusers()

    return () => {
      currentQuery = false
      controller.abort()
    }
  }, [query])

  const usersComponents = users.map((users, index) => {
    return (
      <ListGroup.Item key={index} action variant='secondary'>
        {users.username}
      </ListGroup.Item>
    )
  })

  return (
    <>
      <Jumbotron fluid>
        <Form id='search-form'>
          <h4>Search Barkley</h4>
          <Form.Control
            type='text'
            placeholder='Search for a person or dog...'
            ref={focusSearch}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </Form>

        <ListGroup>
          {usersComponents}
        </ListGroup>
      </Jumbotron>
    </>
  )
}

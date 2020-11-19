import React, { useState, useEffect } from 'react'
import Convo from './Conversation'
import {
  Link
} from 'react-router-dom'
import { getConvo } from './api'

function Conversations (props) {
  const { token } = props
  const [convo, setConvo] = useState([])

  useEffect(() => {
    getConvo(token).then(data => {
      setConvo(data)
      console.log(data)
    })
  }, [token])

  return (
    <div>
      <p className='m-title'> </p>
      <div>
        {convo.map(cList => (
          <div key={cList.url} className='convos'>
            <Convo key={cList.id} cList={cList} />
            <h1 className='convoHdr'> Conversation: </h1> {cList.convo_name}
            <Link to='/messages'> <i class='far fa-comments' /> See this convo </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conversations

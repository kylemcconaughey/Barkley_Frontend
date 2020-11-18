import React, { useState, useEffect } from 'react'
import Convo from './Conversation'
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
      <p className='m-title'>Conversations</p>
      <div>
        {convo.map(cList => (
          <Convo key={cList.id} cList={cList} />
        ))}
      </div>
    </div>
  )
}

export default Conversations

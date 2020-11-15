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
      <div>
        {convo.map(clist => (
          <Convo key={clist.id} clist={clist} />
        ))}
      </div>
    </div>
  )
}

export default Conversations

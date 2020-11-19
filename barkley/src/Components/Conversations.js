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
      <p className='m-title'> </p>
      <div >
        {convo.map(cList => (
          <div key={cList.url} className='convos'>
            <Convo key={cList.id} cList={cList} />
            <h1 className='convoHdr'> Conversation: </h1> {cList.convo_name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Conversations

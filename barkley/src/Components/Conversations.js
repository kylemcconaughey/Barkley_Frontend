import React, { useState, useEffect } from 'react'
import Chat from './Chat'
import { getConvo } from './api'

function Conversations (props) {
  const { token, username } = props
  const [convos, setConvos] = useState([])
  const [showConversationId, setShowConversationId] = useState(null)

  useEffect(() => {
    getConvo(token).then(data => {
      setConvos(data)
      console.log(data)
    })
  }, [token])

  const conversationToShow = convos.find(convo => convo.id === showConversationId)

  return (
    <div>
      <p className='m-title'>Conversations</p>
      <div>
        {convos.map(cList => (
          <div key={cList.url} className='convos'>
            <button onClick={(e) => setShowConversationId(cList.id)}>{cList.convo_name}</button>
          </div>
        ))}
      </div>
      {conversationToShow && (
        <Chat conversation={conversationToShow} username={username} token={token} onSent={() => console.log('onSent')} />
      )}
    </div>
  )
}

export default Conversations

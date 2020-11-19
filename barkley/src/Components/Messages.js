import React, { useEffect, useState } from 'react'
import { getMessages } from './api'

function Messages (props) {
  const { token } = props
  const [messages, Setmessages] = useState([])

  useEffect(() => {
    getMessages(token).then(data => {
      Setmessages(data)
    })
  }, [messages, token])

  return (
    <div>
      <div className='messages'>
        {messages.map((messages) => (
          <p className='indivmessages' key={messages.url}>
            {messages.body}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Messages

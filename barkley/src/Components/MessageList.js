import React, { useEffect, useState } from 'react'
import { getMessages } from './api'

function MessageList (props) {
  const { token } = props
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getMessages(token).then(data => {
      setMessages(data)
      console.log(data)
    })
  }, [token])

  return (
    <div className='message-list'>
      <div>
        {/* {messages.map(mess => (
          mess
        ))} */}
      </div>
    </div>
  )
}

export default MessageList

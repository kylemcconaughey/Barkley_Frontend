import React, { useState } from 'react'
import { sendMessage } from './api'

function Chat (props) {
  const { token, onSent, conversation } = props
  const [body, setBody] = useState('')

  function onSubmit (e) {
    e.preventDefault()

    sendMessage(token, body, conversation.id)
      .then(function (token) {
        onSent(token)
      })
  }

  return (
    <div>
      <div>
        {conversation.messages.map(m => (
          <div className='message' key={m.url}>
            {m.body}
            <p className='sentInfo'> <em> Sent by:  {m.sender.username} on {m.niceCreated} </em> </p>
            <p> In: <em>  {m.conversation} </em></p>
          </div>
        ))}
      </div>
      <form className='chat-box' onSubmit={onSubmit}>
        <label
          htmlFor='message'
        />
        <input
          type='text' placeholder='Type a message' className='message' value={body}
          onChange={e => setBody(e.target.value)}
        />
        <button type='submit' className='addBtn'>
          Send Message
        </button>
      </form>
    </div>

  )
}

export default Chat

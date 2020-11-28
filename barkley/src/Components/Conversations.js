import React, { useState, useEffect } from 'react'
import Chat from './Chat'
import { getConvo, AddConversation, getUserInfo } from './api'

function Conversations (props) {
  const { token, username } = props
  const [convos, setConvos] = useState([])
  const [convoname, setConvoName] = useState('')
  const [showConversationId, setShowConversationId] = useState(null)
  const [options, setOptions] = useState([])
  const [members, setMembers] = useState([])
  const [created, setCreated] = useState(false)

  useEffect(() => {
    getConvo(token).then(data => {
      setConvos(data)
      console.log(data)
    })
  }, [token])

  useEffect(() => {
    getUserInfo(token).then(data => {
      setOptions(data)
      console.log(data)
    })
  }, [token])

  function MakeNewConvo (e) {
    e.preventDefault()

    AddConversation(token, convoname, members)
      .then(function (token) {
      })
      // .then(() => setCreated(true))
  }

  const conversationToShow = convos.find(convo => convo.id === showConversationId)

  return (
    <div>
      <p className='m-title'>Conversations</p>
      <form onSubmit={MakeNewConvo}>
        <input
          type='text' onChange={e => setConvoName(e.target.value)} value={convoname}
        />
        <p>Select Members: </p>
        <select
          multiple value={members} onChange={e => {
            const value = Array.from(e.target.selectedOptions, option => option.value)
            setMembers(value)
          }}
        >
          {/* {options.map(option => (
            <option
              key={option.id}
              value={option.id}
            >
              {option.username}
            </option>
          ))}
        </select> */}
        </select>

        <button type='submit'>Add new conversation</button>
      </form>

      <div>
        {convos.map(cList => (
          <div key={cList.url} className='convos'>
            <button className='convoHdr' onClick={(e) => setShowConversationId(cList.id)}>{cList.convo_name}</button>
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

import React, { useState, useEffect } from 'react'
import Chat from './Chat'
import { getConvo, AddConversation, getUserInfo } from './api'
import { Link } from 'react-router-dom'
import Select from 'react-select'

function Conversations (props) {
  const { token, username } = props
  const [convos, setConvos] = useState([])
  const [convoname, setConvoName] = useState('')
  const [options, setOptions] = useState([])
  const [members, setMembers] = useState([])
  const [showConversationId, setShowConversationId] = useState(null)

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
  }

  const conversationToShow = convos.find(convo => convo.id === showConversationId)

  return (
    <div>
      <h2 className='m-title'>Conversations</h2>
      <h3> View a conversation or </h3>
      <div className='item1'>
        {convos.map(cList => (
          <div key={cList.url} className='convos'>
            <Link to='/messages'> </Link><button className='convoHdr' onClick={(e) => setShowConversationId(cList.id)}>{cList.convo_name}</button>
          </div>
        ))}
      </div>
      {conversationToShow && (
        <Chat conversation={conversationToShow} username={username} token={token} onSent={() => console.log('onSent')} />
      )}
      <h3>Start a new Conversation</h3>
      <div className='item2'>
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
            {options.map(option => (
              <option
                key={option.id}
                value={option.id}
              >
                {option.username}
              </option>
            ))}
          </select>

          <button type='submit' className='addBtn'>Add new conversation</button>
        </form>
      </div>
    </div>
  )
}

export default Conversations

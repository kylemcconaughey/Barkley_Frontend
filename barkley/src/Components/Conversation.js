import React, { useState } from 'react'
import Chat from './Chat'

function Convo ({ clist }) {
  const [showchat, setShowChat] = useState(false)

  // function handleClick (event) {
  //   setShowChat(true)
  // }

  //  const showchat = () => {
  //    setShowChat(!showchat)
  //  }
  return (
    <div className='message-container'>
      <button onClick={() => setShowChat(!showchat)}>{clist.convo_name}</button>
    </div>
  )
}

/* Need to make it where when you click on convo
it opens up chat  */

export default Convo

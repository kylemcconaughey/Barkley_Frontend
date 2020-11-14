import React from 'react'
import Chat from './Chat'

function Convo ({ clist }) {
  

  return (
    <div className='message-container'>
      <button onClick={Chat}>{clist.convo_name}</button>
    </div>
  )
}

/* Need to make it where when you click on convo
it opens up chat  */

export default Convo

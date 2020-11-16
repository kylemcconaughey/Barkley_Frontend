import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getComments } from './api'

// const Comments = (props) => {
//   const commentslist = props.data.map((obj, index) => {
//     const link = '/u/' + obj.username
//     return (<li key={index}><span className='commentUsr'><Link to={link}>{obj.username}</Link></span> <span className='comment'>{obj.comment}</span></li>)
//   })

//   return (
//     <div className='comments'>
//       <ul>
//         {commentslist}
//       </ul>
//     </div>
//   )
// }

// export default Comments

function Comments (props) {
  const { token } = props
  const [comment, SetComment] = useState([])

  useEffect(() => {
    getComments(token).then(data => {
      SetComment(data)
      console.log(data)
    })
  }, [token])

  return (
    <div>
      <div>{comment}</div>
    </div>
  )
}

export default Comments

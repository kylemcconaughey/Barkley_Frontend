import React, { useEffect, useState } from 'react'
import Users from './Users'
import { getUserInfo } from './api'

function UsersInfo (props) {
  const { token } = props
  const [usersInfo, setUsersInfo] = useState([])

  useEffect(() => {
    getUserInfo(token).then(data => {
      setUsersInfo(data)
      console.log(data)
    })
  }, [token])

  return (
    <div className=''>
      {usersInfo.map(users => (
        <Users key={users.id} users={users} />
      ))}
    </div>
  )
}

export default UsersInfo

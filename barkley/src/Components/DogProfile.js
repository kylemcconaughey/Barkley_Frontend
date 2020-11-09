import React, { useEffect, useState } from 'react'
import { getDogInfo } from './api'

function DogProfile (props) {
  const { token } = props
  const [name, setName] = useState([])
  const [breed, setBreed] = useState([])

  useEffect(() => {
    getDogInfo(token).then(data => {
      setName(data)
      setBreed(data)
      console.log(data)
    })
  }, [token])

  return (
    <div className='profile-container'>
      <div>{name}</div>
      <div>{breed}</div>
    </div>
  )
}
export default DogProfile

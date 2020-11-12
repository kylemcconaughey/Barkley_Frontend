import React, { useEffect, useState } from 'react'
import DogProfile from './DogProfile'
import { getDogInfo } from './api'

function DogInfo (props) {
  const { token } = props
  const [doginfo, setDogInfo] = useState([])

  useEffect(() => {
    getDogInfo(token).then(data => {
      setDogInfo(data)
      console.log(data)
    })
  }, [token])

  return (
    <div className=''>
      {doginfo.map(dog => (
        <DogProfile key={dog.id} dog={dog} />
      ))}
    </div>
  )
}

export default DogInfo

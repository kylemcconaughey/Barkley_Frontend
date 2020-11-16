import React, { useEffect, useState } from 'react'
import DogProfile from './DogProfile'
import { getDogInfo } from './api'

function DogInfo (props) {
  const { token, url } = props
  const [doginfo, setDogInfo] = useState([])

  useEffect(() => {
    getDogInfo(token, url).then(data => {
      setDogInfo(data)
      console.log(data)
    })
  }, [token])

  return (
    <div>
      {doginfo.map(dog => (
        <DogProfile key={dog.url} dog={dog} />
      ))}
    </div>
  )
}

export default DogInfo

import React, { useEffect, useState } from 'react'
import DogProfile from './DogProfile'
import { getPersonalDogInfo } from './api'

function PersonalDogInfo (props) {
  const { token, url } = props
  const [doginfo, setDogInfo] = useState([])

  useEffect(() => {
    getPersonalDogInfo(token, url).then(data => {
      setDogInfo(data)
      console.log(data)
    })
  }, [token, url])

  return (
    <div>
      {doginfo.map(dog => (
        <DogProfile key={dog.url} dog={dog} />
      ))}
    </div>
  )
}

export default PersonalDogInfo

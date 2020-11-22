import React from 'react'
import { truncStr } from './Utils'

function DogList ({ dogs }) {
  return (
    <div className='owner'>
      <h2>{truncStr(dogs.name, 30)}</h2>
      {/* <div> Has {user.num_pets} Dog(s) </div> */}
      <div>
        <img src={dogs.picture} alt='owner' className='dogProfPic' />
      </div>
    </div>
  )
}
export default DogList

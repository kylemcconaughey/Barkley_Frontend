import React from 'react'
import { Link } from 'react-router-dom'

function DogProfile ({ dog }) {
  return (
    <div className='doggo'>
      <h2 className='doggoName'>{dog.name} </h2>
      <div>
        <img src={dog.picture} alt='doggo' className='dogProfPic' />
      </div>
      <div>Age: {dog.age}</div>
      <div>Breed:{dog.breed}</div>
      <div>Good in group sizes: {dog.group_size}</div>
      <div>Vaccinated: {dog.vaccinated}</div>
      <div>Owner: <Link to='/profile'><em>{dog.owner.username} </em></Link><em> </em></div>
    </div>
  )
}
export default DogProfile

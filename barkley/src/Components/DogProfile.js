import React from 'react'

function DogProfile ({ dog }) {
  return (
    <div className='doggo'>
      <h2>{dog.name} </h2>
      <div>
        <img src={dog.picture} alt='doggo' className='dogProfPic' />
      </div>
      <div>Age: {dog.age}</div>
      <div>Breed:{dog.breed}</div>
      <div>Good in group sizes: {dog.group_size}</div>
      <div>Vaccinated: {dog.vaccinated}</div>
      <div>Owner: {dog.url}</div>
    </div>
  )
}
export default DogProfile

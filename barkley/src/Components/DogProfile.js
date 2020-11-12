import React from 'react'

function DogProfile ({ dog }) {
  return (
    <div>
      <div>{dog.picture}</div>
      <div>{dog.name}</div>
      <div>{dog.age}</div>
      <div>{dog.breed}</div>
      <div>{dog.energy}</div>
      <div>{dog.group_size}</div>
      <div>{dog.kid_friendly}</div>
      <div>{dog.size}</div>
      <div>{dog.temper}</div>
      <div>{dog.vaccinated}</div>
    </div>
  )
}
export default DogProfile

import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'
import { createcards, uploadImage } from './axios'

function AddPosts (props) {
  const [body, setBody] = useState('')
  const [text_align, setTextAlign] = useState('')
  const [font_size, setFontSize] = useState('')
  const image = useRef(null)
  const [color, setColor] = useState('')
  const [createcard, setCreatecard] = useState(false)
  const { authToken } = props

  if (createcard) {
    return <Redirect to='/newsfeed/' />
  }

  if (!authToken) {
    return <Redirect to='/login' />
  }

  function trySubmit (event) {
    event.preventDefault()
    const imagefile = image.current.files[0]
    createcards(authToken, title, body, text_align, color, font_size)
      .then(data => {
        if (imagefile) {
          return uploadImage(authToken, data.url, imagefile)
        }
      })
      .then(() => setCreatecard(true))
  }

  return (

    <div className='posts'>
      <h1 className='addHeader'>Add a new post! </h1>
      <form onSubmit={trySubmit} className='postPost'>
        <label
          htmlFor='body'
        />
        <textarea
          type='text'
          className='formBody'
          placeholder='Type your post here'
          name='body'
          required
          value={body}
          onChange={event => setBody(event.target.value)}
        />
        <div>Alignment Style:</div>
        <select
          value={text_align}
          onChange={event => setTextAlign(event.target.value)}
        >
          <option value='L'>Left</option>
        <option value='R'>Right</option>
            <option value='C'>Center</option>
            <option value='J'>Justified</option>
        </select>
        <div>Font Size:</div>
        <select
          value={color}
          onChange={event => setColor(event.target.value)}
        >
          <option value='none'>None</option>
          <option value='black'>Black</option>
          <option value='blue'>Blue</option>
          <option value='red'>Red</option>
        </select>
        <div>font_size Size:</div>
        <select
          value={font_size}
          onChange={event => setfont_size(event.target.value)}
        >
          <option value='none'>None</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
        <label htmlFor='image'>Upload Image:</label>
        <input ref={image} type='file' id='image' />
        <button className='form-field-bttn' type='submit'>
            Create Card!
        </button>
      </form>
    </div>
  )
}

export default 
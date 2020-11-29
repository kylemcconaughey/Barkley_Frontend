import axios from 'axios'

const request = axios.create({
  baseURL: 'https://brkly.herokuapp.com/'
})

export function getToken (username, password) {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(response => response.data.auth_token)
}

export function register (username, password, firstname, lastname, streetaddress, numpets, city, state, phonenum, birthdate) {
  return axios.post('https://brkly.herokuapp.com/auth/users/', {
    username: username,
    password: password,
    first_name: firstname,
    last_name: lastname,
    street_address: streetaddress,
    num_pets: numpets,
    city: city,
    state: state,
    phone_num: phonenum,
    birthdate: birthdate
  })
    .then(res => res.token)
}
export function getUserPost (token) {
  return axios.get('https://brkly.herokuapp.com/posts/mine/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getPersonalUser (token) {
  return axios.get('http://brkly.herokuapp.com/users/me/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getOtherUsersPost (token) {
  return axios.get('https://brkly.herokuapp.com/posts/mine/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getUserInfo (token) {
  return axios.get('https://brkly.herokuapp.com/users/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
}

export function getFriendsnum (token) {
  return axios.get('https://brkly.herokuapp.com/users/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getPostnum (token) {
  return axios.get('', {
    Authorization: 'Token ' + token
  })
    .then(res => res.data)
}

export function uploadImage (token, postUrl, image) {
  return axios.put(postUrl + 'image/', image, {
    headers: {
      Authorization: 'Token ' + token,
      'Content-Type': image.type,
      'Content-Disposition': `attachment; filename=${image.name}`
    }
  }).then(res => res.data)
}

export function getPosts (token) {
  return axios.get('https://brkly.herokuapp.com/posts/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getDogInfo (token) {
  return axios.get('https://brkly.herokuapp.com/dogs/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getMessages (token) {
  return axios.get('https://brkly.herokuapp.com/messages/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getConvo (token) {
  return axios.get('https://brkly.herokuapp.com/conversations/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getComments (token) {
  return axios.get('https://brkly.herokuapp.com/comments/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getDiscussions (token) {
  return axios.get('https://brkly.herokuapp.com/discussionboards/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function createNotes (token, body, board) {
  return request.post('/discussionboards/', {
    body: body,
    board: board
  }, {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function getNotes (token) {
  return axios.get('https://brkly.herokuapp.com/notes/', {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function addComment (token, body, post) {
  return axios.post('http://brkly.herokuapp.com/comments/', { post: post, body: body }, {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function sendMessage (token, body, id) {
  return axios.post('http://brkly.herokuapp.com/messages/', { conversation: id, body: body }, {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

export function AddConversation (token, convoname, members) {
  return axios.post('http://brkly.herokuapp.com/conversations/', { convoname: convoname, members: [members] }, {
    headers: {
      Authorization: 'Token ' + token
    }
  })
    .then(res => res.data)
}

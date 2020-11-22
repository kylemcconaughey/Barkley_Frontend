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

export function register (username, password) {
  return axios.post('https://brkly.herokuapp.com/auth/users/', {
    username: username,
    password: password
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

export function uploadImage (token, cardUrl, image) {
  return axios.put(cardUrl + 'image/', image, {
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

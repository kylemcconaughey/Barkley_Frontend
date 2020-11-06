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
  return axios.post('https://brkly.herokuapp.com//auth/users/', {
    username: username,
    password: password
  })
    .then(res => res.token)
}

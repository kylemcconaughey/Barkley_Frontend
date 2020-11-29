import React from 'react'
import './App.css'
import 'rsuite/dist/styles/rsuite-default.css'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import Header from './Components/Header'
import Logout from './Components/Logout'
import Profile from './Components/Profile'
import Register from './Components/Register'
import Newsfeed from './Components/Newsfeed'
import PostEditor from './Components/AddPost'
import DogInfo from './Components/DogInfo'
import AddDog from './Components/AddDogs'
import Search from './Components/Search'
// import DogSearch from './Components/DogSearch'
import Discussions from './Components/Discussions'
import DiscussionEditor from './Components/AddDiscussion'
import Notes from './Components/Notes'
import Note from './Components/Note'
import NotesEditor from './Components/AddNotes'
// import DogProfile from './Components/DogProfile'
import Conversations from './Components/Conversations'
// import Notifications from './Components/Notifications'
// import Chat from './Components/Chat'
import Calendar from './Components/Calendar'
import Map from './Components/Location'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      token: window.localStorage.getItem('login_auth_token'),
      username: window.localStorage.getItem('login_username') || ''
    }
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout (event) {
    this.setState({ token: null, username: '' })
    window.localStorage.removeItem('login_auth_token')
    window.localStorage.removeItem('login_username')
  }

  render () {
    return (
      <div>
        <Router>
          <header>
            <div>
              <Header token={this.state.token} setToken={token => this.setState({ token: token })} username={this.state.username} />
              <Redirect to='/newsfeed/' />
            </div>
          </header>
          <div>
            <Switch>
              <Route path='/' exact component={Home}> </Route>
              <Route path='/login' exact component={Login}> Login </Route>
              <Route path='/logout/'><Logout onLogout={this.handleLogout} /></Route>
              <Route path='/profile'> <Profile token={this.state.token} username={this.state.username} /></Route>
              <Route path='/dogprofile/'> <DogInfo token={this.state.token} username={this.state.username} /></Route>
              <Route path='/doglist'> <DogInfo token={this.state.token} username={this.state.username} /></Route>
              <Route path='/adddog'><AddDog token={this.state.token} username={this.state.username} /> </Route>
              <Route path='/search'><Search token={this.state.token} username={this.state.username}> </Search> </Route>
              <Route path='/convos/messages'> <Conversations token={this.state.token} username={this.state.username} /> </Route>
              {/* <Route path='/notifications'><Notifications token={this.state.token} username={this.state.username}> </Notifications> </Route> */}
              <Route path='/helpful'><Discussions token={this.state.token} username={this.state.username} /> </Route>
              <Route path='/adddiscussion'><DiscussionEditor token={this.state.token} username={this.state.username} /></Route>
              <Route path='/newsfeed'><Newsfeed token={this.state.token} username={this.state.username} />   </Route>
              <Route path='/addpost'><PostEditor token={this.state.token} username={this.state.username}>  </PostEditor></Route>
              <Route path='/helpful'><Notes token={this.state.token} username={this.state.username}> </Notes></Route>
              <Route path='/helpful'><Note token={this.state.token} username={this.state.username}> </Note></Route>
              <Route path='/helpful'><NotesEditor token={this.state.token} username={this.state.username}>  </NotesEditor></Route>
              <Route path='/calendar'> <Calendar> </Calendar> </Route>
              <Route path='/dogfriendlylocations'><Map> </Map></Route>
              <Route path='/register'><Register /></Route>
            </Switch>
          </div>
        </Router>

      </div>
    )
  }
}

export default App

import React from 'react'
import './App.css'
import 'rsuite/dist/styles/rsuite-default.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
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
import Search from './Components/Search'
import Discussions from './Components/Discussions'
import DiscussionEditor from './Components/AddDiscussion'
import NotesEditor from './Components/AddNotes'
// import NavBar from './Components/NavBar'
// import DogProfile from './Components/DogProfile'
import Conversations from './Components/Conversations'
import Chat from './Components/Chat'
import SideNavBar from './Components/SideBar'
import Calendar from './Components/Calendar'

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
      <Router>
        <header>
          <div>
            <Header token={this.state.token} setToken={token => this.setState({ token: token })} username={this.state.username} />
          </div>
        </header>
        <div>
          <SideNavBar> </SideNavBar>
        </div>

        <Switch>
          <Route path='/' exact component={Home}> </Route>
          <Route path='/login' exact component={Login}> Login </Route>
          <Route path='/logout/'><Logout onLogout={this.handleLogout} /></Route>
          <Route path='/profile'> <Profile token={this.state.token} username={this.state.username} /></Route>
          <Route path='/dogprofile/'> <DogInfo token={this.state.token} username={this.state.username} /></Route>
          <Route path='/doglist'> <DogInfo token={this.state.token} username={this.state.username} /></Route>
          <Route path='/search'><Search token={this.state.token} username={this.state.username}> </Search> </Route>
          <Route path='/messages'> <Conversations token={this.state.token} username={this.state.username} /> <Chat token={this.state.token} username={this.state.username} /> </Route>
          <Route path='/helpful'><Discussions token={this.state.token} username={this.state.username} /> </Route>
          <Route path='/addnewdiscussion'><DiscussionEditor token={this.state.token} username={this.state.username} /></Route>
          <Route path='/newsfeed'><Newsfeed token={this.state.token} username={this.state.username} />   </Route>
          <Route path='/addpost'><PostEditor token={this.state.token} username={this.state.username}>  </PostEditor></Route>
          <Route path='/addanswer'><NotesEditor token={this.state.token} username={this.state.username}>  </NotesEditor></Route>
          <Route path='/calendar'> <Calendar> </Calendar> </Route>
          <Route path='/register'><Register /></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

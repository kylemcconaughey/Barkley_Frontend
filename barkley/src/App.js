import React from 'react'
import './App.css'
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
import DogInfo from './Components/DogInfo'
import Search from './Components/Search'
// import NavBar from './Components/NavBar'
// import DogProfile from './Components/DogProfile'
import Conversations from './Components/Conversations'
import Map from './Components/Location'
import Advice from './Components/Recommendations'
import SideNavBar from './Components/SideBar'
import CalendarPost from './Components/Calendar'

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
          <Route path='/search'><Search> </Search> </Route>
          <Route path='/dogfriendlylocations'><Map> </Map></Route>
          <Route path='/messages'> <Conversations token={this.state.token} username={this.state.username} /> </Route>
          <Route path='/calendar'> <CalendarPost> </CalendarPost></Route>
          <Route path='/helpful'><Advice> </Advice> </Route>
          <Route path='/newsfeed'><Newsfeed token={this.state.token} username={this.state.username} /> </Route>
          <Route path='/register'><Register /></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

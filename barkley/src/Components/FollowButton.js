import React from 'react'
import axios from 'axios';

export default class FollowButton extends React.Component {
    constructor(props){
        super(props);
  this.state = {
    follow: false,
    users: [], 
    token: localStorage.getItem('login_auth_token'),
    userid: this.props.userId
  }
  this.toggleFollow=this.toggleFollow.bind(this)
}

toggleFollow() {
    this.setState((follow) => ({ follow: !this.state.follow }))
}

handleSubmit = e => {
    axios.post(`https://brkly.herokuapp.com/users/${this.state.usersid}/follow/`, this.state, {
        headers: {
            Authorization: `Token ${this.state.token}`
        }
    })
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
}

handleFollowing = e => {
    axios.post(`https://brkly.herokuapp.com/users/${this.state.usersid}/follow/`, this.state, {
      headers: {
        Authorization: `Token ${this.state.token}`
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const follow = this.state.follow;
    if (follow === null) {
      return (
        <div>
          <button
            
            className="followBtn"
            onClick= {() => {
                this.toggleFollow();
                this.handleFollowing();
            }}>
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      )
    }
    if (follow === true) {
      return (
        <div>
          <button 
            usersid='follow.id'
            className="followBtn" 
            onClick= {() => {
                this.toggleFollow();
                this.handleFollowing();
            }}>
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      );
    }
    if (follow === false)
     {
      return (
        <div>
        <button
          className="followBtn"
          onClick= {() => {
            this.toggleFollow();
            this.handleFollowing();
            }}>
        <i className="fas fa-user-plus"></i>
        </button>
      </div>
      )
    }
  }
}

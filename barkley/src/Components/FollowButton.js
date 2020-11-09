import React from 'react'
import axios from 'axios';

export default class FollowButton extends React.Component {
    constructor(props){
        super(props);
  this.state = {
    followers: false,
    users: [], 
    token: localStorage.getItem('login_auth_token'),
    userid: this.props.userId
  }
  this.toggleFollow=this.toggleFollow.bind(this)
}

toggleFollow() {
    this.setState((followers) => ({ followers: !this.state.followers }))
}

handleSubmit = e => {
    axios.post('https://brkly.herokuapp.com/users/', this.state, {
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
    axios.post(`https://brkly.herokuapp.com/users/${this.state.userid}/follow/`, this.state, {
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
    const followers = this.state.followers;
    if (followers === null) {
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
    if (followers === true) {
      return (
        <div>
          <button 
            usersid='followers.id'
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
    if (followers === false)
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

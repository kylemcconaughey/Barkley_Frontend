import React, { Component } from 'react'
import axios from 'axios';

class Vote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      voting: [
        { title: 'Agree', name: 'upvote', votes: 0 },
        { title: 'Disagree', name: 'downvote', votes: 0 }
      ]
    }
  }

  makeVote = e => {
    axios.post(`${this.props.url}` + e + "/", this.state, {
      headers: {
        Authorization: `Token ${this.props.token}`
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  vote(i) {
    const newVotes = [...this.state.voting]
    newVotes[i].votes++
    console.log(newVotes)
    this.setState({ voting: newVotes })
    this.makeVote(newVotes[i].name)
  }

  render() {
    return (
      <>
        <div className='voting'>
          {
            this.state.voting.map((vote, i) =>
              <div key={i} className='votes'>
                <div className='voteCount'>
                  <button className='voteBtn' onClick={this.vote.bind(this, i)}>{vote.title}</button>
                </div>
              </div>
            )
          }
        </div>
      </>
    )
  }
}
export default Vote

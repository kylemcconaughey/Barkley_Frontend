import React, { Component } from 'react'

class Vote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      voting: [
        { name: 'Agree', votes: 0 },
        { name: 'Disagree', votes: 0 }
      ]
    }
  }

  vote (i) {
    const newVotes = [...this.state.voting]
    newVotes[i].votes++
    console.log(newVotes)
    this.setState({ voting: newVotes })
  }

  render () {
    return (
      <>
        <div className='voting'>
          {
            this.state.voting.map((vote, i) =>
              <div key={i} className='votes'>
                <div className='voteCount'>
                  {vote.name} <button onClick={this.vote.bind(this, i)}>Vote</button>
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

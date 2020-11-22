import React, { Component } from "react";
// import axios from "axios";
import { search } from "./Utils";
import DogList from "./Dog";

class DogSearch extends Component {
  state = {
    dogs: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true })
    const results = await search(
      `https://brkly.herokuapp.com/dogs/name_search/?q=${val}`, {
        headers: {
         Authorization: `Token ${this.props.token}`
        }
      })
    const dogs = results

    this.setState({ dogs, loading: false })
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value })
  };

  get renderdogs() {
    let dogs = <h2>There are no dogs with that name</h2>
    if (this.state.dogs) {
      console.log(this.state.dogs)
      dogs = this.state.dogs.map(dog => <DogList key={dog.id} dog={dog} />)
    }

    return dogs;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type here to search for a dog"
        />
        {this.renderdogs}
      </div>
    );
  }
}

export default DogSearch;

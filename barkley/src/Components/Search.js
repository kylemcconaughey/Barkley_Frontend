import React, { Component } from "react";
// import axios from "axios";

import { search } from "./Utils";
import UsersInfo from "./Users";

class Search extends Component {
  state = {
    users: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `https://brkly.herokuapp.com/users/search/?q=${val}`
    );
    const users = results;

    this.setState({ users, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderusers() {
    let users = <h2>There's no users with that name</h2>;
    if (this.state.users) {
      users = <UsersInfo list={this.state.users} />;
    }

    return users;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderusers}
      </div>
    );
  }
}

export default Search;

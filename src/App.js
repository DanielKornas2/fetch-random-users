import React, { Component } from 'react';
import './App.css';

import ButtonFetchUsers from './components/ButtonFetchUsers/ButtonFetchUsers';
import UsersList from './components/UsersList/UsersList';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {

  state = {
    users: null
  }

  handleDataFetch = () => {
    console.log('click')
  }

  render() {

    const users = this.state.users;

    return (
      <div>
        <ButtonFetchUsers handleDataFetch={this.handleDataFetch} />
        { users ? <UsersList /> : users }
      </div>
    );
  }
}

export default App;

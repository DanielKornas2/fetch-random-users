import React, { Component } from 'react';
import './App.css';

import ButtonFetchUsers from './components/ButtonFetchUsers/ButtonFetchUsers';
import UsersList from './components/UsersList/UsersList';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonFetchUsers />
        <UsersList />
      </div>
    );
  }
}

export default App;

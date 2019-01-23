import React from 'react';

const ButtonFetchUsers = (props) => {
    return (
        <button onClick={props.handleDataFetch}>Dodaj użytkownika</button>
      );
}
 
export default ButtonFetchUsers;
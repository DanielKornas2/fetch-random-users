import React from 'react';

const ButtonFetchUsers = (props) => {
    return (
        <button onClick={props.handleDataFetch}>Dodaj 5 użytkowników</button>
      );
}
 
export default ButtonFetchUsers;
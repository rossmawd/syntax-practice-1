import React from 'react';
import './UserInput.css'


const UserInput = (props) => {

  return (
    <div>
      <input
        type="text"
        className="Input"
        placeholder={props.hello}
        onChange={props.changeUsername}
        value={props.username}
      ></input>
    </div>
  );
}


export default UserInput;
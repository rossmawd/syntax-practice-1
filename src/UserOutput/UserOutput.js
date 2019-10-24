import React from 'react';

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid red', 
  padding: '8px'
}

const UserOutput = (props) => {

    return (
      <div>
       <p style={style} >The username passed through props is: {props.username}</p>
       <p>Para 2</p>
      </div>
    );
  }


export default UserOutput;
import React from 'react';
import "./MyInput.css";

function MyInput(props) {
  return (
    <input type="text" {...props}/>
  );
};

export default MyInput;
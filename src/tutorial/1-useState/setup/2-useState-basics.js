import React, { useState } from 'react';

// **************************************************
// **        General Rules for using Hooks         **
// **      Component name should be uppercase      **
// **     Hook always start with  keyword use      **
// **  should be called inside function/component  **
// **         cannot call conditionally            **
// **************************************************

const UseStateBasics = () => {

  const [text, setText] = useState('Random Title')

  const handleClick = () => {
    if (text === 'Random Title') {
      setText('Hello World')
    }
    else {
      setText('Random Title')
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

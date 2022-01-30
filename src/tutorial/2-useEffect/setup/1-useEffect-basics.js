import React, { useState, useEffect } from 'react';
// useEffect by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)
  // Here in useEffect notice that we added an empty array as second arguement.
  // Due to which useEffect will only run in the initial render and not everytime 
  // useState re-renders everything.
  // To change the title of document remove empty array from second arguement
  // if you want to invoke useEffect when a particular element updates 
  // pass that element in that array of second arguement
  // For eg. if you want to invoke useEffect whenever the variable value changes
  // pass value in that array which is shown below

  // useEffect will be invoked on every re-render
  /*
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  })*/

  // useEffect will be invoked only on initial render
  /*
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [])*/

  // useEffect wiil be invoked when variable value changes
  useEffect(() => {
    console.log('call useEffect');
    if (value >= 1) {
      document.title = `New Messages(${value})`
    }
  }, [value])
  console.log('render component');

  return <>
    <h1>{value}</h1>
    <button className="btn" onClick={() => setValue(value + 1)}>
      click me
    </button>
  </>;
};

export default UseEffectBasics;

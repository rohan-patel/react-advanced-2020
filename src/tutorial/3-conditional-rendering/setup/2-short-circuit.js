import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)

  // in || if the first element is falsy i.e if text is empty in this case
  // it it will return 'hello world' and if vice versa then it will return text
  const firstValue = text || 'hello world';
  
  // in case of && if text is empty it will return nothing and
  // if it is tuthsy then it will return second element
  const secondValue = text && 'hello world';

  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}
    <h1>{text || 'rohan patel'}</h1>
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
    {text && <h1>hello world</h1>}
    {isError && <h1>Error...</h1>}
    {isError ? (
      <p>there is an error...</p>
    ) : (
      <div>
        <h2>there is no error</h2>
      </div>
    )}
  </>;
};

export default ShortCircuit;

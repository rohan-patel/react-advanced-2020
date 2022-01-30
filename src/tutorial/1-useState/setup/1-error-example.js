import React from 'react'

const ErrorExample = () => {
  let title = 'Random Title'

// If you want to change the title like below thwn you cant
// because we are not re-rendering it.
// this is done in part 2 - useState-basics.js

  const handleClick = () => {
    console.log(title)
    title = 'Hello People'
    console.log(title)
  }

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default ErrorExample
